<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/horizon/test', function () {
    dd(321);
});

//Route::get('/', function () {
//    return view('welcome');
//});
//Route::get('/ProductsList', function () {
//    return view('welcome');
//});
//Route::get('/Cart', function () {
//    return view('welcome');
//});
//Route::get('/Product/{id}', function () {
//    return view('welcome');
//});
//Route::get('/Contact', function () {
//    return view('welcome');
//});
//Route::get('/Test', 'OrderController@fullPriceOrder');
