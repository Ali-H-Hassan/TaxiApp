<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Manager\RideManager;
use App\Models\Ride;

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

    public function getRidesForDriver(Request $request){
        try{
            $data = $request->json()->all(); 
            return $this->ride_manager->getUserRidesAllOrByStatus('driver_id', $this->user->id, $data["status_id"]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }   
    }

    public function getAllPendingRides(){
        try{
            $ride = Ride::where("status_id", 1)->get();
            return $ride;

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

    public function getSinglePendingRideForDriver(Request $request){
        try{
            $data = $request->json()->all();
            $ride = Ride::where("id", $data["id"])->first();
            if($ride && $ride->status_id === 1){
                return response()->json([
                    'status'=>"success",
                    'message'=> $ride
                ]);
            }
        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }
    }

    public function acceptRide(Request $request){
        try{
            $data = $request->json()->all();
            $ride = Ride::where("id", $data["id"])->first();
            if($ride && $ride->status_id === 1){
                $ride->update([
                    $ride->driver_id = $this->user->id,
                    $ride->status_id = 3
                ]);
                return response()->json([
                    'status'=>"success",
                    'message'=> "Ride accpeted"
                ]);
            }
            return response()->json([
                'status'=>"error",
                'message'=> "Ride not found"
            ], 404);
            
        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }       
    }

    public function rejectRide(Request $request){
        try{
            $data = $request->json()->all();
            $ride = Ride::where("id", $data["id"])->first();
            if($ride->status_id == 3 && $ride->driver_id == $this->user->id){
                $ride->update([
                    $ride->driver_id = null,
                    $ride->status_id = 1
                ]);
                return response()->json([
                    'status'=>"success",
                    'message'=> "Ride rejected"
                ]);
            }
            return response()->json([
                'status'=>"error",
                'message'=> "Ride not found"
            ], 404); 
        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }       
    }

    public function completeRide(Request $request){
        try{
            $data = $request->json()->all();
            $ride = Ride::where("id", $data["id"])->first();
            if($ride->status_id == 3 && $ride->driver_id == $this->user->id){
                $ride->update([
                    $ride->status_id = 5
                ]);
                return response()->json([
                    'status'=>"success",
                    'message'=> "Ride completed"
                ]);          
            }
            return response()->json([
                'status'=>"error",
                'message'=> "Ride not found"
            ], 404);
        }catch(\Exception $exception){
            return response()->json([
                'status'=>"error",
                'message'=> $exception->getMessage()
            ], 500);
        }         
    }

   

    // public function updateRideDriver(Request $request){
    //     try{
    //         $data = $request->json()->all();
    
    //         $ride = Ride::where("id",  $data["id"])->first();
    //         if($ride && ($data['status_id'] == 3 || $data["status_id"] == 4 || $data["status_id"] == 5)){
    //             $ride->update([
    //                 "status" => $request->status_id  ?? $data["status_id"],
    //             ]);

    //             return response()->json([
    //                 'status'=>"success",
    //                 'ride'=> $ride
    //             ]);

    //         }else{   
    //             return response()->json([
    //                 'status'=>"error",
    //                 'message'=> "Bad request"
    //             ], 400);
    //         }
            
    //     }catch(\Exception $exception){
    //         return response()->json([
    //             'status'=>"error",
    //             'message'=> $exception->getMessage()
    //         ], 500);
    //     }
    // }
}
