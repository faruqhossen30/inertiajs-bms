<?php

namespace App\Http\Controllers\Admin\Restore;

use App\Http\Controllers\Controller;
use App\Models\MatcheQuestion;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QuestionrestoreController extends Controller
{
    public function deletedQuestion() : Response {
        $questions = MatcheQuestion::with('matche')->onlyTrashed()->paginate();

        return Inertia::render('Admin/Restore/QuestionRestore',['questions'=>$questions]);
    }
    public function restoredQuestion($id) {

        $question =MatcheQuestion::withTrashed()->firstWhere('id',$id)->restore();
        return to_route('restore.questionlist');
    }
}
