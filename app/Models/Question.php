<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $name
 * @property string|null $phone
 * @property string|null $email
 * @property string $comment
 */
class Question extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'email',
        'comment',
    ];
}
