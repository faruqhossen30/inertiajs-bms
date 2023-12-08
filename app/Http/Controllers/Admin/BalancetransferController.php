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

    public function balanceTransferOnOff(Request $request)
    {

        $value = option('balance_transfer');
        if ($value == 'off') {
            option(['balance_transfer' => 'on']);
            return redirect()->back();
        } else {
            option(['balance_transfer' => 'off']);
            return redirect()->back();
        }
    }
}
