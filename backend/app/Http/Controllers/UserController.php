<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\RegistrationRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class UserController extends Controller
{
    //
    public function register(Request $request){
        try{
            $user = new User;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->role_id = $request->role_id;
            if($user->role_id ===1){
                $user->status = "accepted";
            }
            $user->phone_number = $request->phone_number;
            $user->img_url = $request->img_url;
            $user->save();
            return response()->json([
                'status' => 'success',
                'message' => $user
            ]);
        }catch(\Exception $exception){
            return response()->json([
                'status'=> 'error',
                'message'=> $exception->getMessage()
            ]);
        }
    }
}
