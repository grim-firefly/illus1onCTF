<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
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
            $roleList = Role::where('name', 'like', '%' . $search . '%')->orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'is_active']);
            $total = Role::where('name', 'like', '%' . $search . '%')->count();
        } else {
            $roleList = Role::orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'is_active']);
            $total = Role::count();
        }
        return response()->json([
            'roles' => $roleList,
            'total' => $total
        ], 200);
    }
    public function total()
    {
        $total = Role::count();
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
        $role = Role::create([
            'name' => $request->input('name'),
            'is_active' => $request->input('is_active'),
        ]);
        if ($role) {
            return response()->json([
                'message' => 'Role created successfully',
                'status' => 'success'
            ], 201);
        }
        return response()->json([
            'message' => 'Role creation failed',
            'status' => 'failed'
        ], 500);
    }
    public function getRole(Role $role)
    {
        $role = ['id' => $role->id, 'name' => $role->name, 'is_active' => $role->is_active];
        return response()->json([
            'role' => $role
        ], 200);
    }
    public function getActiveRoles()
    {
        $roleList = Role::where('is_active', 1)->get(['id', 'name']);
        return response()->json([
            'roles' => $roleList
        ], 200);
    }

    public function updateRole(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:roles,id',
            'name' => 'required|string|max:55',
            'is_active' => 'required|boolean',
        ]);
        $role = Role::find($request->input('id'));
        $role->name = $request->input('name');
        $role->is_active = $request->input('is_active');
        if ($role->save()) {
            return response()->json([
                'message' => 'Role updated successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'Role update failed',
            'status' => 'failed'
        ], 500);
    }

    public function delete(Role $role)
    {
        if ($role->delete()) {
            return response()->json([
                'message' => 'Role deleted successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'Role deletion failed',
            'status' => 'failed'
        ], 500);
    }
}
