<?php
   include_once "library.php";

   $title = "The Bible";

   $optionsConfig = 
   [
      ["parameter" => "inline"],
      ["parameter" => "highlight"],
      ["parameter" => "footer"],
      ["parameter" => "theme"],
      ["parameter" => "chapter"]
   ];
   $options = [];
   foreach ($optionsConfig as $key => $value)
   {
      $options[$key] = &${$value["parameter"]};
   }

   parse_str($_SERVER["QUERY_STRING"], $result);

   $user = $result["user"];
   $passcode = $result["passcode"];
   $device = ""; //$result["device"];

   $settings = array(&$user, &$passcode, &$device);

   $parameters = array_merge($settings, $options);
   for ($index = 0; $index < count($parameters); $index++)
   {
      if (!isset($parameters[$index])) 
      {
         $parameters[$index] = "";
      }
   }

   if (!$user)
   {
      exit("Missing query parameter - user"); 
   }
   if (!$passcode)
   {
      exit("Missing query parameter - passcode"); 
   }

   $filename = validatePath("options_" . $user . ".txt");
   if (file_exists($filename))
   {
      $optionsData = unserialize(file_get_contents($filename));
      for ($index = 0; $index < count($options); $index++)
      {
         // If the option is not set in the query string then get the value from the options file
         $parameter = $optionsConfig[$index]["parameter"];
         if (($options[$index] == "") && isset($optionsData[$parameter]))
         {
            $options[$index] = $optionsData[$parameter];
         }
      }
   }

   $users = ["johnny", "levy", "paul", "john", "jesaiah", "christina"];
   switch ($user)
   {
      case $users[0]:
         if ($passcode != "7145812644")
         {
            exit("Incorrect passcode"); 
         }
         break;
      case $users[5]:
         if ($passcode != "7452896473")
         {
            exit("Incorrect passcode"); 
         }
         break;
      default:
         exit("Unknown user"); 
         break;
   }

   if (!$device)
   {
      $device = "android";
      if (strpos($_SERVER["HTTP_USER_AGENT"], "Android") === FALSE)
      {
         $device = "desktop";
      }
   }

   //$filename = validatePath("../js/emoji/emoji.json");
   //$emoji = (file_exists($filename) ? file_get_contents($filename) : "");

   $class = 
   [
      "html" => [/*experiment, */$theme, "summary-images"],
      "body" => ["disable-pull-to-refresh hide-scroll-to-selection none"]
   ];
   if ($inline == "true")
   {
      array_push($class["html"], "inline");
   }
   if ($highlight == "true")
   {
      array_push($class["html"], "highlight");
   }
   if ($footer == "true")
   {
      array_push($class["html"], "footer");
   }

   //include validatePath("php/unicode.php");
?>