<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    //
    protected $user;
    public function __construct(){
        $this->middleware('auth:api');
        $this->user = Auth::user();
    }

    public function createMessage(Request $request){
        try{
            $data = $request->json()->all();

            $second_user = User::where('id', $data['second_user'])->first();
            if($second_user){
                $chat = new Chat;
                $chat->first_user = $this->user->id;
                $chat->second_user = $data["second_user"];
                $chat->message = $data["message"];
                $chat->sender_id = $data["sender_id"];
                $chat->save();
                return response()->json([
                    "status"=>"success",
                    "message"=>"Message was sent"
                ]);
            }else{
                return response()->json([
                    "status"=>"error",
                    "message"=>"No person was found"
                ], 404);
            }
        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ]);
        } 
    }

    public function getMessages(Request $request){
        try{
            $data = $request->json()->all();
            $second_user = User::where('id', $data['second_user'])->first();
            if(!$second_user){
                return response()->json([
                    "status"=>"error",
                    "message"=>"No person was found"
                ], 404);
            }

            $user_message = Chat::where('first_user', $this->user->id)
                                    ->where('second_user', $data["second_user"])
                                    ->get();
            return response()->json([
                "status"=>"success",
                "message"=>$user_message
            ]);

        }catch(\Exception $exception){
            return response()->json([
                "status"=>"error",
                "message"=> $exception->getMessage()
            ]);
        } 
    }
}
