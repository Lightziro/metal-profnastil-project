<?php

namespace App\Http\Controllers;

use App\Product;
use App\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function getProductBySort(Request $request)
    {
        $productList = Product::with(['profList'])->orderBy($request->column, $request->type)->get();
        return $productList;
    }

    public function getProductById(Request $request)
    {
        return Product::getById($request->id);
    }
    public function getProduct()
    {
        return Product::with('profList')->get();
    }
}
