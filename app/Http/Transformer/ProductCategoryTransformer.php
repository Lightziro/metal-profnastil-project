<?php

namespace App\Http\Transformer;


use App\Http\DataTransferObject\ProductCategoryResponseData;
use App\Models\ProductCategory;
use Illuminate\Support\Collection;

class ProductCategoryTransformer
{
    public function transform(Collection $listCategory): array
    {
        $data = [];
        foreach ($listCategory as $category) {
            $data[] = new ProductCategoryResponseData(
                $category->id,
                $category->name,
                $category->products_count,
                $category->url_slug,
                $category->slug,
            );
        }
        return $data;
    }
}
