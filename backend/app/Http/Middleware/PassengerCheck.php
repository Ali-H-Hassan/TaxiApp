<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class PassengerCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        if($user && $user->role_id ==1 &&  $user->status == "accepted"){
            return $next($request);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Unauthorized, you are not a passenger',
        ], 403); 
    }
}
