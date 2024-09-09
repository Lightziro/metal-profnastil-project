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
                'slug' => 'prof_list',
                'url_slug' => 'profnastil'
            ],
            [
                'name' => 'Доборные элементы',
                'slug' => 'additional_element',
                'url_slug' => 'dobornye-elementy'
            ],
            [
                'name' => 'Металочерепица',
                'slug' => 'metal_list',
                'url_slug' => 'metalocherepitsa'
            ],
            [
                'name' => 'Гладкий лист',
                'slug' => 'smooth_list',
                'url_slug' => 'gladkiy-list'
            ],
            [
                'name' => 'Саморезы',
                'slug' => 'screw',
                'url_slug' => 'samorezy'
            ],
        ];
        foreach ($categories as $category) {
            $categoryModel = ProductCategory::query()->firstOrNew(['slug' => $category['slug']]);
            foreach ($category as $field => $value) {
                if ($categoryModel->$field !== $value) {
                    $categoryModel->$field = $value;
                }
            }
            $categoryModel->save();
        }
    }
}
