<?php

namespace App\Services\Order;

use App\Http\Request\OrderRequest;
use App\Jobs\SendOrderToEmail;
use App\Models\Order;
use App\Repository\OrderRepository;


class NewOrderService
{
    public function __construct(readonly private OrderRepository $orderRepository,)
    {
    }

    public function execute(OrderRequest $request)
    {
        $order = $this->orderRepository->newOrder($this->prepareToModel($request));
        $this->sendOrderToEmail($order);
        return $order;
    }

    private function prepareToModel(OrderRequest $request): array
    {
        return [
            'entity_type' => $request->entityType,
            'entity_id' => $request->entityId,
            'full_name' => $request->fullName,
            'phone' => $request->phone,
            'email' => $request->email,
            'comment' => $request->comment,
        ];
    }

    public function sendOrderToEmail(Order $order)
    {
        SendOrderToEmail::dispatch($order);
    }
}
