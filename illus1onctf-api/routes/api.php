<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChallengeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:api');
Route::get('logout', [AuthController::class, 'logout'])->middleware('auth:api');
Route::get('categories', [CategoryController::class, 'getActiveCategory']);
Route::get('challenges', [ChallengeController::class, 'index']);
Route::get('challenges/{challenge}', [ChallengeController::class, 'show']);

Route::post('submit', [ChallengeController::class, 'submit'])->middleware('auth:api');



Route::prefix('admin')->group(base_path('routes/api/admin.php'));
