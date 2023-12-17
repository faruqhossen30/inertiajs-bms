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
        $matchs =
            Matche::where('date_time', '<=', $curentdatetime)
            ->get();

        return $matchs;
    }
}
