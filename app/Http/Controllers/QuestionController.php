<?php

namespace App\Http\Controllers;

use App\Http\Request\QuestionRequest;
use App\Services\Question\NewQuestionService;

class QuestionController extends Controller
{
    public function __construct(readonly private NewQuestionService $newQuestionService)
    {
    }

    public function newQuestion(QuestionRequest $request): ?string
    {
        $this->newQuestionService->execute($request);
        return response()->json();
    }
}
