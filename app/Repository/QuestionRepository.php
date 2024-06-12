<?php
namespace App\Repository;

use App\Http\Request\QuestionRequest;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;

class QuestionRepository
{
    public function newQuestion(QuestionRequest $request): Model|Question
    {
        return Question::query()->create($request->all());
    }
}
