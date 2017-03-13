<?php
  require('jwt.php');
  
  if(isset($_GET['token'])){
      $token = $_GET['token'];
  }
  try {
    JWT::decode($token, 'secret_qqddfdfqqservdgfgger_key', true);
    echo 'LOGIN_SUCCESS';
  } catch (Exception $e) {
    echo $e;
  }
?>