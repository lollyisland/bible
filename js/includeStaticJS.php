<?php
   function __includeStatic($filename, $version)
   {
      echo "<script src='js/" . $filename . ".js" . ($version ? ("?version=" . $version) : "") . "'></script>";
   }

   $include =
   [
      "readings",
      "bible",
      //"emoji",
      "paragraphs",
      "citations",
      "summary"
   ];
   $version =
   [
      "",
      "20230325_1405",
      //"",
      "20190529_1202",
      "20190519_0956",
      "20231015_0853"
   ];
   for ($index = 0; $index < count($include); $index++)
   {
      __includeStatic($include[$index], $version[$index]);
   }
?>
