<?php 
    namespace App\Http\Requests;

    class LoginValidationRequest{
        public function LoginValidation($request){
            $email = $request->email;
            $password = $request->password;
            if(trim($email) == "" || trim($password) == ""){
                return false;
            }
        }
    }