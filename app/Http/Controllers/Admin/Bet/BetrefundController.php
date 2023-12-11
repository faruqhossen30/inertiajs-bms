<?php

namespace App\Http\Controllers\Admin\Bet;

use App\Enum\BetstatusEnum;
use App\Enum\TransactionTypeEnum;
use App\Http\Controllers\Controller;
use App\Models\Bet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BetrefundController extends Controller
{
    public function betRefund(Request $request)
    {
        $request->validate([
            'betids' => 'required',
            'percentage' => 'required'
        ], [
            'betids.required' => "No bet item selected."
        ]);

        // return $request->all();

        foreach ($request->betids as $key => $id) {
            $betting = Bet::findOrFail($id);
            $percentage = $request->percentage;
            $total = $betting->bet_amount;
            $amount = ($percentage / 100) * $total;

            if ($betting->status != BetstatusEnum::REFUND) {
                $betting->update(['status' => BetstatusEnum::REFUND]);

                $user = $betting->user_id;

                // Add Balance
                $addBalance = $betting->user->increment('balance', $amount);

                // Add Transaction
                $transaction = Transaction::create([
                    'user_id' => $user,
                    'debit' => 0,
                    'credit' => $amount,
                    'description' => 'Refund',
                    'balance' => $betting->user->balance,
                    'type' =>  TransactionTypeEnum::BALANCETRANSFER,
                    'author_id' =>  Auth::user()->id
                ]);

                // Add Alart
                // $alart = new Alart([
                //     'user_id' => $user,
                //     'title' => 'We refunded your bet amount ' . $amount . ' ' . $this->bs->currency_code,
                //     'description' => 'Dear user, we just let to know that, we have refunded your bet amount ' . $amount,
                //     'is_user_alart' => 1,
                //     'is_viewed' => 0,
                //     'status' => 'show',
                // ]);

                // $alart->save();
                return redirect()->back();
            }
        }
    }
}
