<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Question;

use App\Models\Question;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class QuestionListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'questions';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('name', __('ФИО Клиента'))
                ->sort(),

            TD::make('phone', __('Телефон'))
                ->sort()
                ->render(function (Question $question) {
                    return $question->phone ?? 'Не указан';
                }),
            TD::make('email', __('Email'))
                ->sort()
                ->cantHide()->render(function (Question $question) {
                    return $question->email ?? 'Не указан';
                }),
            TD::make('comment', __('Комментарий'))
                ->sort()
                ->cantHide()->render(function (Question $question) {
                    return $question->comment ?? 'Не указан';
                }),

            TD::make('created_at', __('Дата создания'))
                ->sort()
                ->render(function (Question $question) {
                    return $question->created_at->toDateTimeString();
                }),
        ];
    }
}
