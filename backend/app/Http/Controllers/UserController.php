<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\RegistrationRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    //
    protected $user;

    public function __construct(){
        $this->middleware('auth:api');
        $this->user = Auth::user();
    }

    public function updateUserInfo(Request $request){
        $data = $request->json()->all();

        try{
           
            $this->user->update([
                "first_name" => $request->first_name ?? $this->user["first_name"],
                "last_name" => $request->last_name ?? $this->user["last_name"],
                "phone_number" => $request->phone_number ?? $this->user["phone_number"],
                "img_url" => $request->img_url ?? $this->user["img_url"]
            ]);

            return response()->json([
                "status"=> "success",
                "message" => "User Updated"
            ]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=> 'error',
                'message'=> 'Profile cant be updated'
            ], 500);
        }
    }

    public function getCurrentUser(){
        try{           
            return response()->json([
                "status"=> "success",
                "message"=> $this->user
            ]);

        }catch(\Exception $exception){
            return response()->json([
                'status'=> 'error',
                'message'=> 'Error retreiving data'
            ], 500);
        }
    }
   
}
