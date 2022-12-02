<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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
        if ($request->user('api')) {
            $submission = $request->user('api')->submissions()->where('solved', 'correct')->distinct()->pluck('challenge_id');
            $challengeList->map(function ($challenge) use ($submission) {
                $challenge->solved = $submission->contains($challenge->id);
                return $challenge;
            });
            return response()->json([
                'challenges' => $challengeList,
                'total' => $total,
            ]);
        }

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

    public function submit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'challenge_id' => 'required|integer',
            'flag' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid request',
            ], 400);
        }
        $user = $request->user();
        if ($user->role != 'user') {
            return response()->json([
                'status' => 'error',
                'message' => 'You are not a user',

            ], 400);
        }
        $flag = Challenge::find($request->input('challenge_id'))->flag;
        $solveValue = $request->input('flag') === $flag ? 'correct' : 'wrong';
        $success = $user->submissions()->create([
            'challenge_id' => $request->input('challenge_id'),
            'flag' => $request->input('flag'),
            'solved' => $solveValue,
        ]);
        if ($success) {
            return response()->json([
                'status' => 'success',
                'message' => $solveValue,
            ], 200);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Submission failed',
        ], 400);
    }

    public function submissions(Request $request)
    {
        // ['id', 'flag', 'solved', 'created_at']
        if ($request->user()) {
            $submissions = $request->user()->submissions()->with(['challenges'=>function($query){
                $query->select('id','title')->get();
            }])->get(['id', 'flag', 'solved', 'created_at','challenge_id']);
            return response()->json([
                'submissions' => $submissions,
                
            ], 200);
        }
    }
}
