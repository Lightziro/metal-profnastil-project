<?php

namespace App\Http\Response;

use App\Http\DataTransferObject\ProductCategoryResponseData;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property ProductCategoryResponseData resource
 */
class ProductResponse extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->resource->getId(),
            'name' => $this->resource->getName(),
            'products_count' => $this->resource->getCount(),
            'url_slug' => $this->resource->getUrlSlug(),
            'slug' => $this->resource->getSlug(),
        ];
    }
}
