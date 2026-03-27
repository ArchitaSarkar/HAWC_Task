<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->get('/', 'Home::index');

$routes->get('test-db', 'TestDB::index');

$routes->post('api/register', 'AuthController::register');