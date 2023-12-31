<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Deposit;
use App\Models\PaymentGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DepositController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $diposits = Deposit::where('user_id', $request->user()->id)->get();
        $gateways = PaymentGateway::get();

        return Inertia::render('Deposit', ['gateways'=>$gateways]);
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
        // return $request->all();
        $last_deposit = Deposit::orderBy('id', 'desc')
        ->where(['user_id'=> Auth::user()->id,'status'=>'pending'])
        ->first();

        $validation = $request->validate([
            'method'=> 'required',
            'amount'=> 'required',
            'from_account'=> 'required',
            'to_account'=> 'required',
            'pending'=> $last_deposit ? 'required' : 'nullable',
        ],[
            'pending.required'=> 'You already have a deposit request!'
        ]);



        $data = [
            'user_id'=> $request->user()->id,
            'method'=> $request->method,
            'amount'=> $request->amount,
            'from_account'=> $request->from_account,
            'to_account'=> $request->to_account,
            'transaction_id'=> $request->transaction_id
        ];


        $diposit = Deposit::create($data);

        return to_route('profile');



        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function depositList()
    {
        $deposits = Deposit::with('user')->where('user_id', Auth::user()->id)->latest()->paginate(25);
        return Inertia::render('User/Deposit/DepositList',['deposits'=>$deposits]);
    }
}
