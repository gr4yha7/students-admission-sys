<?php
require_once '../../vendor/autoload.php';
include_once __DIR__ . '/db.php';

/**
*	@param $name
*	@param $email
*	@param $regNo
*	@param $department
*	@param $faculty
*	@param $data
*/


use MongoDB\Collection as Collection;
use MongoDB\Driver\Exception as Exception;

$db = 'admission';
$col = 'students';

$manager = $GLOBALS['manager'];
$collection = new Collection($manager, $db, $col, [
		'typeMap' => [
			'array' => 'array',
			'document' => 'array',
			'root' => 'array'
	],
]);
 	
function registerStudent($data) {
	global $collection;
		try {
			$options = [];
            $insertDoc = [
            	"photo" => $data['photo'],
              	"name" => $data['name'],
              	"regNo" => $data['regNo'],
              	"faculty" => $data['faculty'],
              	"department" => $data['department'],
              	"admissionYear" => $data['admissionYear'],
              	"entryType" => $data['entryType'],
              	"degreeProgram" => $data['degreeProgram'],
              	"dob" => $data['dob'],
              	"bloodGroup" => $data['bloodGroup'],
              	"stateOfOrigin" => $data['stateOfOrigin'],
              	"lga" => $data['lga'],
              	"email" => $data['email'],
              	"phone" => $data['phone'],
              	"gender" => $data['gender'],
              	"religion" => $data['religion']
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

function processPhoto($photoData) {
	$photoUrl = "data:jpeg;base64," . base64_encode($photoData);
	return $photoUrl;
}

function getAllStudents() {
	global $collection;
	try {
		$filter = [];
		$options = [ 'limit' => 20 ];
		$students = array();

		$documents = $collection->find($filter, $options);

		foreach($documents as $cursor) {
		 	$photo_data = $cursor['photo']->getData();
			$student = array(
				"photo" => processPhoto($photo_data),
	           	"name" => $cursor['name'],
	           	"regNo" => $cursor['regNo'],
	           	"faculty" => $cursor['faculty'],
	           	"department" => $cursor['department'],
	           	"admissionYear" => $cursor['admissionYear'],
	            "entryType" => $cursor['entryType'],
	             "degreeProgram" => $cursor['degreeProgram'],
	            "dob" => $cursor['dob'],
	              	"bloodGroup" => $cursor['bloodGroup'],
	              	"stateOfOrigin" => $cursor['stateOfOrigin'],
	              	"lga" => $cursor['lga'],
	              	"email" => $cursor['email'],
	              	"phone" => $cursor['phone'],
	              	"gender" => $cursor['gender'],
	              	"religion" => $cursor['religion']
			);
			array_push($students, $student);

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

	return $students;
}

function getStudentByName($name) {
		global $collection;
		try {
			$filter = [ 'name' => $name ];
			$options = [];

			$student = $collection->findOne($filter, $options);
			$photo_data = $student['photo']->getData();
			$student["photo"] = processPhoto($photo_data);
		}
		catch(Exception\InvalidArgumentException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}
		catch(Exception\RuntimeException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}

		return $student;
}

function getStudentByRegNo($regNo) {
	global $collection;
		try {
			$filter = [ 'regNo' => $regNo ];
			$options = [];

			$student = $collection->findOne($filter, $options);
			$photo_data = $student['photo']->getData();
			$student["photo"] = processPhoto($photo_data);
		}
		catch(Exception\InvalidArgumentException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}
		catch(Exception\RuntimeException $e) {
			$error = $e->getMessage();
			var_dump($error);
		}

		return $student;
}

function getStudentsByDepartment($department) {
	global $collection;
		try {
			$filter = [ 'department' => $department ];
			$options = [ 'limit' => 20 ];
			$students = array();

			$documents = $collection->find($filter, $options);
			foreach($documents as $cursor) {
				
				$student = array(
	              	"name" => $cursor['name'],
	              	"regNo" => $cursor['regNo'],
	              	"faculty" => $cursor['faculty'],
	              	"department" => $cursor['department'],
	              	"admissionYear" => $cursor['admissionYear'],
	              	"entryType" => $cursor['entryType'],
	              	"degreeProgram" => $cursor['degreeProgram'],
	              	"dob" => $cursor['dob'],
	              	"bloodGroup" => $cursor['bloodGroup'],
	              	"stateOfOrigin" => $cursor['stateOfOrigin'],
	              	"lga" => $cursor['lga'],
	              	"email" => $cursor['email'],
	              	"phone" => $cursor['phone'],
	              	"gender" => $cursor['gender'],
	              	"religion" => $cursor['religion']
				);
				array_push($students, $student);
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

		return $students;
	}

function getStudentsByFaculty($faculty) {
	global $collection;
		try {
			$filter = [ 'faculty' => $faculty ];
			$options = [ 'limit' => 20 ];
			$students = array();

			$documents = $collection->find($filter, $options);
			foreach($documents as $cursor) {
				
				$student = array(
	              	"name" => $cursor['name'],
	              	"regNo" => $cursor['regNo'],
	              	"faculty" => $cursor['faculty'],
	              	"department" => $cursor['department'],
	              	"admissionYear" => $cursor['admissionYear'],
	              	"entryType" => $cursor['entryType'],
	              	"degreeProgram" => $cursor['degreeProgram'],
	              	"dob" => $cursor['dob'],
	              	"bloodGroup" => $cursor['bloodGroup'],
	              	"stateOfOrigin" => $cursor['stateOfOrigin'],
	              	"lga" => $cursor['lga'],
	              	"email" => $cursor['email'],
	              	"phone" => $cursor['phone'],
	              	"gender" => $cursor['gender'],
	              	"religion" => $cursor['religion']
				);
				array_push($students, $student);
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

		return $students;
}

function editStudent($regNo, $data) {
	global $collection;
		try {
			$filter = ['regNo' => $regNo];
			$options = [];
			$update = [
				'$set' => [ 
					'name' => $data['name'],
					'regNo' => $data['regNo'],
					'faculty' => $data['faculty'],
					'department' => $data['department'],
	              	"admissionYear" => $data['admissionYear'],
		            "entryType" => $data['entryType'],
		            "degreeProgram" => $data['degreeProgram'],
		            "dob" => $data['dob'],
		            "bloodGroup" => $data['bloodGroup'],
		            "stateOfOrigin" => $data['stateOfOrigin'],
		            "lga" => $data['lga'],
		            "email" => $data['email'],
		            "phone" => $data['phone'],
		            "gender" => $data['gender'],
		            "religion" => $data['religion']
		        ]
			];

			$updateResult = $collection->updateOne($filter, $update, $options);

			if($updateResult->getMatchedCount() > 0) {
				if($updateResult->getModifiedCount() > 0) {
					$message = 'Update success';
				}
				else {
					$message = 'Update operation failed';
					
				}
			}
			else {
				$message = 'No such student found';
				// throw new Exception($message, 1);
				
			}
		}
		catch(Exception\BulkWriteException $e) {
			$writeResult = $e->getWriteResult();
			var_dump(expression)($writeResult);
		}

		return $message;
}

function removeStudentByRegNo($regNo) {
	global $collection;
		try {
			$filter = ['regNo' => $regNo];
			$options = [];

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

function removeStudentByName($name) {
	global $collection;
		try {
			$filter = ['name' => $name];
			$options = [];

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
