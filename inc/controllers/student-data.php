<?php
session_start();

if(isset($_POST['submit'])) {
	if(isset($_POST['surname']) && isset($_POST['firstname']) && isset($_POST['middlename']) && isset($_POST['dob']) && isset($_POST['gender']) && isset($_POST['bloodGroup']) && isset($_POST['stateOfOrigin']) && isset($_POST['lga']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['faculty']) && isset($_POST['department']) && isset($_POST['entryType']) && isset($_POST['admissionYear']) && isset($_POST['regNo']) && isset($_POST['degreeProgram']) && isset($_POST['religion'])) {

			$middlename = $_POST['middlename'];
			$full_name = $_POST['surname'] . ' ' . $_POST['firstname'] . ' ' . $_POST['middlename'];
			$first_two_names = $_POST['surname'] . ' ' . $_POST['firstname'];
			$name = ($middlename === '') ? $first_two_names : $full_name;

			$studentData = array(
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
			$_SESSION['dataSaved'] = 'Student Information Saved';
			$_SESSION['studentData'] = $studentData;
			header('Location: /upload-student-photo');

	}
}