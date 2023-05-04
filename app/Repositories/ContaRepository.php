<?php

namespace App\Repositories;

use App\Models\Conta;
use Illuminate\Database\Eloquent\Collection;

class ContaRepository {
    
    protected $entity;

    public function __construct(Conta $conta)
    {
        $this->entity = $conta;
    }

    public function getAll(): Collection
    {
        return $this->entity->all();
    }

    public function getOne(string $id): Conta
    {
        return $this->entity->findOrFail($id);
    }

    public function create(array $data): Conta
    {
        return $this->entity->create($data);
    }

    public function update(array $data, string $id): bool
    {
        $this->entity = $this->getOne($id);
        return $this->entity->update($data);
    }

    public function delete(string $id): bool
    {
        $this->entity = $this->getOne($id);
        return $this->entity->delete();
    }
}