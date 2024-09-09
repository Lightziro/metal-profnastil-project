<?php

namespace App\Common\Interface;

use Illuminate\Database\Eloquent\Model;

/**
 * @template T
 */
interface RepositoryInterface
{
    /**
     * @param int $entityId
     *
     * @return T
     */
    public function getById(int $entityId);

    public function save(Model $entity);

    public function delete(Model $entity): bool;
}
