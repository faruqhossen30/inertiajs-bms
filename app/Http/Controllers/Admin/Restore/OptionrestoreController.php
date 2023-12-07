<?php

namespace App\Http\Controllers\Admin\Restore;

use App\Http\Controllers\Controller;
use App\Models\QuestionOption;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OptionrestoreController extends Controller
{
    public function deletedOption() : Response {
        $options = QuestionOption::with(['matche','question'])->onlyTrashed()->paginate();

        return Inertia::render('Admin/Restore/OptionRestore',['options'=>$options]);
    }
    public function restoredOption($id) {

        QuestionOption::withTrashed()->firstWhere('id',$id)->restore();
        return to_route('restore.optionlist');
    }
}
