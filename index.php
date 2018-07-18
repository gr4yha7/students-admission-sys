<?php
session_start();

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/controllers/db.php';

const TEMPLATES_DIR = __DIR__ . '/templates';

$loader = new Twig_Loader_Filesystem(TEMPLATES_DIR);
$twig = new Twig_Environment($loader, array(
  'cache' => false,
  'debug' => true,
  'strict_variables' => true
));

$twig->addExtension(new Twig_Extension_Debug());

$uri = $_SERVER['REQUEST_URI'];

switch ($uri) {
  case "/":
    // render index template - /
    echo $twig->render('index.html', array());
    break;

  case '/login':
    echo $twig->render('login.html', array(
      'email' => $_SESSION['email'],
      'password' => $_SESSION['password'],
      'loginError' => $_SESSION['loginError'],
      'signupSuccess' => $_SESSION['signupSuccess']
    ));
    break;

  case '/landing':
    if(!isset($_SESSION['email']) && !isset($_SESSION['email'])) {
      echo $twig->render('login.html', array());
      break;
    }
    else {
      echo $twig->render('landing.html', array());
      break;
    }

  case '/admin':
    if(!isset($_SESSION['admin'])) {
      echo $twig->render('admin-login.html', array());
      break;
    }
    else {
      echo $twig->render('dashboard.html', array());
      break;
    }
  
  case '/dashboard':
    echo $twig->render('dashboard.html', array(
      'success' => $_SESSION['success'],
      'failure' => $_SESSION['failure']
    ));
    break;

  case '/upload-student-photo':
    echo $twig->render('upload-student-photo.html', array(
      'dataSaved' => $_SESSION['dataSaved']
    ));
    break;
  
  default:
  // render all other templates, e.g /join.html
    $template = substr($uri, 1).'.html';
    echo $twig->render($template, array());
    break;
}

?>
