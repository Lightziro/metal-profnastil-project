<?php

use App\Http\Controllers\DictionaryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Route;

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


Route::group(['prefix' => 'question'], function () {
    Route::post('/', [QuestionController::class, 'newQuestion']);
});
Route::group(['prefix' => 'order'], function () {
    Route::post('/', [OrderController::class, 'newOrder']);
});
Route::group(['prefix' => 'dictionary'], function () {
    Route::get('/categories', [DictionaryController::class, 'getCategories']);
    Route::group(['prefix' => 'category'], function () {
        Route::prefix('{category:url_slug}')->group(function () {
            Route::get('/products', [DictionaryController::class, 'getProducts']);
        });
    });
});
