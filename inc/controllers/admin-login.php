<?php

session_start();

require_once '../../vendor/autoload.php';
include_once __DIR__ . '/users.php';
include_once __DIR__ . '/students.php';

use MongoDB\Collection as Collection;
$manager = $GLOBALS['manager'];
$db = 'admission';
$col_name = 'admin';
$options = [];

$collection = new Collection($manager, $db, $col_name, $options);

if(isset($_POST['signIn'])) {
	if(isset($_POST['username']) && isset($_POST['password'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];

		$filter = [ 'username' => $username, 'password' => $password ];

		$document = $collection->findOne($filter, $options);
		if($document["username"] === $username && $document["password"] === $password) {

			$_SESSION['admin'] = $username;

			header("Location: /admin");
			exit;
		}
		else {
			throw new Exception("Admin Login Failed", 1);	
		}
	}
	elseif (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['remember'])) {

		/* session expires after 7 days */
		setcookie(session_name(), '', time() + 24*60*60*7);

		$username = $_POST['username'];
		$password = $_POST['password'];

		$filter = [ 'username' => $username, 'password' => $password ];

		$document = $collection->findOne($filter, $options);
		if($document["username"] === $username && $document["password"] === $password) {

			$_SESSION['admin'] = $username;
			
			header("Location: /admin");
			exit;
		}
		else {
			throw new Exception("Admin Login Failed", 1);	
		}
	}
}
