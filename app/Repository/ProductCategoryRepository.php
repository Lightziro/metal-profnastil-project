<?php
namespace App\Repository;

use App\Models\ProductCategory;
use Illuminate\Support\Collection;

class ProductCategoryRepository
{
    public function allWithCountProducts(): Collection
    {
        return ProductCategory::query()->withCount('products')->get();
    }
}
