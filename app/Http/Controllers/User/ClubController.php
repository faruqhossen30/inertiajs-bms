<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClubController extends Controller
{
    public function index():Response
    {
        $clubs = User::where('is_club', true)->orderBy('name', 'asc')->get();
        return Inertia::render('User/ChangeClub',['clubs'=>$clubs]);
    }


    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'club_id' => ['required'],
            'password' => ['required', 'current_password'],
        ]);

        $request->user()->update([
            'club_id' => $request->club_id,
        ]);

        return to_route('profile');
    }

}
