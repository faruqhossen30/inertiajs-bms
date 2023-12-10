<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Inertia\Response;
     */
    public function index():Response
    {
        $users = User::where('is_club', false)->orderBy('balance', 'desc')->paginate();
        return Inertia::render('Admin/User/Index',['users'=>$users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Inertia\Response;
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Inertia\Response;
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Inertia\Response;
     */
    public function show($id)
    {
        $user = User::with('club')->firstWhere('id', $id);
        return Inertia::render('Admin/User/Show',['user'=>$user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Inertia\Response;
     */
    public function edit($id)
    {
        $user = User::with('club')->firstWhere('id', $id);
        return Inertia::render('Admin/User/Edit',['user'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return Inertia\Response;
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'username'=>'required',
            'email'=>'required',
            'mobile'=>'required'
        ]);

        $data = [
            'name'=>$request->name,
            'username'=>$request->username,
            'email'=>$request->email,
            'mobile'=>$request->name
        ];

        User::firstWhere('id', $id)->update($data);

        return to_route('user.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Inertia\Response;
     */
    public function destroy($id)
    {
        //
    }
}
