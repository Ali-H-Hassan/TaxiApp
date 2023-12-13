<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    //
    protected $user;
    public function __construct(){
        $this->user = Auth::user();
    }

    public function handleDriverRequest(Request $request){
        try{
            $data = $request->json()->all();
            $driver = User::where("id", $data["id"])->first();

            if(!$driver){
                return response()->json([
                    "status"=> "error",
                    "message" => "Driver request not found"
                ], 404);
            }

            $driver->status = $data["status"];
            return response()->json([
                "status"=> "success",
                "message" => "Request handled successfully"
            ]);
        }catch(\Exception $exception){
            return response()->json([
                "status"=> "error",
                "message" => "An error has occured"
            ], 500);
        }
    }

    public function getAllDriversRequest(Request $request){
        try{
            $data = $request->json()->all();
            $drivers_list = User::where("id", $data["id"] )->get();

            return response()->json([
                "status"=> "success",
                "message"=> $drivers_list
            ]);
        }catch(\Exception $exception){
            return response()->json([
                "status"=> "error",
                "message" => $exception->getMessage()
            ], 500);
        }
    }
}
