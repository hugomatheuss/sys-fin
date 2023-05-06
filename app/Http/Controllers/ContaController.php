<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContaRequest;
use App\Http\Resources\ContaResource;
use App\Services\ContaService;
use Exception;
use Illuminate\Foundation\Auth\User;

class ContaController extends Controller
{
    public function __construct(protected ContaService $contaService, protected User $user)
    {
        $this->contaService = $contaService;
        $this->user = auth()->user();
        $this->middleware('auth:api');
    }

    public function index()
    {
        try {
            $contas = $this->contaService->getAll($this->user);

            if (is_null($contas)) {
                throw new Exception("Você não possui contas cadastradas.");
            }

            return ContaResource::collection($contas);
        } catch (Exception $e) {
            //TO DO
            dd($e);
        }
    }

    public function store(ContaRequest $request)
    {
        try {
            $data = $this->contaService->create($request->validated(), $this->user);
            return new ContaResource($data);
        } catch (Exception $e) {
            //TO DO
        }
    }

    public function show($id)
    {
        try {
            $data = $this->contaService->getOne($id, $this->user);

            if (is_null($data)) {
                throw new Exception("Esta conta não existe.");
            }

            return new ContaResource($data);
        } catch (Exception $e) {
            //TO DO
        }
    }

    public function filterConta($id)
    {

    }

    public function update(ContaRequest $request, $id)
    {
        try {
            $isUpdated = $this->contaService->update($request->validated(), $id, $this->user);

            if(!$isUpdated) {
                throw new Exception("Houve um erro.");
            }

            return response()->json([
                'updated' => true
            ]);
        } catch (Exception $e) {
            //TO DO
        }
    }

    public function destroy($id)
    {
        try {
            $isDeleted = $this->contaService->delete($id, $this->user);

            if (!$isDeleted) {
                throw new Exception("Houve um erro.");
            }

            return response()->json([
                "Deleted", 204
            ]);
        } catch (Exception $e) {
            //TO DO
        }
    }
}
