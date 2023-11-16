<?php
   include_once "library.php";

   const DELIMITER_LEFT = "MQLEFT";
   const DELIMITER_RIGHT = "MQRIGHT";

   setUserAgent();

   $site = $_POST["url"];

   $siteData = file_get_contents($site);
   $commentary = "";

   //$needle = '<div class="vheading">Matthew Henry\'s Commentary</div>';
   $needle = '<div class="vheading">';
   $start = strpos($siteData, $needle);
   if ($start !== FALSE)
   {
      $siteData = substr($siteData, $start + strlen($needle));
      $length = strpos($siteData, '<div id="botbox">');
      $commentary = substr($siteData, 0, $length);
   }

   echo DELIMITER_LEFT . $commentary . DELIMITER_RIGHT;
?>