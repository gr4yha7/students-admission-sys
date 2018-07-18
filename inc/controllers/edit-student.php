<?php
session_start();

include_once __DIR__ . '/students.php';

if(isset($_POST['submit'])) {
	if(isset($_POST['surname']) && isset($_POST['firstname']) && isset($_POST['middlename']) && isset($_POST['dob']) && isset($_POST['gender']) && isset($_POST['bloodGroup']) && isset($_POST['stateOfOrigin']) && isset($_POST['lga']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['faculty']) && isset($_POST['department']) && isset($_POST['entryType']) && isset($_POST['admissionYear']) && isset($_POST['regNo']) && isset($_POST['degreeProgram']) && isset($_POST['religion']) && isset($_POST['paramRegNo'])) {

			$name = $_POST['surname'] . ' ' . $_POST['firstname'] . ' ' . $_POST['middlename'];
			$studentRegNo = $_POST['paramRegNo'];

			$updatedStudentData = array(
				"name" => $name,
				"regNo" => $_POST['regNo'],
	            "faculty" => $_POST['faculty'],
	            "department" => $_POST['department'],
	            "admissionYear" => $_POST['admissionYear'],
	           	"entryType" => $_POST['entryType'],
	           	"degreeProgram" => $_POST['degreeProgram'],
	           	"dob" => $_POST['dob'],
	           	"bloodGroup" => $_POST['bloodGroup'],
	            "stateOfOrigin" => $_POST['stateOfOrigin'],
	            "lga" => $_POST['lga'],
	            "email" => $_POST['email'],
	            "phone" => $_POST['phone'],
	            "gender" => $_POST['gender'],
	            "religion" => $_POST['religion']
			);

			$result = editStudent($studentRegNo, $updatedStudentData);
			if($result === 'Update success') {
				$_SESSION['success'] = 'Student Information Updated Successfully!!';
				header('Location: /dashboard');
			}
			else {
				$_SESSION['failure'] = $result;
				header('Location: /dashboard');
			}
	}
}