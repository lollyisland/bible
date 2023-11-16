<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   if (file_exists($path))
   {
      echo file_get_contents($path);
   }
   else
   {
      file_put_contents("spasm.chasm", __DIR__);
   }
?>