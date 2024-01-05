<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserRideController;
use App\Http\Controllers\DriverRideController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('user-data-by-token', 'getCurrentUser');
});

Route::middleware('auth:api')->group(function () {
    Route::post('update_info',  [UserController::class, 'updateUserInfo']);
    Route::get('current_user',  [UserController::class, 'getCurrentUser']);
    Route::post('create_message',  [ChatController::class, 'createMessage']);
    Route::get('get_messages',  [ChatController::class, 'getMessages']);
    Route::post('upload/img',  [UserController::class, 'uploadImage']);
});

Route::middleware(['auth:api', 'admin.check'])->group(function () {
    Route::get('get_all_drivers_request',  [AdminController::class, 'getAllDriversRequest']);
    Route::post('handle_passenger_driver_request',  [AdminController::class, 'handleDriverRequestAndPassengers']);
});

Route::middleware(['auth:api', 'passenger.check'])->group(function () {
    Route::post('create_ride',  [UserRideController::class, 'create_ride']);
    Route::get('get_rides_passenger',  [UserRideController::class, 'getRidesForPassenger']);
    Route::get('get_passenger_ride_byId',  [UserRideController::class, 'getSingleRideForPassenger']);
    Route::post('passenger_update_ride',  [UserRideController::class, 'updateRidePassenger']);
});

Route::middleware(['auth:api', 'driver.check'])->group(function () {
    Route::get('get_rides_driver',  [DriverRideController::class, 'getRidesForDriver']);
    Route::get('get_all_pending_rides',  [DriverRideController::class, 'getAllPendingRides']);
    Route::get('get_driver_ride_byId',  [DriverRideController::class, 'getSingleRideForDriver']);
    Route::get('get_single_pending_ride_for_driver',  [DriverRideController::class, 'getSinglePendingRideForDriver']);
    Route::post('accept_ride',  [DriverRideController::class, 'acceptRide']); 
    Route::post('reject_ride',  [DriverRideController::class, 'rejectRide']);  
    Route::post('complete_ride',  [DriverRideController::class, 'completeRide']); 
});


