<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'page' => 'integer',
            'pageSize' => 'integer',
        ]);
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $categoryList = Category::orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'is_active']);
        return response()->json([
            'categories' => $categoryList
        ], 200);
    }
    public function total()
    {
        $total = Category::count();
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
        $category = Category::create([
            'name' => $request->input('name'),
            'is_active' => $request->input('is_active'),
        ]);
        if ($category) {
            return response()->json([
                'message' => 'Category created successfully',
                'status' => 'success'
            ], 201);
        }
        return response()->json([
            'message' => 'Category creation failed',
            'status' => 'failed'
        ], 500);
    }
}
