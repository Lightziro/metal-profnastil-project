<?php

declare(strict_types=1);

namespace App\Orchid\Screens\Question;

use App\Models\ProductCategory;
use App\Models\Question;
use App\Orchid\Layouts\Dictionary\CategoryListLayout;
use App\Orchid\Layouts\Question\QuestionListLayout;
use App\Orchid\Layouts\User\UserEditLayout;
use App\Orchid\Layouts\User\UserFiltersLayout;
use App\Orchid\Layouts\User\UserListLayout;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Orchid\Platform\Models\User;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

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
