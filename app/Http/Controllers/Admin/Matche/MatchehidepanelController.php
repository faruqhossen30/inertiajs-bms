<?php

namespace App\Http\Controllers\Admin\Matche;

use App\Http\Controllers\Controller;
use App\Models\HidePanel;
use App\Models\Matche;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MatchehidepanelController extends Controller
{
    public function matcheHidePanel($id)
    {
        $match = HidePanel::where('matche_id', $id)
            ->where('user_id', Auth::user()->id)
            ->first();

        if (!$match) {
            HidePanel::Create([
                'matche_id' => $id,
                'user_id' => Auth::user()->id
            ]);
        }
    }
    public function matcheToPanel($id)
    {
        $match = HidePanel::where('matche_id', $id)
            ->where('user_id', Auth::user()->id)
            ->first()
            ->delete();

            return to_route('matche.index');

    }

    public function hiddenMatcheList()
    {
        $hides = HidePanel::where('user_id', Auth::user()->id)
            ->get()->pluck('matche_id')
            ->toArray();
        $matches = Matche::whereIn('id', $hides)->get();

        return response()->json($matches);
    }
}
