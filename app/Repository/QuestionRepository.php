<?php

namespace App\Repository;

use App\Common\Abstract\Repository;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;

class QuestionRepository extends Repository
{
    protected string|Model $model = Question::class;
}
