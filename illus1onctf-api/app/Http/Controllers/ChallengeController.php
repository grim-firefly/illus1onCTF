<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use Illuminate\Http\Request;

class ChallengeController extends Controller
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
            $challengeList = Challenge::where('title', 'like', '%' . $search . '%')->orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get();
            $challengeList->makeHidden(['created_at', 'updated_at', 'flag']);
            $total = Challenge::where('title', 'like', '%' . $search . '%')->count();
        } else {
            $challengeList = Challenge::orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get();
            $challengeList->makeHidden(['created_at', 'updated_at', 'flag']);
            $total = Challenge::count();
        }
        return response()->json([
            'challenges' => $challengeList,
            'total' => $total
        ], 200);
    }
    public function show(Challenge $challenge)
    {
        $challenge->makeHidden(['created_at', 'updated_at', 'flag']);
        return response()->json([
            'challenge' => $challenge
        ], 200);
    }
}
