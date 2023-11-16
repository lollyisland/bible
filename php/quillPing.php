<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   echo (file_exists($path) ? "Success" : "");
?>