<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BalanceTransfer extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'to_username','amount'];

    public function toUser(){
    	return $this->belongsTo(User::class, 'username', 'to_username');
    }

    public function user(){
    	return $this->belongsTo(User::class);
    }

}
