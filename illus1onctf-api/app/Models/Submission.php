<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function challenges()
    {
        return $this->belongsTo(Challenge::class, 'challenge_id', 'id');
    }
}
