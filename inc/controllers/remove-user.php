<?php
session_start();
include_once __DIR__ . '/users.php';

if(isset($_POST['submit'])) {
	if(isset($_POST['param']) && isset($_POST['option'])) {
			$arg = $_POST['param'];
			$func_option = $_POST['option'];

			if($func_option === 'username') {
				$result = removeUserByName($arg);
				if($result === 'Delete success') {
					$_SESSION['success'] = 'User removed successfully!!';
					header('Location: /dashboard');
				}
				else {
					$_SESSION['regFailed'] = 'User Removal Failed!!';
					header('Location: /dashboard');
				}
			}
			elseif($func_option === 'email') {
				$result = removeUserByEmail($arg);
				if($result === 'Delete success') {
					$_SESSION['success'] = 'User removed successfully!!';
					header('Location: /dashboard');
				}
				else {
					$_SESSION['failure'] = 'User Removal Failed!!';
					header('Location: /dashboard');
				}
			}

			else {
				header('HTTP/1.1 400 Bad Request');
			}
	}
	
}

