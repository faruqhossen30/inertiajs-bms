<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('admin/login', [AuthenticatedSessionController::class, 'create'])->name('adminlogin');
Route::post('admin/login', [AuthenticatedSessionController::class, 'store']);

Route::group(['prefix' => 'admin', 'middleware' => ['auth','admin']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Users
    Route::resource('user', UserController::class);
    Route::resource('team', TeamController::class);
});
