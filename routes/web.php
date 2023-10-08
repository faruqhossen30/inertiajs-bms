<?php

use App\Http\Controllers\User\DepositController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\StatementController;
use App\Http\Controllers\User\TransactionController;
use App\Models\Game;
use App\Models\Matche;
use Illuminate\Foundation\Application;
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
    $matches = Matche::with('questions')->with('questions.options')->orderBy('id','desc')->get();

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

    Route::get('transaction', [TransactionController::class, 'index'])->name('transactionlist');

    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('statement', [StatementController::class, 'index'])->name('statement');
});

Route::get('routes', function () {
    $routeCollection = Route::getRoutes();

    echo "<table style='width:100%'>";
    echo "<tr>";
    echo "<td width='10%'><h4>HTTP Method</h4></td>";
    echo "<td width='10%'><h4>Route</h4></td>";
    echo "<td width='10%'><h4>Name</h4></td>";
    echo "<td width='70%'><h4>Corresponding Action</h4></td>";
    echo "</tr>";
    foreach ($routeCollection as $value) {
        echo "<tr>";
        echo "<td>" . $value->methods()[0] . "</td>";
        echo "<td>" . $value->uri() . "</td>";
        echo "<td>" . $value->getName() . "</td>";
        echo "<td>" . $value->getActionName() . "</td>";
        echo "</tr>";
    }
    echo "</table>";
});

require __DIR__.'/auth.php';
