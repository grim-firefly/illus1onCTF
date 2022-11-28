<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
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
            $categoryList = Category::where('name', 'like', '%' . $search . '%')->orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'is_active']);
            $total = Category::where('name', 'like', '%' . $search . '%')->count();
        } else {
            $categoryList = Category::orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['id', 'name', 'is_active']);
            $total = Category::count();
        }
        return response()->json([
            'categories' => $categoryList,
            'total' => $total,
        ], 200);
    }
    public function getActiveCategory(Request $request)
    {
        $categoryList = Category::where('is_active', 1)->get(['id', 'name']);
        return response()->json([
            'categories' => $categoryList,
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
    public function getCategory(Category $category)
    {
        $category = ['id' => $category->id, 'name' => $category->name, 'is_active' => $category->is_active];
        return response()->json([
            'category' => $category
        ], 200);
    }

    public function updateCategory(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:categories,id',
            'name' => 'required|string|max:55',
            'is_active' => 'required|boolean',
        ]);
        $category = Category::find($request->input('id'));
        $category->name = $request->input('name');
        $category->is_active = $request->input('is_active');
        if ($category->save()) {
            return response()->json([
                'message' => 'Category updated successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'Category update failed',
            'status' => 'failed'
        ], 500);
    }

    public function delete(Category $category)
    {
        if ($category->delete()) {
            return response()->json([
                'message' => 'Category deleted successfully',
                'status' => 'success'
            ], 200);
        }
        return response()->json([
            'message' => 'Category deletion failed',
            'status' => 'failed'
        ], 500);
    }
}
