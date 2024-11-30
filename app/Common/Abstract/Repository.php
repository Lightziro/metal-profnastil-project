<?php

namespace App\Common\Abstract;

use App\Common\Interface\RepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 * @template T
 *
 * @implements RepositoryInterface<T>
 */
abstract class Repository implements RepositoryInterface
{
    protected string|Model $model;

    /**
     * @param int $entityId
     *
     * @throws \Exception
     *
     * @return T
     */
    public function getById(int $entityId)
    {
        $entity = $this->model::query()->where('id', $entityId)->first();
        if ($entity === null) {
            throw new \Exception('Entity not found');
        }

        return $entity;
    }

    /**
     * @param array<int> $entityIds
     *
     * @return Collection<int, T>
     */
    public function getByIds(array $entityIds): Collection
    {
        return $this->model::query()->whereIn('id', $entityIds)->get();
    }

    /**
     * @param bool $showOnTheTechnicalCommitteeOnly
     *
     * @return Collection<int, T>
     */
    public function getAll(): Collection
    {
        $query = $this->model::query();

        return $query->get();
    }

    /**
     * @param Model $entity
     *
     * @throws \Exception
     *
     * @return Model
     */
    public function save(Model $entity): Model
    {
        $save = $entity->save();
        if (!$save) {
            throw new \Exception('Entity not found');
        }

        return $entity;
    }

    public function delete(Model $entity): bool
    {
        return $entity->delete();
    }

    public function deleteByIds(array $ids): bool
    {
        return $this->model::query()->whereIn('id', $ids)->delete();
    }

    public function deleteById(int $id): bool
    {
        return $this->model::query()->where('id', $id)->delete();
    }
}
