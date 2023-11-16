<?php
   include_once "library.php";

   header('Access-Control-Allow-Origin: *');

   file_put_contents(validatePath("options_" . $_POST["__user"] . ".txt"), serialize($_POST));

   echo "Success";
?>