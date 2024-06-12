<?php

namespace App\Http\Request;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'entityId' => 'required|integer',
            'entityType' => 'required|string',
            'fullName' => 'string|min:0|max:255',
            'phone' => 'nullable|string',
            'email' => 'nullable|string',
            'comment' => 'nullable|string|min:4',
        ];
    }
}
