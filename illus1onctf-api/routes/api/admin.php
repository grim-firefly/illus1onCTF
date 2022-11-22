<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['auth:api','role:admin']], function () {
	Route::put('categories', [CategoryController::class, 'updateCategory']);
	Route::post('categories', [CategoryController::class, 'create']);
	Route::get('categories/{category}', [CategoryController::class, 'getCategory']);
	Route::delete('categories/{category}', [CategoryController::class, 'delete']);
});
