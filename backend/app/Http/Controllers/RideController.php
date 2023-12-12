<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Ride;
use App\Manager\RideManager;
use App\Http\Requests\StatusRequest;

class RideController extends Controller
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
            $driver_id = $data['driver_id'];
           
            $driver_id = User::where('id', $driver_id)->first()->role_id;
            if($driver_id == null){
                return response()->json([
                    'status'=> 'error',
                    'message'=>"Driver not found"
                ], 500);
            }
            if($driver_id !=2){
                return response()->json([
                    "status"=> "error",
                    "message"=> "Unauthorized"
                ], 401);
            }

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
            $ride->driver_id = $driver_id;
            $ride->start_location = $data['start_location'];
            $ride->end_location = $data['end_location'];
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

    public function getRidesForDriver(Request $request){
        $data = $request->json()->all();
        $status = $data['status'];
        return $this->ride_manager->getRides('driver_id', $this->user->id, $status);
    }

    public function getRidesForPassenger(Request $request){
        $data = $request->json()->all();
        $status = $data['status'];
        return $this->ride_manager->getRides('passenger_id', $this->user->id, $status);
    }

    public function updateRidePassenger(Request $request){
        try{
            $data = $request->json()->all();
            $ride = Ride::find($data['id']);
            if($ride){
                $ride->update([
                    "start_location" => $request->quantity ?? $data["start_location"],
                    "end_location" => $request->quantity ?? $data["end_location"],
                    "status" => $request->quantity ?? $data["status"],
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
