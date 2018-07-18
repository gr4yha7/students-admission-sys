<?php

include_once __DIR__ . '/users.php';

$users = getUsers();
$count = 0;

foreach ($users as $user) {
	++$count;
}

echo json_encode($count);