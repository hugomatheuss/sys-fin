<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
    
            $credentials = $request->only('email', 'password');
    
            $token = auth()->attempt($credentials);
    
            if (!$token) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            
            return $this->respondWithToken($token);
        } catch(Exception $e) {
            throw new Exception('Houve algo de errado, por favor, contate o suporte!');
        }
    }

    public function register(UserRequest $request)
    {
        try {
            $data = $request->validated();

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            $token = Auth::login($user);
            
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user,
                'authorization' => [
                    'access_token' => $token,
                    'token_type' => 'bearer',
                ]
            ]);
        } catch(Exception $e) {
            throw new Exception('Houve algo de errado, por favor, contate o suporte!');
        }
    }

    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate($request->token);
 
            return response()->json([
                'success' => true,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /* public function refresh()
    {
        return $this->createNewToken(Auth::refresh());
    } */

    public function userProfile()
    {
        return response()->json(auth()->user());
    }

    public function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer'
        ]);
    }
}
