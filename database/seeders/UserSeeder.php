<?php

namespace Database\Seeders;

use App\Models\AutoQuestion;
use App\Models\PaymentGateway;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Faruq Hossen',
            'username' => 'user',
            'email' => 'user@gmail.com',
            'mobile' => '234234',
            'is_admin' => false,
            'is_user' => true,
            'club_id' => 3,
            'password' => Hash::make('123')
        ]);

        User::create([
            'name' => 'Club Holder',
            'username' => 'club',
            'email' => 'club@gmail.com',
            'mobile' => '453434',
            'is_admin' => false,
            'is_user' => false,
            'is_club' => true,
            'club_commission' => 2,
            'password' => Hash::make('123')
        ]);

        // AutoQuestion::create([
        //     'title' => 'Who will be win?',
        //     'game_id' => 1,
        //     'game_name' => "Cricket",
        //     'status' => 1
        // ]);


        PaymentGateway::create([
            'bank' => 'Bkash',
            'type' => 'personal',
            'number' => '01928406434',
        ]);
    }
}
