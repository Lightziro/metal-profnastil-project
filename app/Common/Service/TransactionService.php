<?php

namespace App\Common\Service;

use Closure;
use Illuminate\Support\Facades\DB;
use Throwable;

class TransactionService
{
    /**
     * @throws Throwable
     */
    public function run(Closure $callback)
    {
        try {
            DB::beginTransaction();
            $result = $callback();
            DB::commit();
        } catch (Throwable $e) {
            DB::rollBack();
            throw $e;
        }

        return $result;
    }
}
