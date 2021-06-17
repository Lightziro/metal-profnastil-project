<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProfList extends Model
{
    protected $table = 'prof_list';

    public function typeList()
    {
        return $this->belongsTo('App\TypeList', 'typeListId', 'id');
    }
}
