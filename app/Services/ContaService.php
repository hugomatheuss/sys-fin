<?php

namespace App\Services;

use App\Repositories\ContaRepository;

class ContaService {

    protected $repository;

    public function __construct(ContaRepository $contaRepository)
    {
        $this->repository = $contaRepository;
    }

    public function getAll()
    {
        return $this->repository->getAll();
    }

    public function getOne(string $id)
    {
        return $this->repository->getOne($id);
    }

    public function create(array $data)
    {
        return $this->repository->create($data);
    }

    public function update(array $data, string $id)
    {
        return $this->repository->update($data, $id);
    }

    public function delete(string $id)
    {
        return $this->repository->delete($id);
    }
}