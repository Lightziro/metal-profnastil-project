<?php
namespace App\Repository;

use App\Common\Abstract\Repository;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;

class OrderRepository extends Repository
{
    protected string|Model $model = Order::class;
}
