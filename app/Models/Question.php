<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

/**
 * @property string $name
 * @property string|null $phone
 * @property string|null $email
 * @property string $comment
 */
class Question extends Model
{
    use AsSource, Filterable;
    protected $fillable = [
        'name',
        'phone',
        'email',
        'comment',
    ];
}
