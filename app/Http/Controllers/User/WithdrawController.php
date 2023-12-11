<?php

namespace App\Http\Controllers\User;

use App\Enum\TransactionTypeEnum;
use App\Enum\WithdrawEnum;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Withdraw;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class WithdrawController extends Controller
{
    public function index(Request $request): Response
    {
        $withdraws = Withdraw::with('user')->where('user_id', Auth::user()->id)->latest()->paginate(25);
        return Inertia::render('User/Withdraw/WithdrawList', ['withdraws' => $withdraws]);
    }
    public function withdrawForm(Request $request)
    {
        $withdraw_system = option('withdraw_system');
        return Inertia::render('Withdraw', ['withdraw_system' => $withdraw_system]);
    }
    public function store(Request $request)
    {
        $user = User::firstWhere('id', $request->user()->id);

        $request->validate([
            'method' => 'required',
            'type' => 'required',
            'account' => 'required',
            'amount' => "required|numeric|min:50|max:{$user->balance}",
        ], [
            "amount.min" => "Minimu withdraw amount 50 TK.",
            "amount.max" => "Insufficent balance! You can use maximum {$user->balance} TK",
        ]);

        $withdraw = Withdraw::create([
            'user_id' => $user->id,
            'method' => $request->method,
            'type' => $request->type,
            'account' => $request->account,
            'amount' => $request->amount,
            'status' => WithdrawEnum::PENDING,
        ]);

        if ($withdraw) {
            $user->decrement('balance', $request->amount);
            Transaction::create([
                'user_id' => $user->id,
                'debit' => $request->amount,
                'credit' => 0,
                'description' => "Withdraw {$request->amount} taka.",
                'balance' =>  $user->balance,
                'type' =>  TransactionTypeEnum::WITHDRAW,
                'author_id' =>  Auth::user()->id
            ]);
        }

        return to_route('profile');
    }
}
