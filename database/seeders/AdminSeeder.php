<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Super Admin',
            'username'=>'admin',
            'email'=>'admin@gmail.com',
            'mobile'=>'768',
            'is_admin'=>true,
            'is_user'=>false,
            'password'=>Hash::make('123')
        ]);
        User::create([
            'name'=>'Admin',
            'username'=>'admin2',
            'email'=>'admin2@gmail.com',
            'mobile'=>'7685454587',
            'is_admin'=>true,
            'is_user'=>false,
            'password'=>Hash::make('123')
        ]);

    }
}
