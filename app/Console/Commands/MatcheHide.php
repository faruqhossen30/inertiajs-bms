<?php

namespace App\Console\Commands;

use App\Models\Matche;
use Carbon\Carbon;
use Illuminate\Console\Command;

class MatcheHide extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'matche:hide';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Hide match before match start';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $curentdatetime = Carbon::now()->addMinutes(5);
        $matchs = Matche::where('date_time', '<=', $curentdatetime)->get();

        foreach ($matchs as $match) {
            $match->update([
                'active' => false,
                'is_hide' => true
            ]);
        }


        // $matchs = Matche::whereDate('date', date('Y-m-d'))->where('time', date('H:i' , strtotime('+5 minutes')))->get();
        // foreach ($matchs as $match ){
        //     $match->update(['is_hide' => '1', 'is_active' => '0']);
        // }
    }
}
