<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
	public function register(Request $request)
	{

		$validator = Validator::make($request->all(), [
			'name' => ['required', 'string', 'max:255'],
			'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
			'password' => ['required', 'string', 'min:1'],
		]);
		if ($validator->fails()) {
			return response()->json([
				'status' => 'error',
				'message' => $validator->errors()->first(),
			], 400);
		}
		$data = $request->all();
		$data['password'] = Hash::make($request->password);
		// return $request->all();
		$user = User::create([
			'name' => $data['name'],
			'email' => $data['email'],
			'password' => $data['password'],
		]);
		if ($user) {
			$user->scoreboard()->create([
				'points' => 0,
			]);
			return response()->json([
				'status' => 'success',
				'message' => 'User created successfully',
			], 200);
		}
		return response()->json([
			'status' => 'error',
			'message' => 'Something went wrong',
		], 400);
	}
	public function login(Request $request)
	{

		$validator = Validator::make($request->all(), [
			'email' => ['required', 'string', 'email', 'max:255'],
			'password' => ['required', 'string', 'min:1'],
		]);
		if ($validator->fails()) {
			return response()->json([
				'status' => 'error',
				'message' => $validator->errors()->first(),
			], 400);
		}
		if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
			$user = Auth::user();
			$token = $user->createToken('authToken')->accessToken;
			return response()->json([
				'status' => 'success',
				'message' => 'User logged in successfully',
				'token' => $token,
				'user' => $user,
			], 200);
		}
		return response()->json([
			'status' => 'error',
			'message' => 'Invalid credentials',
		], 400);
	}

	public function user(Request $request)
	{


		return response()->json([
			'status' => 'success',
			'user' => $request->user(),
		], 200);
	}
	public function admin(Request $request)
	{
		// return $request->all();

		return response()->json([
			'status' => 'success',
			'message' => 'Admin details',
			'data' => $request->user(),
		], 200);
	}
	public function logout(Request $request)
	{
		// $request->user()->token()->revoke();
		// Auth::logout();
		// Auth::user()->token()->revoke();
		$request->user()->token()->delete();

		return response()->json([
			'status' => 'success',
			'message' => 'User logged out successfully',
		], 200);
	}
}
