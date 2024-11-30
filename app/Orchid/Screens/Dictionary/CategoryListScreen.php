<?php

declare(strict_types=1);

namespace App\Orchid\Screens\Dictionary;

use App\Models\ProductCategory;
use App\Orchid\Layouts\Dictionary\CategoryListLayout;
use Orchid\Screen\Screen;

class CategoryListScreen extends Screen
{
    public function query(): iterable
    {
        return [
            'categories' => ProductCategory::query()
                ->defaultSort('id', 'desc')
                ->paginate(),
        ];
    }

    public function name(): ?string
    {
        return 'Категории товаров';
    }

    public function layout(): iterable
    {
        return [
            CategoryListLayout::class,
        ];
    }
}
