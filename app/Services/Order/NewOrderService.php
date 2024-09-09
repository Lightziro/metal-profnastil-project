<?php

namespace App\Services\Order;

use App\Http\DataTransferObject\NewOrderData;
use App\Jobs\SendOrderToEmail;
use App\Models\Order;
use App\Repository\OrderRepository;


class NewOrderService
{
    public function __construct(readonly private OrderRepository $orderRepository)
    {
    }

    public function create(NewOrderData $orderData)
    {
        $order = new Order();
        $order->setEntityType($orderData->getEntityType());
        $order->setEntityId($orderData->getEntityId());
        $order->setFullName($orderData->getFullName());
        $order->setEmail($orderData->getEmail());
        $order->setComment($orderData->getComment());
        $order->setPhone($orderData->getPhone());
        $this->orderRepository->save($order);

        $this->sendOrderToEmail($order);
        return $order;
    }

    public function sendOrderToEmail(Order $order)
    {
        SendOrderToEmail::dispatch($order);
    }
}
