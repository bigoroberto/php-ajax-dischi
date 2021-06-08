<?php
  require_once __DIR__ . '/data/db.php';

  header('Content-Type: application/jason');
  echo json_encode($database);
?>