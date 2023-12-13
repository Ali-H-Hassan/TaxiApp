<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Ride;
use App\Manager\RideManager;
use App\Http\Requests\StatusRequest;

class UserRideController extends Controller
{
    //
    protected $user;
    protected $ride_manager;
    public function __construct(){
        $this->middleware('auth:api');
        $this->user = Auth::user();
        $this->ride_manager = new RideManager;
    }
    public function create_ride(Request $req){
        try{
            $data = $req->json()->all();

            $rides_count = Ride::where('passenger_id', $this->user->id)
                                    ->where('status', 'requested')
                                    ->count(); 
            if ($rides_count > 3) {
                return response()->json([
                    'status'=> 'error',
                    'message'=> 'Driver has reached the maximum number of rides.'
                ], 400);
            }
            //TODO  no ride can be tn7ajaz after 7days check availability of driver
            $ride = new Ride;
            $ride->passenger_id = $this->user->id;
            $ride->start_location = $data['start_location'];
            $ride->end_location = $data['end_location'];
            $ride->start_time = $data["start_time"];
            $ride->status = 1;
            $ride->save();

            return response()->json([
                'status'=> 'success',
                'ride'=> $ride
            ]);

        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ]);
        }    
    }

    // public function getRidesForDriver(Request $request){
    //     $data = $request->json()->all();
    //     $status = $data['status'];
    //     return $this->ride_manager->getRides('driver_id', $this->user->id, $status);
    // }

    public function getRidesForPassenger(Request $request){
        try{
            $data = $request->json()->all();
            return $this->ride_manager->getUserRidesAllOrByStatus('passenger_id', $this->user->id, $data["status"]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
        
    }

    public function getSingleRideForPassenger(Request $request){
        try{
            $data = $request->json()->all();
            return $this->ride_manager->getSingleRide('passenger_id', $this->user->id, $data["id"]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
    }

    public function updateRidePassenger(Request $request){
        try{
            $data = $request->json()->all();
    
            $ride = $this->ride_manager->getSingleRide('passenger_id', $this->user->id, $data["id"]);
            $ride = $ride["ride"];
            if($ride && ($data['status'] == 1 || $data["status"] == 2)){
                $ride->update([
                    "start_location" => $request->start_location ?? $data["start_location"],
                    "end_location" => $request->end_location ?? $data["end_location"],
                    "start_time" => $request->start_time ?? $data["start_time"],
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
