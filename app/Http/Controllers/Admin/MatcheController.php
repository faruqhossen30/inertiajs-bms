<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AutoOption;
use App\Models\AutoQuestion;
use App\Models\Game;
use App\Models\Matche;
use App\Models\MatcheQuestion;
use App\Models\QuestionOption;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatcheController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $matches = Matche::with(['questions', 'bets'])
            ->with(['questions.options', 'questions.bets'])
            ->with(['questions.options.bets'])
            ->orderBy('created_at', 'desc')
            ->get();
        return Inertia::render('Admin/Matche/Index',['matches'=>$matches]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $countries = Team::get();
        $games = Game::get();
        return Inertia::render('Admin/Matche/Create',['countries'=>$countries,'games'=>$games]);
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
            'team_one' => 'required',
            'team_two' => 'required',
            'statement' => 'required',
            'date_time' => 'required',
            'game_id' => 'required',
            'auto_question' => 'required',
            'status' => 'required',
        ]);

        $data = [
            'team_one' => $request->team_one,
            'team_two' => $request->team_two,
            'team_one_flag' => $request->team_one_flag,
            'team_two_flag' => $request->team_two_flag,
            'statement' => $request->statement,
            'date_time' => $request->date_time,
            'game_id' => $request->game_id,
            'note' => $request->note,
            'is_hide' => true,
            'status' => $request->status
        ];
        $matche = Matche::create($data);

        if ($request->auto_question == 1) {

            $matchequestions = AutoQuestion::where('game_id', $request->game_id)->get();

            foreach ($matchequestions as $question) {
                $mq = MatcheQuestion::create([
                    'title' => $question['title'],
                    'matche_id' => $matche->id,
                    'is_hide' => false,
                    'status' => true,
                ]);

                $options = AutoOption::where('auto_question_id', $question->id)->get();

                foreach ($options as $option) {
                    $title = $option['title'];

                    if ($option['title'] == '#team-1#') {
                        $title = $request->team_one;
                    } elseif ($option['title'] == '#team-2#') {
                        $title = $request->team_two;
                    }


                    QuestionOption::create([
                        'matche_id' => $matche->id,
                        'matche_question_id' => $mq->id,
                        'title' => $title,
                        'bet_rate' => $option['bet_rate'],
                        'is_hide' => false,
                        'is_win' => false,
                        'is_loss' => false,
                        'status' => true
                    ]);
                }
            }
        }

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
        $match = Matche::firstWhere('id', $id);
        $check =  $match->hide;

        $update = $match->update([
            'hide' => !$match->hide,
        ]);
        return redirect()->back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $countries = Team::get();
        $games = Game::get();
        // return $countries;

        $matche = Matche::firstWhere('id', $id);
        // return view('admin.matche.edit', compact('match', 'countries', 'games'));
        return Inertia::render('Admin/Matche/Edit',['countries'=>$countries,'games'=>$games,'matche'=>$matche]);
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
            'team_one' => 'required',
            'team_two' => 'required',
            'statement' => 'required',
            'date_time' => 'required',
            'game_id' => 'required',
            'status' => 'required',
        ]);

        $data = [
            'team_one' => $request->team_one,
            'team_two' => $request->team_two,
            'team_one_flag' => $request->team_one_flag,
            'team_two_flag' => $request->team_two_flag,
            'statement' => $request->statement,
            'date_time' => $request->date_time,
            'game_id' => $request->game_id,
            'note' => $request->note,
            'status' => $request->status,
        ];
        Matche::firstWhere('id',$id)->update($data);
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
        Matche::firstWhere('id', $id)->delete();
        // MatcheQuestion::where('matche_id', $id)->delete();
        // QuestionOption::where('matche_id', $id)->delete();
        return to_route('matche.index');
    }

    public function changeStatus($id)
    {
        $match = Matche::firstWhere('id', $id);
        //    $check =  $match->status;

        $update = $match->update([
            'status' => !$match->status,
        ]);
        return redirect()->back();
    }
    public function isHideToggle($id)
    {
        $match = Matche::firstWhere('id', $id);

        $update = $match->update([
            'is_hide' => !$match->is_hide,
        ]);
        return to_route('matche.index');
    }

    public function areHideToggle($id)
    {
        $match = Matche::firstWhere('id', $id);

        $update = $match->update([
            'area_hide' => !$match->area_hide,
        ]);
        return to_route('matche.index');
    }
    public function activeToggle($id)
    {
        $match = Matche::firstWhere('id', $id);
        $is_hide = $match->active;

        $update = $match->update([
            'active' => !$match->active,
            'is_hide' => $is_hide,
        ]);
        // MatcheQuestion::where('matche_id', $id)->update(['active'=>$match->active]);
        // QuestionOption::where('matche_id', $id)->update(['active'=>$match->active]);
        return to_route('matche.index');
    }
}
