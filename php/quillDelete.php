<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   $pathinfo = pathinfo($path);
   if (($pathinfo["extension"] == "note") && file_exists($path))
   {
      unlink($path);
   }
?>