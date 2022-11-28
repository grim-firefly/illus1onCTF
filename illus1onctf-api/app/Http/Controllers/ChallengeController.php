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
        // $challenge->makeHidden(['created_at', 'updated_at', 'flag']);
        return response()->json([
            'challenge' => $challenge,
            'user' => Auth::user()
        ], 200);
    }
    public function destroy(Challenge $challenge)
    {
        $challenge->delete();
        return response()->json([
            'message' => 'Challenge deleted successfully',
        ], 200);
    }
}
