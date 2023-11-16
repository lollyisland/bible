<?php
   $include =
   [
      "app",
      "bible",
      "bookmark",
      "clipboard",
      "common",
      "editor",
      //"emoji",
      //"header",
      "highlight",
      "main",
      "menu",
      "notes",
      "offline",
      "parallel",
      "parameter",
      "readings",
      "search",
      //"security",
      "select",
      "spark",
      "unicode",
      "verse"
   ];
   $uniqid = uniqid();
   foreach ($include as $filename)
   {
      echo "<script src='js/library/" . $filename . ".js" . "?random=" . $uniqid . "'></script>";
   }
?>