<?php
  
  use MongoDB\Driver\Manager as Manager;
  use MongoDB\Driver\Exception as Exception;
  use MongoDB\Collection as Collection;


  $user = 'admin';
  $password = 'root';
  $conn_str = 'mongodb://localhost:27017';

  $manager = new Manager($conn_str);
