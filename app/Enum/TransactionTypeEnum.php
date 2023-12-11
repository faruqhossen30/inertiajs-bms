<?php
namespace App\Enum;

enum TransactionTypeEnum:string{
    case BET = 'bet';
    case WITHDRAW = 'withdraw';
    case DEPOSIT = 'deposit';
    case BALANCETRANSFER = 'balancetransfer';
}
