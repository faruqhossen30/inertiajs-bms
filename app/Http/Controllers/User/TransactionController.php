<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index(Request $request)
    {

        $transactions = Transaction::with('user')->where('user_id', $request->user()->id)->latest()->paginate(25);
        return Inertia::render('User/Transaction/TransactionList',['transactions'=>$transactions]);
    }
}
