<?php

namespace App\Http\Controllers\Admin\Restore;

use App\Http\Controllers\Controller;
use App\Models\Matche;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MatcherestoreController extends Controller
{
    public function deletedMatche() : Response {
        $matches = Matche::onlyTrashed()->paginate();

        return Inertia::render('Admin/Restore/MatcheRestore',['matches'=>$matches]);
    }
    public function restoredMatche($id) {

        $matches =Matche::withTrashed()->firstWhere('id',$id)->restore();
        return to_route('restore.matchelist');
    }
}
