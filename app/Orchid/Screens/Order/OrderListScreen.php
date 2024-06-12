<?php

declare(strict_types=1);

namespace App\Orchid\Screens\Order;

use App\Models\Order;
use App\Orchid\Layouts\Order\OrderListLayout;
use App\Orchid\Layouts\Question\QuestionListLayout;
use Orchid\Screen\Screen;

class OrderListScreen extends Screen
{
    public function query(): iterable
    {
        return [
            'orders' => Order::query()
                ->with('entity')
                ->defaultSort('id', 'desc')
                ->paginate(),
        ];
    }
    public function name(): ?string
    {
        return 'Заявки с сайта';
    }

    public function layout(): iterable
    {
        return [
            OrderListLayout::class,
        ];
    }
}
