<?php namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class AuthFilter implements FilterInterface {
    public function before(RequestInterface $request, $arguments = null) {
        // 1. Get the Authorization header
        $header = $request->getServer('HTTP_AUTHORIZATION') ?? $request->getHeaderLine('Authorization');
        
        if (!$header) {
            return service('response')
                ->setJSON(['status' => 401, 'message' => 'Token Required'])
                ->setStatusCode(401);
        }

        // 2. Extract the token (Handle "Bearer <token>" format)
        $parts = explode(' ', $header);
        if (count($parts) !== 2 || $parts[0] !== 'Bearer') {
             return service('response')
                ->setJSON(['status' => 401, 'message' => 'Invalid Token Format (Expected Bearer <token>)'])
                ->setStatusCode(401);
        }
        
        $token = $parts[1];

        try {
            // 3. Decode and Verify the token using the secret from .env
            $key = env('JWT_SECRET');
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            
            // Optional: Pass the decoded user info to the request for use in controllers
            // $request->user = $decoded;

        } catch (Exception $e) {
            return service('response')
                ->setJSON([
                    'status' => 401, 
                    'message' => 'Invalid or Expired Token',
                    'error' => $e->getMessage() // Good for debugging, remove in production
                ])
                ->setStatusCode(401);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {
        // No action needed after the request
    }
}