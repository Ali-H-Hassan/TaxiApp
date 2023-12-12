<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;
    protected $fillable=['passenger_id','driver_id','start_locatin', 'end_location', 'status', 'rating'];

    public function passenger(){
        return $this->belongsTo(User::class, 'passenger_id');
    }

    public function driver(){
        return $this->belongsTo(User::class, 'driver_id');
    }
}
