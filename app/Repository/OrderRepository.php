<?php
namespace App\Repository;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;

class OrderRepository
{
    public function newOrder(array $data): Order|Model
    {
        $order = new Order($data);
        $order->save();
        return $order;
    }
}
