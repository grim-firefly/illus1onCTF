<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function index(Request $request)
    {

        $request->validate([
            'page' => 'integer',
            'pageSize' => 'integer',
            'search' => 'string|nullable',
        ]);
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $search = $request->input('search');
        if ($search) {
            $userList = User::where('name', 'like', '%' . $search . '%')->orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'email', 'role']);
            $total = User::where('name', 'like', '%' . $search . '%')->count();
        } else {
            $userList = User::orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'email', 'role']);
            $total = User::count();
        }
        return response()->json([
            'users' => $userList,
            'total' => $total
        ], 200);
    }
    public function total()
    {
        $total = User::count();
        return response()->json([
            'total' => $total
        ], 200);
    }

    public function create(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:1'],
            'role' => ['required', 'string', 'max:255', 'exists:roles,name'],
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
            'role' => $data['role'],
        ]);
        if ($user) {
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
    public function getUser(User $user)
    {
        $user = ['id' => $user->id, 'name' => $user->name, 'email' => $user->email, 'role' => $user->role];
        return response()->json([
            'user' => $user
        ], 200);
    }

    public function updateUser(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:users,id',
            'name' => 'required|string|max:55',
            'email' => 'required|string|email|max:55|unique:users,email,' . $request->input('id'),
            'role' => 'required|exists:roles,name',

        ]);
        $user = User::find($request->input('id'));
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->role = $request->input('role');
        if ($user->save()) {
            return response()->json([
                'message' => 'User updated successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'User update failed',
            'status' => 'failed'
        ], 500);
    }

    public function delete(User $user)
    {
        if ($user->delete()) {
            return response()->json([
                'message' => 'User deleted successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'User deletion failed',
            'status' => 'failed'
        ], 500);
    }
}
