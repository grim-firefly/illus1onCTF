<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChallengeController extends Controller
{
    public function index(Request $request)
    {

        $request->validate([
            'page' => 'integer',
            'pageSize' => 'integer',
            'search' => 'string|nullable',
            'minPoints' => 'integer|nullable',
            'maxPoints' => 'integer|nullable',
        ]);
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $search = $request->input('search');
        $minPoints = $request->input('minPoints', 0);
        $maxPoints = $request->input('maxPoints', 1000);
        $challengeList = Challenge::where('title', 'like', '%' . $search . '%')
            ->where('points', '<', $maxPoints ?? 1000)->where('points', '>', $minPoints ?? 0)
            ->orderby('id', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get();
        $challengeList->makeHidden(['created_at', 'updated_at', 'flag']);
        $total = Challenge::where('title', 'like', '%' . $search . '%')->count();

        return response()->json([
            'challenges' => $challengeList,
            'total' => $total,
        ], 200);
    }
    public function show(Challenge $challenge)
    {
        return response()->json([
            'challenge' => $challenge,
        ], 200);
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string|max:1000',
            'points' => 'required|integer',
            'flag' => 'required|string',
        ]);
        $challenge = Challenge::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'points' => $request->input('points'),
            'flag' => $request->input('flag'),
            'category' => $request->input('category'),
        ]);
        if ($challenge) {
            return response()->json([
                'status' => 'success',
                'message' => 'Challenge created successfully',
            ], 201);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Challenge creation failed',
        ], 400);
    }
    public function update(Challenge $challenge)
    {
        $success = $challenge->update([
            'title' => request('title'),
            'description' => request('description'),
            'points' => request('points'),
            'flag' => request('flag'),
            'category' => request('category'),
        ]);
        if ($success) {
            return response()->json([
                'status' => 'success',
                'message' => 'Challenge updated successfully',
            ], 200);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Challenge update failed',
        ], 400);
    }
    public function destroy(Challenge $challenge)
    {
        $challenge->delete();
        return response()->json([
            'message' => 'Challenge deleted successfully',
        ], 200);
    }
}
