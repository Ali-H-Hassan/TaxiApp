<?php

namespace App\Manager;

use App\Models\Ride;


 class RideManager{
    public function getUserRidesAllOrByStatus($role, $user_id, $status = null){
        try{
            if($status !=null){
                $rides = Ride::where( $role , $user_id)
                                ->where("status_id", $status)
                                ->get();
            }else{
                $rides = Ride::where( $role , $user_id)
                            ->get();
            }
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

    public function getSingleRide($role, $user_id, $ride_id){
        try{
            $ride = Ride::where( $role , $user_id)
                            ->where("id", $ride_id)
                            ->first();
            return response()->json([
                "status"=> "success",
                "ride" => $ride
            ]);
        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ], 500);
        }
    }

    public function getRideById($id){
        $ride = Ride::where( 'id' , $id)
                            ->first();
        return $ride;
    }
    public function handleRides($id, $data, $ride){
        try{

            $ride->update($data);

            return response()->json([
                "status"=>"success",
                "message"=>"Successfull request"
            ]);

        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ], 500);
        }
    }
}
