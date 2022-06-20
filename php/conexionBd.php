<?php
include_once("config.bd.php");
function con(){
  $conn = new mysqli(host, user, password, Bd);
  return $conn;
}

function detectarErrores(){
  if ($this->con()->connect_error) {
    die("Connection failed: " . $this->con()->connect_error);
  }
}

function close(){
  $this->con()->close();
}
?>