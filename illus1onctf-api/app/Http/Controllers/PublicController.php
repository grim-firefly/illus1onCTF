<?php

namespace App\Http\Controllers;

use App\Models\Scoreboard;
use App\Models\User;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function leaderboard(Request $request)
    {

        $users = Scoreboard::with(['users' => function ($query) {
            $query->select('id', 'email');
        }])->orderBy('points', 'desc')->get(['id', 'user_id', 'points']);
        return response()->json([
            'ScoreList' => $users,
        ], 200);
    }
}
