<?php

include_once __DIR__ . '/students.php';

$students = getAllStudents();

echo json_encode($students);