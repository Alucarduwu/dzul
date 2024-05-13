<?php

use App\Http\Controllers\studentsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::view('/{path?}', 'welcome')
    ->where('path','.*');

Route::get('student_index', [studentsController::class, 'index']);
Route::get('student', [studentsController::class, 'show']);
Route::get('token', [studentsController::class, 'token']);
Route::post('student_update', [studentsController::class, 'update']);
Route::post('student_create', [studentsController::class, 'store']);
Route::post('student_destroy', [studentsController::class, 'destroy']);