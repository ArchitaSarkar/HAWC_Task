<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class TestDB extends Controller {
    public function index() {
        $db = \Config\Database::connect();

        if ($db->connID) {
            echo "✅ Database Connected Successfully";
        } else {
            echo "❌ Database Connection Failed";
        }
    }
}