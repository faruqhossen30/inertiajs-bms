<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'debit', 'credit', 'description', 'balance','type','author_id'];

    public function user()
    {
        return $this->hasOne(User::class, 'id','user_id');
    }

}
