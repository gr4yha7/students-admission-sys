<?php
session_start();

include_once __DIR__ . '/users.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
	if(isset($_POST['register'])) {
		if(isset($_POST['surname']) && isset($_POST['firstname']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['phone']) && isset($_POST['gender'])) {

			$surname = $_POST['surname'];
			$firstname = $_POST['firstname'];
			$email = $_POST['email'];

			$password = $_POST['password'];
			$phone = $_POST['phone'];
			$gender = $_POST['gender'];

			$name = $surname. ' ' .$firstname;

			$userData = array(
				"name" => $name,
				"email" => $email,
				"password" => $password,
				"phone" => $phone,
				"gender" => $gender
			);

			$result = registerUser($userData);

			if($result === 'Registration success') {
				$_SESSION['signupSuccess'] = 'Registration successful!';
				header('Location: /login');
			}
			elseif($result === 'Registration failed') {
				header('HTTP/1.0 500 Internal Server Error');
			}
			else {
				header('HTTP/1.0 400 Bad Request');
			}
		}
	}
}
?>