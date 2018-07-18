<?php
session_start();

require_once '../../vendor/autoload.php';
include_once __DIR__ . '/students.php';

if(isset($_POST['upload'])) {
	if(isset($_FILES['passport'])) {
	
		$uploadedPhoto = $_FILES['passport'];

		$tmp_name = $uploadedPhoto['tmp_name'];
		$photo_name = $uploadedPhoto['name'];

		$photoSize = $uploadedPhoto['size'];
		$max_file_size = 2*1024*1024; //2MB

		if($photoSize > $max_file_size) {
			$upload_error = "File too large!!";
			header("Content-Type: application/json; charset=UTF-8");
			echo json_encode($upload_error);
			
		}
		else {
			$photo = new MongoDB\BSON\Binary(file_get_contents($tmp_name), MongoDB\BSON\Binary::TYPE_GENERIC);

			$data = $_SESSION['studentData'];
			$studentData = array(
				"photo" => $photo,
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
			);

			$existing_student = getStudentByRegNo($studentData['regNo']);
			if(isset($existing_student)) {
				header('Content-Type: application/json; charset=UTF-8');
				$err_msg = "Student already exist!!";
				echo json_encode($err_msg);
			}
			else {
				
				$result = registerStudent($studentData);
				if($result === 'Registration success') {
					$_SESSION['success'] = 'New student added successfully!!';
					header('Location: /dashboard');
				}
				elseif($result === 'Registration failed') {
					header('HTTP/1.1 500 Internal Server Error');
				}
				else {
					header('HTTP/1.1 400 Bad Request');
				}
			}
			

			
		}
	}
}


