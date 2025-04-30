<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

/**
 * @property string      $entity_type
 * @property int|null    $entity_id
 * @property string      $full_name
 * @property string|null $phone
 * @property string|null $email
 * @property string      $comment
 * @property array $additional_data
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

    protected $casts = [
        'additional_data' => 'array',
    ];

    public function entity(): MorphTo
    {
        return $this->morphTo();
    }

    public function setEntityType(string $entityType): void
    {
        $this->entity_type = $entityType;
    }

    public function setEntityId(int $entityId): void
    {
        $this->entity_id = $entityId;
    }

    public function setFullName(string $fullName): void
    {
        $this->full_name = $fullName;
    }

    public function setPhone(?string $phone): void
    {
        $this->phone = $phone;
    }

    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    public function setComment(?string $comment): void
    {
        $this->comment = $comment;
    }

    public function setAdditionalData(?array $additionalData)
    {
        $this->additional_data = $additionalData;
    }

    public function setEntityTypeAttribute($value): void
    {
        $this->attributes['entity_type'] = match ($value) {
            'category' => ProductCategory::class,
            'product' => Product::class,
        };
    }

    public static function getNameTypeCoating($value)
    {
        return match($value) {
            'polymer' => 'полимер',
            'galvanized' => 'оцинкованное',
        };
    }


    public function getInfoOrder()
    {
        return collect($this->additional_data)->map(function ($item) {
            switch ($item['attribute']) {
                case 'ral':
                    return "RAL: {$item['value']}";
                case 'thickness':
                    return "Толщина: {$item['value']}мм";
                case 'typeCoating':
                    $typeName = self::getNameTypeCoating($item['value']);
                    return "Тип покрытия: $typeName";
                case 'length':
                    return "Длина: {$item['value']}м";
            }
            return null;

        })->filter()->implode(', ');
    }
}
