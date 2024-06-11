<?php

namespace App\Orchid\Screens;

use App\Models\Order;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;

class StatsScreen extends Screen
{
    public function query(): iterable
    {
        $ordersToday = Order::query()->where('created_at', '>', now()->startOfDay())->count();
        $ordersWeek = Order::query()->where('created_at', '>', now()->startOfWeek())->count();
        $questionsToday = Order::query()->where('created_at', '>', now()->startOfDay())->count();
        $questionsWeek = Order::query()->where('created_at', '>', now()->startOfWeek())->count();
        return [
            'metrics' => [
                'ordersToday'    => ['value' => $ordersToday],
                'ordersWeek' => ['value' => $ordersWeek],
                'questionsToday' => ['value' => $questionsToday],
                'questionsWeek' => ['value' => $questionsWeek],
            ],
        ];
    }

    /**
     * Display header name.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Статистика сайта';
    }

    public function layout(): iterable
    {
        return [
            Layout::metrics([
                'Заявок сегодня'    => 'metrics.ordersToday',
                'Заявок за неделю' => 'metrics.ordersWeek',
                'Вопросов сегодня' => 'metrics.questionsToday',
                'Вопросов за неделю' => 'metrics.questionsWeek',
            ]),
        ];
    }
}
