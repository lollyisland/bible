<?php
   include_once "library.php";

   const DELIMITER_LEFT = "MQLEFT";
   const DELIMITER_RIGHT = "MQRIGHT";

   setUserAgent();

   $path = validatePath($_POST["path"]);

   switch ($_POST["method"])
   {
      case "load":
         $site = $_POST["url"];
         $verse = $_POST["verse"];
         $all = ($_POST["all"] == "true");

         if (file_exists($path))
         {
            // Whole chapter
            if ($all)
            {
               $directory = dirname($path);
               //$files = [];
               foreach (scandir($directory) as $file)
               {
                  if (($file !== '.') && ($file !== '..'))
                  {
                     //$files[] = $file;
                     echo intval($file) . DELIMITER . file_get_contents($directory . "/" . $file) . DELIMITER;
                  }
               }
            }
            // Single verse
            else
            {
               echo file_get_contents($path);
            }
            break;
         }
//         else echo $site;

         $siteData = file_get_contents($site);
         $strongs = "";

         /*
         // Version 1
         $needle = '<div class="vheading">Strong\'s Concordance</div>';
         $start = strpos($siteData, $needle);
         if ($start === FALSE)
         {
            $start = strpos($siteData, '<span class="verse-' . $verse . '">');
            $siteData = substr($siteData, $start);
            $length = strpos($siteData, '</span>') + 7;
            $strongs = substr($siteData, 0, $length);
         }
         else
         {
            $siteData = substr($siteData, $start + strlen($needle));
            $length = strpos($siteData, '<div class="vheading2"');
            $strongs = substr($siteData, 0, $length);
         }
         */
         // Version 2
         $needle = '<div class="vheading">Strong\'s Concordance</div>';
         $start = strpos($siteData, $needle);
         if ($start === FALSE)
         {
            $needleStart = 'data-verse-id="' . $verse . '"';
            $needleEnd = '</div>';
            $start = strpos($siteData, $needleStart);
            if ($start !== FALSE)
            {
               $siteData = "<div " . substr($siteData, $start);
               $length = strpos($siteData, $needleEnd) + strlen($needleEnd);
               $strongs = substr($siteData, 0, $length);
            }
         }
         else
         {
            $siteData = substr($siteData, $start + strlen($needle));
            $length = strpos($siteData, '<div class="vheading2"');
            $strongs = substr($siteData, 0, $length);
         }

         echo DELIMITER_LEFT . $strongs . DELIMITER_RIGHT;

         break;
      case "save":
         file_put_contents($path, $_POST["data"], LOCK_EX);
         break;
   }
?>