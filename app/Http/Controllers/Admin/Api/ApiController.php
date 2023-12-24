<?php

namespace App\Http\Controllers\Admin\Api;

use App\Enum\WithdrawEnum;
use App\Http\Controllers\Controller;
use App\Models\Deposit;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function depositCount(){
        $deposits = Deposit::where('status', WithdrawEnum::PENDING)->count();
        return $deposits;
    }
}
