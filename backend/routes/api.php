<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserRideController;
use App\Http\Controllers\DriverRideController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::middleware('auth:api')->group(function () {
    Route::post('update_info',  [UserController::class, 'updateUserInfo']);
    Route::get('current_user',  [UserController::class, 'getCurrentUser']);
});

Route::middleware(['auth:api', 'admin.check'])->group(function () {
    Route::get('get_all_drivers_request',  [AdminController::class, 'getAllDriversRequest']);
    Route::post('handle_driver_request',  [AdminController::class, 'handleDriverRequest']);
});

Route::middleware(['auth:api', 'passenger.check'])->group(function () {
    Route::post('create_ride',  [UserRideController::class, 'create_ride']);
    Route::post('get_rides_passenger',  [UserRideController::class, 'getRidesForPassenger']);
    Route::post('get_passenger_ride_byId',  [UserRideController::class, 'getSingleRideForPassenger']);
    Route::post('passenger_update_ride',  [UserRideController::class, 'updateRidePassenger']);
});

Route::middleware(['auth:api', 'driver.check'])->group(function () {
    Route::post('get_rides_driver',  [DriverRideController::class, 'getRidesForDriver']);
    Route::post('get_driver_ride_byId',  [DriverRideController::class, 'getSingleRideForDriver']);
    Route::post('driver_update_ride',  [DriverRideController::class, 'updateRideDriver']);
});
