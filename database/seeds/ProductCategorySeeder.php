<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Профнастил',
                'slug' => 'prof_list'
            ],
            [
                'name' => 'Доборные элементы',
                'slug' => 'additional_element'
            ],
            [
                'name' => 'Металочерепица',
                'slug' => 'metal_list'
            ],
            [
                'name' => 'Гладкий лист',
                'slug' => 'smooth_list'
            ],
            [
                'name' => 'Саморезы',
                'slug' => 'screw'
            ],
        ];
        foreach ($categories as $category) {
            ProductCategory::query()->firstOrCreate($category);
        }
    }
}
