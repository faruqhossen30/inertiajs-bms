<?php

use App\Http\Controllers\User\BetController;
use App\Http\Controllers\User\DepositController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\StatementController;
use App\Http\Controllers\User\TransactionController;
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
    $games = Game::get();
    $matches = Matche::with('questions')->with('questions.options')->where('is_hide',0)->orderBy('id','desc')->get();

    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'games' => $games,
        'matches' => $matches,
    ]);
})->name('homepage');



Route::middleware('auth')->group(function () {
    Route::get('deposit/list', [DepositController::class, 'depositList'])->name('depositlist');
    Route::get('deposit', [DepositController::class, 'index'])->name('depositform');
    Route::post('deposit/store', [DepositController::class, 'store'])->name('depositform.store');
    Route::get('withdraw/list', [WithdrawController::class, 'index'])->name('withdrawlist');
    Route::get('withdraw', [WithdrawController::class, 'withdrawForm'])->name('witdrawform');
    Route::post('withdraw', [WithdrawController::class, 'store'])->name('witdrawform.store');

    Route::post('bet', [BetController::class, 'store'])->name('betstore');
    Route::get('bet/list', [BetController::class, 'index'])->name('betlist');

    Route::get('transaction', [TransactionController::class, 'index'])->name('transactionlist');

    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('statement', [StatementController::class, 'index'])->name('statement');
});

require __DIR__.'/auth.php';
