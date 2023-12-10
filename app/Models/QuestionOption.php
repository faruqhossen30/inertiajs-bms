<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuestionOption extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['matche_id', 'matche_question_id', 'title', 'bet_rate', 'is_hide', 'active', 'is_win', 'is_loss', 'status'];


    protected $casts = [
        'bet_rate' => 'float'
    ];

    public function matche()
    {
        return $this->belongsTo(Matche::class);
    }

    public function question()
    {
        return $this->belongsTo(MatcheQuestion::class, 'matche_question_id');
    }

    public function bets()
    {
        return $this->hasMany(Bet::class, 'option_id', 'id');
    }
}
