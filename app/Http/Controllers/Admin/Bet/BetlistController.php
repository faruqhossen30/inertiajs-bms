<?php

namespace App\Http\Controllers\Admin\Bet;

use App\Http\Controllers\Controller;
use App\Models\Bet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BetlistController extends Controller
{
    public function index($id)
    {
        $bets = Bet::with('user')->where('option_id', $id)->paginate();
        return Inertia::render('Admin/Bet/betslist',['bets'=>$bets]);
    }
}
