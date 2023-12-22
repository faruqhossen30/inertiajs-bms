<?php

namespace App\Http\Controllers\User;

use App\Enum\BetstatusEnum;
use App\Enum\TransactionTypeEnum;
use App\Http\Controllers\Controller;
use App\Models\Bet;
use App\Models\MatcheQuestion;
use App\Models\QuestionOption;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;

class BetController extends Controller
{

    public function index(Request $request)
    {
        $bets = Bet::where('user_id', $request->user()->id)->latest()->paginate(25);
        return Inertia::render('User/Bet/BetList', ['bets' => $bets]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            "matche_id" => "required",
            "question_id" => "required",
            "option_id" => "required",
            "bet_rate" => "required",
            "bet_amount" => "required|numeric|min:20|max:{$user->balance}",
        ], [
            "bet_amount.min" => "Minimu bet amount 20 TK.",
            "bet_amount.max" => "Insufficent balance! You can use maximum {$user->balance} TK",
        ]);

        $checkOption = QuestionOption::firstWhere('id', $request->option_id);
        if($checkOption->bet_rate != $request->bet_rate){
            return throw ValidationException::withMessages([
                'rate_matching' => 'Opps ! Bet rate maybe changed ! Try Again.',
            ],422);
        }


        $checkQuestion = MatcheQuestion::where([
            'id' => $request->question_id,
            'active' => 1
        ])->first();


        if ($checkQuestion && $checkOption->status) {
            $bet = Bet::create([
                'user_id' => $user->id,
                'matche_id' => $request->matche_id,
                'question_id' => $request->question_id,
                'option_id' => $request->option_id,
                'bet_rate' => $request->bet_rate,
                'bet_amount' => $request->bet_amount,
                'return_amount' => $request->bet_rate * $request->bet_amount,

                'club_id' => $user->club_id,
                'sponsor_id' => $user->sponsor_id,
                'club_commission' => (2 / 100 * $request->bet_amount),

                'match_title' => $request->match_title,
                'question_title' => $request->question_title,
                'option_title' => $request->option_title,
                'status' => BetstatusEnum::PENDING
            ]);

            if ($bet) {
                $user->decrement('balance', $request->bet_amount);
                Transaction::create([
                    'user_id' => $user->id,
                    'debit' => $request->bet_amount,
                    'credit' => 0,
                    'description' => "Bet {$request->bet_amount} TK.",
                    'balance' =>  $user->balance,
                    'type' =>  TransactionTypeEnum::BET,
                    'author_id' =>  Auth::user()->id
                ]);

                $club = User::firstWhere('id', $user->club_id);
                $sponser = User::firstWhere('id', $user->sponser_id);

                $clubCommission = ($club->club_commission / 100) * $request->bet_amount;
                $addBalanceToClub = $club->increment('balance', $clubCommission);
                $club->save();

                if ($sponser) {
                    $sponser_rate = option('sponser_commission');
                    $sponserCommission = ($sponser_rate / 100) * $request->bet_amount;
                    $addSponserCommission = $sponser->increment('balance', $sponserCommission);

                    Transaction::create([
                        'user_id' => $sponser->id,
                        'debit' => 0,
                        'credit' => $sponserCommission,
                        'description' => "Sponser Commission",
                        'balance' =>  $sponser->balance,
                        'type' =>  TransactionTypeEnum::BET,
                        'author_id' =>  Auth::user()->id
                    ]);
                }

                // return $clubCommission;

                Transaction::create([
                    'user_id' => $club->id,
                    'debit' => 0,
                    'credit' => $clubCommission,
                    'description' => "Club Commission",
                    'balance' =>  $club->balance,
                    'type' =>  TransactionTypeEnum::BET,
                    'author_id' =>  Auth::user()->id
                ]);
            }
            return to_route('homepage');
        } else {
            return to_route('homepage');
        }




        // return $request->all();
    }
}
