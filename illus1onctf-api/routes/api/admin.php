<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['middleware' => ['auth:api', 'role:admin']], function () {
	Route::put('categories', [CategoryController::class, 'updateCategory']);
	Route::post('categories', [CategoryController::class, 'create']);
	Route::get('categories/{category}', [CategoryController::class, 'getCategory']);
	Route::delete('categories/{category}', [CategoryController::class, 'delete']);

	Route::get('users', [UserController::class, 'index']);
	Route::put('users', [UserController::class, 'updateUser']);
	Route::post('users', [UserController::class, 'create']);
	Route::get('users/{user}', [UserController::class, 'getUser']);
	Route::delete('users/{user}', [UserController::class, 'delete']);

	Route::get('roles', [RoleController::class, 'index']);
	Route::get('activeroles', [RoleController::class, 'getActiveRoles']);
	Route::put('roles', [RoleController::class, 'updateRole']);
	Route::post('roles', [RoleController::class, 'create']);
	Route::get('roles/{role}', [RoleController::class, 'getRole']);
	Route::delete('roles/{role}', [RoleController::class, 'delete']);
});
