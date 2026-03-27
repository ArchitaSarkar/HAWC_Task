<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\AuthUserModel;
use App\Models\TeacherModel;
use Firebase\JWT\JWT;

class AuthController extends ResourceController {
    
    // REQUIREMENT #6: Single POST API for both tables
    public function register() {
        $db = \Config\Database::connect();
        $authModel = new AuthUserModel();
        $teacherModel = new TeacherModel();

        $json = $this->request->getJSON();

        $db->transStart(); // Start transaction for data integrity

        $userId = $authModel->insert([
            'email'      => $json->email,
            'first_name' => $json->first_name,
            'last_name'  => $json->last_name,
            'password'   => password_hash($json->password, PASSWORD_BCRYPT),
        ]);

        $teacherModel->insert([
            'user_id'         => $userId,
            'university_name' => $json->university_name,
            'gender'          => $json->gender,
            'year_joined'     => $json->year_joined,
        ]);

        $db->transComplete();

        if ($db->transStatus() === false) {
            return $this->fail('Registration failed', 400);
        }

        return $this->respondCreated(['message' => 'User & Teacher created successfully']);
    }

    // REQUIREMENT #2: Login API with JWT
    public function login() {
        $authModel = new AuthUserModel();
        $json = $this->request->getJSON();

        $user = $authModel->where('email', $json->email)->first();

        if (!$user || !password_verify($json->password, $user['password'])) {
            return $this->failUnauthorized('Invalid credentials');
        }

        $key = "YOUR_SECRET_KEY"; // In production, move this to .env
        $payload = [
            "iss" => "localhost",
            "aud" => "localhost",
            "iat" => time(),
            "exp" => time() + 3600, // 1 hour expiration
            "uid" => $user['id'],
            "email" => $user['email']
        ];

        $token = JWT::encode($payload, $key, 'HS256');

        return $this->respond([
            'message' => 'Login Successful',
            'token'   => $token,
            'user'    => [
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['first_name']
            ]
        ]);
    }
}