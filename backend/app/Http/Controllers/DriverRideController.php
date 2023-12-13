<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Manager\RideManager;

class DriverRideController extends Controller
{
    //
    protected $user;
    protected $ride_manager;
    public function __construct(){
        $this->middleware('auth:api');
        $this->user = Auth::user();
        $this->ride_manager = new RideManager;
    }

    public function getRidesDriver(Request $request){
        try{
            $data = $request->json()->all();
            return $this->ride_manager->getUserRidesAllOrByStatus('driver_id', $this->user->id, $data["status"]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
        
    }

    public function getSingleRideForDriver(Request $request){
        try{
            $data = $request->json()->all();
            return $this->ride_manager->getSingleRide('driver_id', $this->user->id, $data["id"]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
    }

    public function updateRideDriver(Request $request){
        try{
            $data = $request->json()->all();
    
            $ride = $this->ride_manager->getSingleRide('driver_id', $this->user->id, $data["id"]);
            $ride = $ride["ride"];
            if($ride && ($data['status'] == 3 || $data["status"] == 4 || $data["status"] == 5)){
                $ride->update([
                    "status" => $request->status ?? $data["status"],
                ]);

                return response()->json([
                    'status'=>"success",
                    'ride'=> $ride
                ]);

            }else{   
                return response()->json([
                    'status'=>"error",
                    'message'=> "Bad request"
                ], 400);
            }
            
        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
    }
}
