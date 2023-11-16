<?php
   $include =
   [
      "var",
      "common",
      "rules",
      "style",
      "menu",
      "highlight",
      "spark",
      "zebra",
      "quill",
      "help",
      "summary",
      "summaryRaw"
   ];
   $uniqid = uniqid();
   foreach ($include as $filename)
   {
      echo "<link href='css/" . $filename . ".css" . "?random=" . $uniqid . "' rel='stylesheet'/>";
   }
?>