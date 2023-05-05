<?php

namespace App\Repositories;

use App\Models\Conta;
use App\Models\User;
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

    public function create(array $data, User $user): Conta
    {
        return $user->contas()->create($data);
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