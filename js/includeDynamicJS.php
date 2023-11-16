<?php
   function __includeDynamic($filename, $uniqid)
   {
      echo "<script src='js/" . $filename . ".js" . "?random=" . $uniqid . "'></script>";
   }

   $include =
   [
      "prototype",
      "const",
      "var",
      "class",
      "event"
   ];
   $uniqid = uniqid();
   foreach ($include as $filename)
   {
      __includeDynamic($filename, $uniqid);
   }

   include "js/library/includeDynamicJSLibrary.php";
   __includeDynamic("library", $uniqid);
?>
