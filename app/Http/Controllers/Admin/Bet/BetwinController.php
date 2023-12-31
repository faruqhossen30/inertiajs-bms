<?php

namespace App\Http\Controllers\Admin\Bet;

use App\Enum\BetstatusEnum;
use App\Enum\QuestionstatusEnum;
use App\Enum\TransactionTypeEnum;
use App\Http\Controllers\Controller;
use App\Models\QuestionOption;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BetwinController extends Controller
{
    public function betWin($id)
    {
        $option = QuestionOption::firstWhere('id', $id);
        $option->update(['is_win' => 1,'status'=>0]);
        $question = $option->question;

        // return $option->bets;
        foreach ($option->bets as $key => $bet) {
            $bet->update(['status' => BetstatusEnum::WIN]);
            $user = $bet->user;
            $addBalance = $user->increment('balance', $bet->return_amount);

            $transaction = Transaction::create([
                'user_id' => $user->id,
                'credit' => $bet->return_amount,
                'description' => "Bet win !",
                'balance' =>  $user->balance,
                'type' =>  TransactionTypeEnum::BET,
                'author_id' =>  Auth::user()->id
            ]);
        }

        if (!empty($question->options) &&  $question->options->count()) {
            foreach ($question->options as $key => $option) {
                if ($option->is_win == '1') {
                    $option->update(['is_loss' => '0','status'=>0]);
                } else {
                    $option->update(['is_loss' => '1','status'=>0]);
                }
            }
        }


        if (!empty($question->bets) &&  $question->bets->count()) {
            foreach ($question->bets as $key => $bet) {
                if ($bet->status == 'pending') {
                    $bet->update(['status' => 'loss']);
                }
            }
        }
        $question->update(['status'=> QuestionstatusEnum::COMPLETE]);
        return to_route('matche.index');

    }

    public function betStop($id)
    {
        $option = QuestionOption::firstWhere('id', $id);
        $option->update(['is_hide' => 1]);
        return redirect()->back();
    }
    public function betStart($id)
    {
        $option = QuestionOption::firstWhere('id', $id);
        $option->update(['is_hide' => 0]);
        return redirect()->back();
    }
}
