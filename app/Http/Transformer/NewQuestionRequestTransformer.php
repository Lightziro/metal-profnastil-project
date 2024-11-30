<?php

namespace App\Http\Transformer;

use App\Http\DataTransferObject\NewQuestionData;
use App\Http\Request\QuestionRequest;

class NewQuestionRequestTransformer
{
    public function transform(QuestionRequest $request): NewQuestionData
    {
        return new NewQuestionData(
            $request->input('name'),
            $request->input('phone'),
            $request->input('email'),
            $request->input('comment'),
        );
    }
}
