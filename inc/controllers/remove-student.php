<?php
session_start();
include_once __DIR__ . '/students.php';
if(isset($_POST['submit'])) {
	if(isset($_POST['param']) && isset($_POST['option'])) {
		$arg = $_POST['param'];
		$func_option = $_POST['option'];

		if($func_option === 'name') {
			$result = removeStudentByName($arg);
			if($result === 'Delete success') {
				$_SESSION['success'] = 'Student removed successfully!!';
				header('Location: /dashboard');
			}
			else {
				$_SESSION['regFailed'] = 'Student Removal Failed!!';
				header('Location: /dashboard');
			}
		}
		elseif($func_option === 'regNo') {
			$result = removeStudentByRegNo($arg);
			if($result === 'Delete success') {
				$_SESSION['success'] = 'Student removed successfully!!';
				header('Location: /dashboard');
			}
			else {
				$_SESSION['failure'] = 'Student Removal Failed!!';
				header('Location: /dashboard');
			}
		}

		else {
			header('HTTP/1.1 400 Bad Request');
		}
	}
}