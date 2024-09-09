<?php

namespace App\Http\Transformer;


use App\Http\DataTransferObject\NewOrderData;
use App\Http\Request\OrderRequest;

class NewOrderRequestTransformer
{
    public function transform(OrderRequest $request): NewOrderData
    {
        return new NewOrderData(
            $request->input('entityType'),
            $request->input('entityId'),
            $request->input('fullName'),
            $request->input('phone'),
            $request->input('email'),
            $request->input('comment'),
        );
    }
}
