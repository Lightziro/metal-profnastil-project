<?php

namespace App\Http\Controllers;

use App\Common\Service\TransactionService;
use App\Http\Request\QuestionRequest;
use App\Http\Transformer\NewQuestionRequestTransformer;
use App\Services\Question\NewQuestionService;

class QuestionController extends Controller
{
    public function __construct(readonly private NewQuestionService $newQuestionService, readonly private TransactionService $transactionService)
    {
    }

    public function newQuestion(QuestionRequest $request, NewQuestionRequestTransformer $transformer): ?string
    {
        $data = $transformer->transform($request);
        $this->transactionService->run(fn () => $this->newQuestionService->create($data));

        return response()->json();
    }
}
