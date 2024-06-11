<?php
namespace App\Repository;

use App\Http\Request\OrderRequest;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;

class OrderRepository
{
    public function newOrder(array $data): Model
    {
        $order = new Order($data);
        $order->save();
        return $order;
    }
}
