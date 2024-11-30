<?php

declare(strict_types=1);

namespace App\Orchid\Screens\Question;

use App\Models\Question;
use App\Orchid\Layouts\Question\QuestionListLayout;
use Orchid\Screen\Screen;

class QuestionListScreen extends Screen
{
    public function query(): iterable
    {
        return [
            'questions' => Question::query()
                ->defaultSort('id', 'desc')
                ->paginate(),
        ];
    }

    public function name(): ?string
    {
        return 'Вопросы с сайта';
    }

    public function layout(): iterable
    {
        return [
            QuestionListLayout::class,
        ];
    }
}
