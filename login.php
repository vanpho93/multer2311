<?php
  require('jwt.php');
  require('tojson.php');

  $token = array();
  $token['id'] = 10011;
  $token['name'] = 'Pho';
  
    if(isset($_GET['username']) && $_GET['password']) {
      $username = $_GET['username'];
      $password = $_GET['password'];
      if($username == 'pho' && $password == '123'){
       $jsonwebtoken = JWT::encode($token, 'secret_qqddfdfqqservdgfgger_key');
       echo JsonHelper::getJson('token', $jsonwebtoken);
      }
    } else{
      echo 'LOI';
    }
?>
