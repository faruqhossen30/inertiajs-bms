<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\AutooptionController;
use App\Http\Controllers\Admin\AutoquestionController;
use App\Http\Controllers\Admin\DepositController;
use App\Http\Controllers\Admin\GameController;
use App\Http\Controllers\Admin\MatcheController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth','admin']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Admin
    Route::resource('deposit', DepositController::class);
    Route::resource('transaction', TransactionController::class);

    Route::resource('autoquestion', AutoquestionController::class);
    Route::resource('autooption', AutooptionController::class);
    // Users
    Route::resource('user', UserController::class);
    Route::resource('team', TeamController::class);
    Route::resource('game', GameController::class);

    // Matche
    Route::resource('matche', MatcheController::class);

   // Settings
   Route::get('/settings', [SettingController::class, 'settingPage'])->name('admin.settings');
   Route::post('/setting/header-notice', [SettingController::class, 'headerNotice'])->name('admin.setting.headernotice');
});
