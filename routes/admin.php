<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\AutooptionController;
use App\Http\Controllers\Admin\AutoquestionController;
use App\Http\Controllers\Admin\Bet\BetlistController;
use App\Http\Controllers\Admin\Bet\BetresetController;
use App\Http\Controllers\Admin\Bet\BetwinController;
use App\Http\Controllers\Admin\BetController;
use App\Http\Controllers\Admin\ClubController;
use App\Http\Controllers\Admin\DepositController;
use App\Http\Controllers\Admin\GameController;
use App\Http\Controllers\Admin\MatcheController;
use App\Http\Controllers\Admin\MatchequestionController;
use App\Http\Controllers\Admin\QuestionoptionController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\WithdrawController;
use App\Models\Bet;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// use Inertia\Response;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'admin']], function () {
    Route::get('/dashboard', function () {
        $bets = Bet::whereDate('created_at', Carbon::today())->get();
        return Inertia::render('Admin/Dashboard', ['bets'=>$bets]);
    })->name('dashboard');

    // Admin
    Route::resource('deposit', DepositController::class);
    Route::resource('withdraw', WithdrawController::class);
    Route::resource('transaction', TransactionController::class);

    Route::resource('autoquestion', AutoquestionController::class);
    Route::resource('autooption', AutooptionController::class);

    // Users
    Route::resource('user', UserController::class);
    Route::resource('club', ClubController::class);
    Route::resource('user', UserController::class);
    Route::resource('team', TeamController::class);
    Route::resource('game', GameController::class);


    // Matche
    Route::resource('matche', MatcheController::class);
    Route::get('matche/ishide/{id}', [MatcheController::class, 'isHideToggle'])->name('matchehidetoggle');
    Route::get('matche/areahide/{id}', [MatcheController::class, 'areHideToggle'])->name('matchearehidetoggle');
    Route::get('matche/activetoggle/{id}', [MatcheController::class, 'activeToggle'])->name('matcheactivetoggle');

    // Matche Question
    Route::get('matche/{id}/matchequestion/create', [MatchequestionController::class, 'create'])->name('matchequestion.create');
    Route::post('matche/{id}/matchequestion/create', [MatchequestionController::class, 'store'])->name('matchequestion.store');
    Route::get('/matchequestion/{id}/edit', [MatchequestionController::class, 'edit'])->name('matchequestion.edit');
    Route::put('/matchequestion/{id}/edit', [MatchequestionController::class, 'update'])->name('matchequestion.update');
    Route::get('/matchequestion/hidetoggle/{id}', [MatchequestionController::class, 'hideToggle'])->name('matchequestion.hidetoggle');
    Route::get('/matchequestion/activetoggle/{id}', [MatchequestionController::class, 'activeToggle'])->name('matchequestion.activetoggle');
    Route::get('/matchequestion/areahidetoggle/{id}', [MatchequestionController::class, 'areaHideToggle'])->name('matchequestion.areahidetoggle');

    // Matche Option
    Route::resource('option', QuestionoptionController::class);
    Route::get('option/activetoggle/{id}', [QuestionoptionController::class, 'activeToggle'])->name('option.activetoggle');
    Route::get('option/hidetoggle/{id}', [QuestionoptionController::class, 'hideToggle'])->name('option.hidetoggle');



    Route::resource('bet', BetController::class);
    Route::get('bet/betlist/option/{id}', [BetlistController::class, 'index'])->name('admin.betlist');

    Route::post('bet/option/win/{id}', [BetwinController::class, 'betWin'])->name('admin.betwin');
    Route::post('bet/option/restart/{id}', [BetresetController::class, 'questionRestart'])->name('admin.betrestart');
    // Route::post('bet/option/stop/{id}', [BetwinController::class, 'betStop'])->name('admin.betstop');
    // Route::post('bet/option/start/{id}', [BetwinController::class, 'betStart'])->name('admin.betstart');




    // Settings
    Route::get('/settings', [SettingController::class, 'settingPage'])->name('admin.settings');
    Route::post('/setting/header-notice', [SettingController::class, 'headerNotice'])->name('admin.setting.headernotice');
});
