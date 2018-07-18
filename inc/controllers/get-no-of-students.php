<?php

include_once __DIR__ . '/students.php';

$students = getAllStudents();
$count = 0;

foreach ($students as $student) {
	++$count;
}

echo json_encode($count);