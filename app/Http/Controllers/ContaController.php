<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContaRequest;
use App\Http\Resources\ContaResource;
use App\Services\ContaService;
use Exception;
use Illuminate\Http\Request;

class ContaController extends Controller
{
    public function __construct(protected ContaService $contaService)
    {
        $this->contaService = $contaService;
        $this->middleware('auth:api');
    }

    public function index()
    {
        $contas = $this->contaService->getAll();
        return ContaResource::collection($contas);
    }

    public function store(ContaRequest $request)
    {
        try {
            $data = $this->contaService->create($request->validated());
            return new ContaResource($data);
        } catch (Exception $e) {
            //TO DO
        }
    }

    public function show($id)
    {
        try {
            $data = $this->contaService->getOne($id);
            return new ContaResource($data);
        } catch (Exception $e) {
            //TO DO
        }
    }

    public function update(ContaRequest $request, $id)
    {
        try {
            $this->contaService->update($request->validated(), $id);
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
            $this->contaService->delete($id);
            return response()->json([
                "Deleted", 204
            ]);
        } catch (Exception $e) {
            //TO DO
        }
    }
}
