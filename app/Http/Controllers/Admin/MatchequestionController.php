<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Matche;
use App\Models\MatcheQuestion;
use App\Models\QuestionOption;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatchequestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, $id)
    {
        $matche =  Matche::firstWhere('id', $id);
        return Inertia::render('Admin/Question/Create', ["matche" => $matche]);
        // return view('admin.matchequestion.create', compact('matche_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();

        // return gettype($request->options);
        // return $request->options;

        $request->validate([
            'matche_id' => 'required',
            'title' => 'required',
            'status' => 'required',
        ]);
        $question = MatcheQuestion::create([
            'matche_id' => $request->matche_id,
            'title' => $request->title,
            'is_hide' => 0,
            'status' => $request->status,
        ]);


        return redirect()->route('matche.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $matchequestion = MatcheQuestion::firstWhere('id', $id);
        $matche = Matche::firstWhere('id', $matchequestion->matche_id);
        return Inertia::render('Admin/Question/Edit', ["matchequestion" => $matchequestion,"matche"=>$matche]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required'
        ]);

        MatcheQuestion::firstWhere('id', $id)->update([
            'title' => $request->title
        ]);
        return to_route('matche.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MatcheQuestion::firstWhere('id', $id)->delete();
        return redirect()->route('matche.index');
        // return 'matchequestion.destroy';
    }
    public function stopStart($id)
    {
        $matchQuestion = MatcheQuestion::firstWhere('id', $id);
        //    $check =  $match->status;

        $update = $matchQuestion->update([
            'is_hide' => !$matchQuestion->is_hide,
        ]);

        return redirect()->route('matche.index');
    }
    public function hideToggle($id)
    {
        $matchQuestion = MatcheQuestion::firstWhere('id', $id);
        $update = $matchQuestion->update([
            'is_hide' => !$matchQuestion->is_hide,
        ]);
        QuestionOption::where('matche_question_id',$id)->update(['is_hide'=>$matchQuestion->is_hide]);

        return to_route('matche.index');
    }
    public function activeToggle($id)
    {
        $matchQuestion = MatcheQuestion::firstWhere('id', $id);
        $update = $matchQuestion->update([
            'active' => !$matchQuestion->active,
        ]);
        QuestionOption::where('matche_question_id',$id)->update(['active'=>$matchQuestion->active]);

        return to_route('matche.index');
    }
    public function areaHideToggle($id)
    {
        $matchQuestion = MatcheQuestion::firstWhere('id', $id);
        $update = $matchQuestion->update([
            'area_hide' => !$matchQuestion->area_hide,
        ]);

        return to_route('matche.index');
    }
}
