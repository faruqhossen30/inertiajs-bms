<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\QuestionOption;
use Illuminate\Http\Request;

class QuestionoptionController extends Controller
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'bet_rate' => 'required',
            'status' => 'required',
        ]);

        QuestionOption::create([
            'matche_id' => $request->matche_id,
            'matche_question_id' => $request->matche_question_id,
            'title' => $request->title,
            'bet_rate' => $request->bet_rate,
            'status' => $request->status
        ]);
        return to_route('matche.index');
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
        //
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
            'title' => 'required',
            'bet_rate' => 'required'
        ]);

        QuestionOption::firstWhere('id', $id)->update([
            'title' => $request->title,
            'bet_rate' => $request->bet_rate
        ]);

        // return redirect()->route('matche.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        QuestionOption::firstWhere('id', $id)->delete();
        return redirect()->back();
    }

    public function activeToggle($id)
    {
        $questionOption = QuestionOption::firstWhere('id', $id);

        $update = $questionOption->update([
            'active' => !$questionOption->active,
        ]);

        return to_route('matche.index');
    }

    public function hideToggle($id)
    {
        $questionOption = QuestionOption::firstWhere('id', $id);

        $update = $questionOption->update([
            'is_hide' => !$questionOption->is_hide,
        ]);

        return to_route('matche.index');
    }
}
