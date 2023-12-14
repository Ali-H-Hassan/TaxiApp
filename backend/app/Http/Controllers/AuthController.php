<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\LoginValidationRequest;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }
    
    public function login(Request $request)
    {
        try{
            $credentials = $request->only('email', 'password');   
            $token = Auth::attempt($credentials);
            if (!$token) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unauthorized',
                ], 401);
            }
    
            $user = Auth::user();
            return response()->json([
                    'status' => 'success',
                    'user' => $user,
                    'authorisation' => [
                        'token' => $token,
                        'type' => 'bearer',
                    ]
                ]);
        }catch(\Exception $exception){
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 403);
        }
    }
    
    public function register(Request $request){
        try{
            $user = new User;
            if($request->role_id != 2 && $request->role_id != 1 ){
                return response()->json([
                    'status'=>"error",
                    'message'=> "Forbidden request"
                ], 403);
            }
            $existing_email = User::where("email", $request->email)->first();
            if($existing_email != null){
                return response()->json([
                    'status'=>"error",
                    'message'=> "Email already in use"
                ], 400);
            }
            $user->first_name = '';
            $user->last_name = '';
            $user->email = $request->email;
            $user->password = $request->password;
            $user->role_id = $request->role_id;
            if($user->role_id ===1){
                $user->status = "accepted";
            }
            if($user->role_id ===2){
                $user->status = "requested";
            }
            $user->phone_number = '';
            $user->img_url = '';
            $user->save();
            $token = Auth::login($user);
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
        }catch(\Exception $exception){
            return response()->json([
                'status'=> 'error',
                'message'=> $exception->getMessage(),
            ], 500);
        }
    }
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }
    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
