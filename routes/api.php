<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/order/person/new', 'OrderController@addOrder');

Route::post('/question/new', 'QuestionController@newQuestion');
Route::get('/product/all', 'ProductsController@getProduct');
Route::get('/getProductBySort', 'ProductsController@getProductBySort');
Route::get('/product/get', 'ProductsController@getProductById');
Route::post('/prepareCart', 'CartController@prepareCart');
