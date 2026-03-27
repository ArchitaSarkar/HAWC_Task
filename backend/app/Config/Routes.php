<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'Home::index');

$routes->get('test-db', 'TestDB::index');

$routes->post('api/register', 'AuthController::register');
$routes->post('api/login', 'AuthController::login');

// Protect the teachers list API with our JWT filter
$routes->get('api/teachers', 'TeacherController::index', ['filter' => 'auth_filter']);