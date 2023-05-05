<?php

namespace App\Services;

use App\Models\Conta;
use App\Models\User;
use App\Repositories\ContaRepository;
use Illuminate\Database\Eloquent\Collection;

class ContaService {

    protected $repository;

    public function __construct(ContaRepository $contaRepository)
    {
        $this->repository = $contaRepository;
    }

    public function getAll(): Collection
    {
        return $this->repository->getAll();
    }

    public function getOne(string $id): Conta
    {
        return $this->repository->getOne($id);
    }

    public function create(array $data, User $user): Conta
    {
        return $this->repository->create($data, $user);
    }

    public function update(array $data, string $id): bool
    {
        return $this->repository->update($data, $id);
    }

    public function delete(string $id): bool
    {
        return $this->repository->delete($id);
    }
}