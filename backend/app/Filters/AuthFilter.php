<?php namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthFilter implements FilterInterface {
    public function before(RequestInterface $request, $arguments = null) {
        $header = $request->getServer('HTTP_AUTHORIZATION');
        if (!$header) return service('response')->setJSON(['message' => 'Token Required'])->setStatusCode(401);

        $token = explode(' ', $header)[1]; // Get token from "Bearer <token>"

        try {
            JWT::decode($token, new Key("YOUR_SECRET_KEY", 'HS256'));
        } catch (\Exception $e) {
            return service('response')->setJSON(['message' => 'Invalid Token'])->setStatusCode(401);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}