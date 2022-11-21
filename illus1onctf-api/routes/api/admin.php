<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::put('categories', [CategoryController::class, 'updateCategory']);
Route::get('categories', [CategoryController::class, 'index']);
Route::post('categories', [CategoryController::class, 'create']);
Route::get('categories/total', [CategoryController::class, 'total']);
Route::get('categories/{category}', [CategoryController::class, 'getCategory']);
Route::delete('categories/{category}', [CategoryController::class, 'delete']);
