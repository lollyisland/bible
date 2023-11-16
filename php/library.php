<?php
   const DELIMITER = "MQDIVIDER";

   function console_log($data)
   {
      echo "<script>";
      echo "console.log(" . json_encode($data) . ")";
      echo "</script>";
   }

   function setUserAgent()
   {
      // Have to set the user_agent, otherwise cross domains can return a "403 forbidden" error on file_get_contents
      ini_set("user_agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36");
   }

   function validatePath($path)
   {
      if (!file_exists($path))
      {
         $path = "../" . $path;
      }
      return $path;
   }

   function tree($path, &$tree = array())
   {
      if (is_array($path))
      {
         foreach ($path as $key => $__path)
         {
            tree($__path, $tree);
         }
      }
      else if (is_dir($path))
      {
         $files = scandir($path);

         foreach ($files as $key => $file)
         {
            $__path = $path . "/" . $file;
            if (!is_dir($__path))
            {
               $tree[] = $__path;
            }
            else if (($file != ".") && ($file != ".."))
            {
               $tree[] = $__path;
               tree($__path, $tree);
            }
         }
      }
      else
      {
         $tree[] = $path;
      }
      return $tree;
   }
?>