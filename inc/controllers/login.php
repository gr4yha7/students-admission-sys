<?php
session_start();

include_once __DIR__ . '/users.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
	if(isset($_POST['login'])) {
		if(isset($_POST['email']) && isset($_POST['password'])) {
			$email = $_POST['email'];
			$password = $_POST['password'];

			$status = authenticateUser($email, $password);

			if($status === 'Login success') {
				$_SESSION['email'] = $email;
				$_SESSION['password'] = $password;
				header('Location: /landing');
			}
			elseif ($status === 'Wrong password') {
				$_SESSION['loginError'] = 'Invalid password';
				header('Location: /login');
			}
			elseif ($status === 'Wrong email') {
				$_SESSION['loginError'] = 'Invalid email and password';
				header('Location: /login');
			}
			else {
				header('HTTP/1.1 500 Internal Server Error');
			}

		}
	}
}
?>