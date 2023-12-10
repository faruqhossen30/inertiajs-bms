<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\QuestionOption;
use Illuminate\Http\Request;

class AdmintestController extends Controller
{
    public function test(){
        $option = QuestionOption::with('bets')->firstWhere('id', 4);

        return $option;
    }
}
