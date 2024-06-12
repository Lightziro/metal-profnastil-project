<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Dictionary;

use App\Models\ProductCategory;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class CategoryListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'categories';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('name', __('Название'))
                ->sort()
                ->cantHide(),

            TD::make('slug', __('Код'))
                ->sort()
                ->defaultHidden(true)
                ->cantHide(),

            TD::make('updated_at', __('Последнее редактирование'))
                ->sort()
                ->render(function (ProductCategory $category) {
                    return $category->updated_at->toDateTimeString();
                }),
        ];
    }
}
