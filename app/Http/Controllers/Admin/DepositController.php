<?php

namespace App\Http\Controllers\Admin;

use App\Enum\TransactionTypeEnum;
use App\Http\Controllers\Controller;
use App\Models\Deposit;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $deposits = Deposit::with('user')->latest()->paginate(25);
        return Inertia::render('Admin/Deposit/Index', ['deposits' => $deposits]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $deposit = Deposit::with('user')->firstWhere('id', $id);
        return Inertia::render('Admin/Deposit/Show', ['deposit' => $deposit]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $deposit = Deposit::firstWhere('id', $id);
        return view('admin.deposit.edit', compact('deposit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate(['status' => 'required', 'amount' => 'required']);
        $deposit = Deposit::firstWhere('id', $id);

        // return $request->all();


        if ($deposit->status == 'complete') {
            return abort(404);
        }

        $update = $deposit->update([
            'amount' => $request->amount,
            'status' => $request->status,
        ]);


        if ($update && $request->status == 'complete') {
            User::where('id', $deposit->user_id)->increment('balance', $deposit->amount);
            $user = User::firstWhere('id', $deposit->user_id);

            Transaction::create([
                'user_id' => $deposit->user_id,
                'credit' => $deposit->amount,
                'description' => "Deposit {$deposit->amount} tk complete !",
                'balance' =>  $user->balance,
                'type' =>  TransactionTypeEnum::DEPOSIT,
                'author_id' =>  Auth::user()->id
            ]);
        } elseif ($update && $request->status == 'cancle') {
            // User::where('id', $deposit->user_id)->decrement('balance', $deposit->amount);
            $user = User::firstWhere('id', $deposit->user_id);

            Transaction::create([
                'user_id' => $deposit->user_id,
                'description' => "Deposit {$deposit->amount} tk cancle !",
                'balance' =>  $user->balance,
                'type' =>  TransactionTypeEnum::DEPOSIT,
                'author_id' =>  Auth::user()->id
            ]);
        }


        return redirect()->route('deposit.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Deposit::firstWhere('id', $id)->delete();
        return redirect()->route('deposit.index');
    }
}
