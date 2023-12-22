<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Matche;
use App\Models\QuestionOption;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AdmintestController extends Controller
{
    public function test()
    {
        $curentdatetime = Carbon::now()->addMinutes(5);
        $curent = Carbon::now();


        $matchs = Matche::
        whereDate('date_time', date('Y-m-d'))
        ->where('date_time', date('H:i' , strtotime('+5 minutes')))->get();

        return $matchs;
    }
}
