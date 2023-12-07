<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MatcheQuestion extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['title', 'matche_id', 'is_hide','area_hide','active', 'status'];

    public function matche()
    {
        return $this->belongsTo(Matche::class);
    }
    public function options()
    {
        return $this->hasMany(QuestionOption::class,'matche_question_id');
    }

    public function bets(){
        return $this->hasMany(Bet::class,'question_id', 'id');
    }

}
