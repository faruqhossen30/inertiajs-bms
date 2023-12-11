<?php

namespace App\Http\Controllers\User;

use App\Enum\TransactionTypeEnum;
use App\Http\Controllers\Controller;
use App\Models\BalanceTransfer;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class BalancetransferController extends Controller
{
    public function index(): Response
    {
        $balance_transfer = option('balance_transfer');
        return Inertia::render('User/BalanceTransfer', ['balance_transfer' => $balance_transfer]);
    }


    public function update(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $validated = $request->validate([
            'to_username' => ['required'],
            'amount' => ['required', 'numeric', 'min:20', "max:{$user->balance}"],
            'password' => ['required', 'current_password'],
        ]);

        // $request->user()->update([
        //     'club_id' => $request->club_id,
        // ]);

        $user->decrement('balance', $request->amount);

        $blance_transfer = BalanceTransfer::create([
            'user_id' => $user->id,
            'to_username' => $request->to_username,
            'amount' => $request->amount,
        ]);

        Transaction::create([
            'user_id' => $user->id,
            'debit' => $request->amount,
            'credit' => 0,
            'description' => "Balance Transfer",
            'balance' =>  $user->balance,
            'type' =>  TransactionTypeEnum::BALANCETRANSFER,
            'author_id' =>  Auth::user()->id
        ]);

        return to_route('profile');
    }
}
