<?php

namespace App\Http\Request;

use Illuminate\Foundation\Http\FormRequest;

class QuestionRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'name' => 'string|min:0|max:255',
            'phone' => 'nullable|string',
            'email' => 'nullable|string',
            'comment' => 'nullable|string|min:10',
        ];
    }
}
