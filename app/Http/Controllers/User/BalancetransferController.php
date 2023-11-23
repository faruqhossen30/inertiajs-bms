<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class BalancetransferController extends Controller
{
    public function index():Response
    {
        return Inertia::render('User/BalanceTransfer');
    }


    public function update(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $validated = $request->validate([
            'to_username' => ['required'],
            'amount' => ['required','numeric','min:20','max:{$user->balance}'],
            'password' => ['required', 'current_password'],
        ]);

        // $request->user()->update([
        //     'club_id' => $request->club_id,
        // ]);

        return to_route('profile');
    }
}
