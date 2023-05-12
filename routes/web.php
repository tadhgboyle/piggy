<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AccountUpdateBalanceController;
use App\Http\Controllers\CreditCardController;
use App\Http\Controllers\CreditCardUpdateBalanceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoalAutoDepositToggleController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\ProfileController;
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
    return Inertia::render('Welcome');
});

// TODO: verified middleware?
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('accounts', AccountController::class);
    Route::patch('/accounts/{account}/balance', AccountUpdateBalanceController::class)
        ->name('accounts.update-balance');

    Route::resource('credit-cards', CreditCardController::class);
    Route::patch('/credit-cards/{creditCard}/balance', CreditCardUpdateBalanceController::class)
        ->name('credit-cards.update-balance');

    Route::resource('goals', GoalController::class);
    Route::patch('/goal-auto-deposits/{goalAutoDeposit}/toggle', GoalAutoDepositToggleController::class)
        ->name('goal-auto-deposits.toggle');
});

require __DIR__.'/auth.php';
