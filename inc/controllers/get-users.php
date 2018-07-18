<?php

include_once __DIR__ . '/users.php';

$users = getUsers();

echo json_encode($users);