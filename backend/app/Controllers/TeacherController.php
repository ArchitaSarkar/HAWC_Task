<?php namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;

class TeacherController extends ResourceController {
    public function index() {
        $db = \Config\Database::connect();
        // Join auth_user and teachers to get combined data
        $builder = $db->table('auth_user');
        $builder->select('auth_user.id, email, first_name, last_name, university_name, gender, year_joined');
        $builder->join('teachers', 'teachers.user_id = auth_user.id');
        $query = $builder->get();

        return $this->respond($query->getResult());
    }
}