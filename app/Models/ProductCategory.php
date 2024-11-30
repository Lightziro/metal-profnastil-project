<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Collection;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

/**
 * @property string               $name
 * @property string               $slug
 * @property string               $url_slug
 * @property Product[]|Collection $products
 */
class ProductCategory extends Model
{
    use AsSource, Filterable;
    protected $fillable = [
        'name',
        'url_slug',
        'slug',
    ];

    public function orders(): MorphMany
    {
        return $this->morphMany(Order::class, 'entity');
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
