<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class TeacherController extends ResourceController {

    public function index() {
        $db = \Config\Database::connect();
        
        // Use the Query Builder to join auth_user and teachers
        $builder = $db->table('auth_user');
        $builder->select('auth_user.id, auth_user.email, auth_user.first_name, auth_user.last_name, teachers.university_name, teachers.gender, teachers.year_joined');
        $builder->join('teachers', 'teachers.user_id = auth_user.id');
        
        $query = $builder->get();
        $teachers = $query->getResult();

        if (empty($teachers)) {
            return $this->respond([]); // Return empty array if no data
        }

        return $this->respond($teachers);
    }
}