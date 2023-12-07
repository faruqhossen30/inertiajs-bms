<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ReferralController extends Controller
{
    public function index() : Response {
        $users = User::where('club_id', Auth::user()->id)->paginate();

        return Inertia::render('User/Referral/ReferralList',['users'=>$users]);
    }
}
