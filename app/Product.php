<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function profList()
    {
        return $this->hasOne(ProfList::class, 'productId', 'id')->with(['typeList']);
    }

    public function typeProduct()
    {
        return $this->belongsTo(TypeProductList::class, 'productTypeId', 'id');
    }
    public static function getById(int $id)
    {
        return self::with(['profList', 'typeProduct'])->where('id', $id)->get()->first();
    }
    public static function getByArrayId(array $arId)
    {
        return self::with(['profList'])->whereIn('id', $arId)->get();
    }
}
