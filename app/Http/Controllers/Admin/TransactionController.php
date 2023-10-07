<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transctions = Transaction::with('user')->latest()->paginate(25);
        return Inertia::render('Admin/Transction/Index',['transctions'=>$transctions]);
    }
}
