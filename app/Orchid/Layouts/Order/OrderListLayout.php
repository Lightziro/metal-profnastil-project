<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Order;

use App\Models\Order;
use App\Models\Question;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class OrderListLayout extends Table
{
    public $target = 'orders';

    public function columns(): array
    {
        return [
            TD::make('full_name', __('ФИО Клиента'))
                ->sort(),

            TD::make('phone', __('Продукт'))
                ->sort()
                ->render(function (Order $order) {
                    return data_get($order, 'entity.name') ?? 'Не указан';
                }),
//            TD::make('email', __('Email'))
//                ->sort()
//                ->cantHide()->render(function (Question $question) {
//                    return $question->email ?? 'Не указан';
//                }),
//            TD::make('comment', __('Комментарий'))
//                ->sort()
//                ->cantHide()->render(function (Question $question) {
//                    return $question->comment ?? 'Не указан';
//                }),

            TD::make('created_at', __('Дата создания'))
                ->sort()
                ->render(function (Order $order) {
                    return $order->created_at->toDateTimeString();
                }),
        ];
    }
}
