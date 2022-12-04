<?php

namespace App\Http\Controllers;

use App\Models\Scoreboard;
use App\Models\User;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function leaderboard(Request $request)
    {
        $page = $request->input('page', 1);
        $pageSize = $request->input('pageSize', 10);
        $search = $request->input('search', '');
        $users = Scoreboard::join('users', 'users.id', '=', 'scoreboards.user_id')->where('users.email', 'like', '%' . $search . '%');
        $total=$users->count();
        $users=$users->orderBy('points', 'desc')->offset(($page - 1) * $pageSize)->limit($pageSize)->get(['scoreboards.id', 'scoreboards.user_id', 'scoreboards.points', 'users.email']);
        return response()->json([
            'ScoreList' => $users,
            'total' => $total,
        ], 200);
    }
}
