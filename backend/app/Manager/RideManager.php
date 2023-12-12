<?php

namespace App\Manager;

use App\Models\Ride;


 class RideManager{
    public function getRides($role, $user_id, $status){
        try{
            $rides = Ride::where( $role , $user_id)
                            ->where("status", $status)
                            ->get();

            return response()->json([
                "status"=> "success",
                "rides" => $rides
            ]);
        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ], 500);
        }
    }
}
