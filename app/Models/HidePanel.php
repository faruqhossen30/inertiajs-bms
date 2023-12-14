<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HidePanel extends Model
{
    use HasFactory;
    protected $fillable = [
        'matche_id',
        'user_id',
    ];

}
