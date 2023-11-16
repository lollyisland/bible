<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   file_put_contents($path, $_POST["data"] . PHP_EOL, FILE_APPEND | LOCK_EX);
?>