<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Matche extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['team_one', 'team_two', 'team_one_flag', 'team_two_flag', 'statement', 'game_id', 'date_time', 'note','is_hide','area_hide','active','job','status'];

    protected $casts = [
        'date_time' => 'datetime'
    ];


    public function questions()
    {
        return $this->hasMany(MatcheQuestion::class,'matche_id');
    }
    public function bets()
    {
        return $this->hasMany(Bet::class,'matche_id', 'id');
    }

    public function game()
    {
        return $this->belongsTo(Game::class,'game_id');
    }

    public function hides()
    {
        return $this->hasMany(HidePanel::class);
    }




}
