<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
        $request->validate([
            'name' => 'required|string|max:55',
            'is_active' => 'required|boolean',
        ]);
        $user = User::create([
            'name' => $request->input('name'),
            'is_active' => $request->input('is_active'),
        ]);
        if ($user) {
            return response()->json([
                'message' => 'User created successfully',
                'status' => 'success'
            ], 201);
        }
        return response()->json([
            'message' => 'User creation failed',
            'status' => 'failed'
        ], 500);
    }
    public function getUser(User $user)
    {
        $user = ['id' => $user->id, 'name' => $user->name, 'email' => $user->email, 'role' => $user->role];
        return response()->json([
            'user' => $user
        ], 200);
    }

    public function updateCategory(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:users,id',
            'name' => 'required|string|max:55',
            'is_active' => 'required|boolean',
        ]);
        $user = User::find($request->input('id'));
        $user->name = $request->input('name');
        $user->is_active = $request->input('is_active');
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
