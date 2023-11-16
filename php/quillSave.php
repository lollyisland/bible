<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   file_put_contents($path, $_POST["data"]);
?>