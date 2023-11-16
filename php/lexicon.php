<?php
   include_once "library.php";

   const DELIMITER_LEFT = "MQLEFT";
   const DELIMITER_RIGHT = "MQRIGHT";

   setUserAgent();

   $site = $_POST["url"];
   $verse = $_POST["verse"];

   $siteData = file_get_contents($site);
   $lexicon = "";

   $needle = '<div class="vheading2">Thayer\'s Greek Lexicon</div>';
   $start = strpos($siteData, $needle);
   if ($start === FALSE)
   {
      $needle = '<div class="vheading2">Brown-Driver-Briggs</div>';
      $start = strpos($siteData, $needle);
   }
   if ($start !== FALSE)
   {
      $siteData = substr($siteData, $start + strlen($needle));
      $length = strpos($siteData, '<div class="vheading2"');
      $lexicon = substr($siteData, 0, $length);
   }

   echo DELIMITER_LEFT . $lexicon . DELIMITER_RIGHT;
?>