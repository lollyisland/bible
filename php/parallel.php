<?php
   include_once "library.php";

   $bible = $_POST["bible"];
   $index = $_POST["index"];
   $count = $_POST["count"];

   $path = validatePath("bibles/" . $bible . ".data");

   if (file_exists($path))
   {
      $file = new SplFileObject($path);
      $file->setFlags(SplFileObject::DROP_NEW_LINE);
      $file->seek($index);
      $verses = [];
      for ($indexCount = 0; $indexCount < $count; $indexCount++)
      {
         array_push($verses, $file->current());
         $file->next();
      }
      echo json_encode($verses);
   }
   else
   {
      echo "Error: " . $bible . " Bible does not exist";
   }
?>