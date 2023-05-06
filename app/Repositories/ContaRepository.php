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

    public function getAll(User $user): ?Collection
    {
        return $user->contas()->get();
    }

    public function getOne(string $id, $user): ?Conta
    {
        return $user->contas()->find($id);
    }

    public function create(array $data, User $user): Conta
    {
        return $user->contas()->create($data);
    }

    public function update(array $data, string $id, User $user): bool
    {
        $this->entity = $this->getOne($id, $user);
        if (is_null($this->entity)) {
            return false;
        }
        return $this->entity->update($data);
    }

    public function delete(string $id, User $user): bool
    {
        $this->entity = $this->getOne($id, $user);
        if (is_null($this->entity)) {
            return false;
        }
        return $this->entity->delete();
    }
}