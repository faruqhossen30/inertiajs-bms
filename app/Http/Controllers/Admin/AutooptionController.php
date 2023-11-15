<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AutoOption;
use Illuminate\Http\Request;

class AutooptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'auto_question_id'=>'required',
            'title'=>'required',
            'bet_rate'=>'required',
            'status'=>'required',
        ]);

        AutoOption::create([
            'auto_question_id' => $request->auto_question_id,
            'title' =>  $request->title,
            'bet_rate' =>  $request->bet_rate,
            'status' => $request->status
        ]);

        return to_route('autoquestion.index');


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        AutoOption::firstWhere('id', $id)->delete();
        return to_route('autooption.index');
    }
}
