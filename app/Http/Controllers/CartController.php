<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    function prepareCart(Request $request)
    {
        return Product::with(
            [
                'profList',
                'typeProduct'
            ]
        )->whereIn('products.id', $request->item)->get();
    }
}
