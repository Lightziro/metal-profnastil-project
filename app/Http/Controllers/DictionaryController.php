<?php

namespace App\Http\Controllers;

use App\Http\Request\QuestionRequest;
use App\Models\ProductCategory;
use App\Services\Question\NewQuestionService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class DictionaryController extends Controller
{
    public function getCategories(): Collection|array
    {
        return ProductCategory::query()->get();
    }
}
