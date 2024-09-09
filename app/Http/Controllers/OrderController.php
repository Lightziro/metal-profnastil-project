<?php

namespace App\Http\Controllers;

use App\Common\Service\TransactionService;
use App\Http\Request\OrderRequest;
use App\Http\Transformer\NewOrderRequestTransformer;
use App\Services\Order\NewOrderService;

class OrderController extends Controller
{
    public function __construct(private readonly TransactionService $transactionService)
    {
    }

    public function newOrder(OrderRequest $request, NewOrderService $newOrderService, NewOrderRequestTransformer $transformer)
    {
        $this->transactionService->run(fn () => $newOrderService->create($transformer->transform($request)));
        return response()->json();
    }
}
