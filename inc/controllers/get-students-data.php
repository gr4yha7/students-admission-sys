<?php
include_once __DIR__ . '/students.php';

header("Content-Type: application/json; charset=UTF-8");

$obj = json_decode($_GET['param'], false);
$option = $obj->option;

switch ($option) {
	case 'name':
		$data = getStudentByName($obj->param);
		echo json_encode($data);
		break;

	case 'regNo':
		$data = getStudentByRegNo($obj->param);
		echo json_encode($data);
		break;

	case 'dept':
		$data = getStudentsByDepartment($obj->param);
		echo json_encode($data);
		break;

	case 'faculty':
		$data = getStudentsByFaculty($obj->param);
		echo json_encode($data);
		break;
	
	default:
		header("HTTP/1.1 404 Not Found");
		break;
}

