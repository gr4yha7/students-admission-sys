<?php
require_once '../../vendor/autoload.php';
include_once __DIR__ . '/db.php';

/**
*	@param $email
*	@param $password
*	@param $data
*/


use MongoDB\Collection as Collection;
use MongoDB\Driver\Exception as Exception;

$db_name = 'admission';
$collection_name = 'accounts';

$manager = $GLOBALS['manager'];
$collection = new Collection($manager, $db_name, $collection_name, [
			'typeMap' => [
				'array' => 'array',
				'document' => 'array',
				'root' => 'array'
			],
		]);

$options = [];

function authenticateUser($email, $password) {
	global $collection;
	global $options;

	try {
		$filter = ['email' => $email];
		$document = $collection->findOne($filter, $options);

		if($document['email'] === $email) {
			if(password_verify($password, $document['password'])) {
				$message = 'Login success';
			}
			else {
				$message = 'Wrong password';
			}
		}
		else {
			$message = 'Wrong email';
		}

	}
	catch(Exception\InvalidArgumentException $e) {
		$error = $e->getMessage();
		var_dump($error);
	}
	catch(Exception\RuntimeException $e) {
		$error = $e->getMessage();
		var_dump($error);
	}

	return $message;
}

function registerUser($data) {
	global $collection;
	global $options;

		try {
            $hashed_password = password_hash($data['password'], PASSWORD_BCRYPT);

            $insertDoc = [
              	"name" => $data['name'],
              	"email" => $data['email'],
              	"password" => $hashed_password,
              	"phone" => $data['phone'],
              	"gender" => $data['gender']
            ];

            $insertResult = $collection->insertOne($insertDoc, $options);

            if($insertResult->getInsertedCount() > 0) {
              	$message = 'Registration success';
            }
            else {
              	$message = 'Registration failed';
              	// throw new Exception($message, 1);
            }
        }

        catch(Exception\BulkWriteException $e) {
        	$writeResult = $e->getWriteResult();
        	var_dump($writeResult);
        }
        return $message;

	}

function getUsers() {
	global $collection;
	global $options;

	try {
		$filter = [];
		$users = array();

		$documents = $collection->find($filter, $options);

		foreach($documents as $cursor) {

			$user = array(
				'name' => $cursor['name'],
				'email' => $cursor['email'],
				'phone' => $cursor['phone'],
				'gender' => $cursor['gender']
			);
			array_push($users, $user);

		}
	}
	catch(Exception\InvalidArgumentException $e) {
		$error = $e->getMessage();
		var_dump($error);
	}
	catch(Exception\RuntimeException $e) {
		$error = $e->getMessage();
		var_dump($error);
	}

	return $users;
}

function getUserByEmail($email) {
	global $collection;
	global $options;
		try {
			$filter = [ 'email' => $email ];

			$user = $collection->findOne($filter, $options);
		}
		catch(Exception\InvalidArgumentException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}
		catch(Exception\RuntimeException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}

		return $user;
}

function getUserByName($name) {
	global $collection;
	global $options;
		try {
			$filter = [ 'name' => $name ];

			$user = $collection->findOne($filter, $options);
		}
		catch(Exception\InvalidArgumentException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}
		catch(Exception\RuntimeException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}

		return $user;
}

function removeUserByEmail($email) {
	global $collection;
	global $options;

	try {
		$filter = ['email' => $email];

		$deleteResult = $collection->deleteOne($filter, $options);

		if($deleteResult->getDeletedCount() > 0) {
			$message = 'Delete success';
		}
		else {
			$message = 'Delete operation failed';
			// throw new Exception($message, 1);
		}
	}

	catch(Exception\BulkWriteException $e) {
		$writeResult = $e->getWriteResult();
		var_dump($writeResult);
	}

	return $message;
}

function removeUserByName($name) {
	global $collection;
	global $options;

	try {
		$filter = ['name' => $name];

		$deleteResult = $collection->deleteOne($filter, $options);

		if($deleteResult->getDeletedCount() > 0) {
			$message = 'Delete success';
		}
		else {
			$message = 'Delete operation failed';
			// throw new Exception($message, 1);
		}
	}

	catch(Exception\BulkWriteException $e) {
		$writeResult = $e->getWriteResult();
		var_dump($writeResult);
	}

	return $message;
}
