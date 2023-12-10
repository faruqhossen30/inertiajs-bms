<?php

namespace App\Http\Controllers\Admin\Bet;

use App\Enum\QuestionstatusEnum;
use App\Http\Controllers\Controller;
use App\Models\MatcheQuestion;
use Illuminate\Http\Request;

class BetresetController extends Controller
{
    // Option Restart

    public function questionRestart(Request $request, $id)
    {
        // $question = Question::find($id);
        $question = MatcheQuestion::firstWhere('id', $id);

        $options = $question->options;

        // return $options;

        if (!empty($options) && $options->count()) {
            foreach ($options as $key => $option) {
                $option->update([
                    'is_loss' => '0',
                    'is_win' => '0'
                ]);

                if (!empty($option->bets) && $option->bets->count()) {
                    foreach ($option->bets as $key => $bet) {
                        $user = $bet->user;
                        $balance = $user->balance;

                        if ($bet->status == 'win') {
                            if ($balance >= $bet->return_amount) {
                                // Minus Balance
                                $minusBalance = $bet->user->decrement('balance', $bet->return_amount);
                            }

                            // Add Alart
                            // $alart = new Alart([
                            //     'user_id' => $user->id,
                            //     'title' => 'We are really sorry for select wrong answer ' . $bet->option->name,
                            //     'description' => 'We are really sorry for select wrong answer ' . $bet->option->name
                            //         . ' we decrease balance ' . $bet->return_amount . ' from your account',
                            //     'is_viewed' => 0,
                            //     'is_admin_alart' => 0,
                            //     'is_user_alart' => 1,
                            //     'status' => 'show',
                            // ]);

                            // $alart->save();
                        }

                        $bet->update(['status' => 'pending']);
                    }
                }
            }
        }
        $question->update(['status'=> QuestionstatusEnum::ACTIVE]);

        // return response()->json($question);
        return to_route('matche.index');
    }
}
