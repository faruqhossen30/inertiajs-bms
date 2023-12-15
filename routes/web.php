<?php

use App\Http\Controllers\User\BalancetransferController;
use App\Http\Controllers\User\BetController;
use App\Http\Controllers\User\ClubController;
use App\Http\Controllers\User\DepositController;
use App\Http\Controllers\User\PasswordController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\ReferralController;
use App\Http\Controllers\User\StatementController;
use App\Http\Controllers\User\TransactionController;
use App\Http\Controllers\User\WalletController;
use App\Http\Controllers\User\WithdrawController;
use App\Models\Game;
use App\Models\Matche;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $header_notice = option('header_notice');
    $games = Game::get();
    $matches = Matche::with(['questions','game','questions.options'])->where('is_hide',0)->orderBy('date_time','asc')->get();

    // return $matches;
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'games' => $games,
        'matches' => $matches,
        'header_notice' => $header_notice,
    ]);
})->name('homepage');



Route::middleware('auth')->group(function () {
    Route::get('deposit/list', [DepositController::class, 'depositList'])->name('depositlist');
    Route::get('deposit', [DepositController::class, 'index'])->name('depositform');
    Route::post('deposit/store', [DepositController::class, 'store'])->name('depositform.store');
    Route::get('withdraw/list', [WithdrawController::class, 'index'])->name('withdrawlist');
    Route::get('withdraw', [WithdrawController::class, 'withdrawForm'])->name('witdrawform');
    Route::post('withdraw', [WithdrawController::class, 'store'])->name('witdrawform.store');
    Route::get('referral/list', [ReferralController::class, 'index'])->name('referrallist');

    Route::post('bet', [BetController::class, 'store'])->name('betstore');
    Route::get('bet/list', [BetController::class, 'index'])->name('betlist');

    Route::get('transaction', [TransactionController::class, 'index'])->name('transactionlist');

    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('statement', [StatementController::class, 'index'])->name('statement');
    Route::get('wallet', [WalletController::class, 'index'])->name('wallet');

    Route::get('change-password', [PasswordController::class, 'index'])->name('changepassword');
    Route::post('change-password', [PasswordController::class, 'update'])->name('changepassword');

    Route::get('change-club', [ClubController::class, 'index'])->name('changeclub');
    Route::post('change-club', [ClubController::class, 'update'])->name('changeclub');

    Route::get('balance-transfer', [BalancetransferController::class, 'index'])->name('blancetransfer');
    Route::post('balance-transfer', [BalancetransferController::class, 'update'])->name('blancetransfer');
});

require __DIR__.'/auth.php';
