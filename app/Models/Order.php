<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

/**
 * @property string $full_name
 * @property string|null $phone
 * @property string|null $email
 * @property string $comment
 */
class Order extends Model
{
    use AsSource, Filterable;
    protected $fillable = [
        'entity_type',
        'entity_id',
        'full_name',
        'phone',
        'email',
        'comment',
    ];

    public function entity(): MorphTo
    {
        return $this->morphTo();
    }

    public function setEntityTypeAttribute($value)
    {
        $this->attributes['entity_type'] = match ($value) {
            'category' => ProductCategory::class,
        };
    }
}
