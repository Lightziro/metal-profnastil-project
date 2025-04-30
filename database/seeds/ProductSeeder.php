<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'category_slug' => 'prof_list',
                'data' => [
                    'name' => 'Профнастил С-8',
                    'slug' => 'prof_list_c8',
                ],
            ],
            [
                'category_slug' => 'prof_list',
                'data' => [
                    'name' => 'Профнастил С-10',
                    'slug' => 'prof_list_c10',
                ],
            ],
            [
                'category_slug' => 'prof_list',
                'data' => [
                    'name' => 'Профнастил С-20',
                    'slug' => 'prof_list_c20',
                ],
            ],
            [
                'category_slug' => 'prof_list',
                'data' => [
                    'name' => 'Профнастил С-21',
                    'slug' => 'prof_list_c21',
                ],
            ],
            [
                'category_slug' => 'prof_list',
                'data' => [
                    'name' => 'Профнастил С-44',
                    'slug' => 'prof_list_c44',
                ],
            ],
        ];
        foreach ($products as $product) {
            /** @var ProductCategory|null $category */
            $category = ProductCategory::query()->where('slug', $product['category_slug'])->first();
            if ($category) {
                $category->products()->firstOrCreate($product['data']);
            }
        }
    }
}
