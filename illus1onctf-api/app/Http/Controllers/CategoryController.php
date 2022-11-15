<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categoryList = Category::get(['id', 'name', 'is_active']);
        return response()->json([
            'categories' => $categoryList
        ], 200);
    }
}
