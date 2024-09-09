<?php

namespace App\Http\Controllers;

use App\Http\Response\CategoryResponse;
use App\Http\Transformer\ProductCategoryTransformer;
use App\Models\ProductCategory;
use App\Repository\ProductCategoryRepository;

class DictionaryController extends Controller
{
    public function __construct(private readonly ProductCategoryRepository $productCategoryRepository)
    {
    }

    public function getCategories(ProductCategoryTransformer $transformer)
    {
        return CategoryResponse::collection($transformer->transform($this->productCategoryRepository->allWithCountProducts()));
    }

    public function getProducts(ProductCategory $category)
    {
        return $category->products;
    }
}
