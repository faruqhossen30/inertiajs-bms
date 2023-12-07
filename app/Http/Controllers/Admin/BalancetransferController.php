<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BalanceTransfer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BalancetransferController extends Controller
{
    public function index(): Response
    {
        $balance_transfer = option('balance_transfer');
        $transctions = BalanceTransfer::with('user')->latest()->paginate(25);
        return Inertia::render('Admin/Balancetransfer/Index', ['transctions' => $transctions,'balance_transfer'=>$balance_transfer]);
    }

    public function withdrawonoff(Request $request)
    {

        $value = option('withdraw_system');
        if ($value == 'off') {
            option(['withdraw_system' => 'on']);
            return redirect()->back();
        } else {
            option(['withdraw_system' => 'off']);
            return redirect()->back();
        }
    }
}
