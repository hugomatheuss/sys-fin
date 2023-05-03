<?php

namespace App\Repositories;

use App\Models\Conta;

class ContaRepository {
    
    protected $entity;

    public function __construct(Conta $conta)
    {
        $this->entity = $conta;
    }

    public function getAll()
    {
        return $this->entity->all();
    }

    public function getOne(string $id)
    {
        return $this->entity->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->entity->create($data);
    }

    public function update(array $data, string $id)
    {
        $this->entity = $this->getOne($id);

        return $this->entity->update($data);
    }

    public function delete(string $id)
    {
        $this->entity = $this->getOne($id);

        return $this->entity->delete();
    }
}