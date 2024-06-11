<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

/**
 * @property string $name
 * @property string $slug
 */
class ProductCategory extends Model
{
    use AsSource, Filterable;
    protected $fillable = [
        'name',
        'slug',
    ];

    public function orders(): MorphMany
    {
        return $this->morphMany(Order::class, 'entity');
    }
}
