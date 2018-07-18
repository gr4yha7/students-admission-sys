<?php
include_once __DIR__ . '/users.php';

header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_GET['param'], false);
$option = $obj->option;

switch ($option) {
	case 'username':
		$data = getUserByName($obj->param);
		echo json_encode($data);
		break;

	case 'email':
		$data = getUserByEmail($obj->param);
		echo json_encode($data);
		break;
	
	default:
		header("HTTP/1.1 404 Not Found");
		break;
}
