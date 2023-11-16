<?php
   include_once "library.php";

   $path = validatePath($_POST["path"]);
   switch ($_POST["method"])
   {
      case "list":
         if (!file_exists($path))
         {
            mkdir($path);
         }
         $list = glob($path . "*.note");
         echo json_encode($list);
         break;
      case "load":
         if (file_exists($path))
         {
            echo 
               "{\"note\": [" .
                  str_replace("}{", "},{", file_get_contents($path)) .
               "] }";
         }
         break;
      case "save":
         file_put_contents($path, $_POST["data"], LOCK_EX);
         break;
      case "add":
         file_put_contents($path, $_POST["data"], FILE_APPEND | LOCK_EX);
         break;
   }
?>