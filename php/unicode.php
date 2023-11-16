<?php
   $unicode =
   [
      "BULLET" => "2022",
      "NBSP" => "00A0",

      // Old Testament groups
      "TENT" => "26FA",
      "SWORDS" => "2694",
      "OWL" => "1F989",
      "BONE" => "1F9B4",
      "WHALE" => "1F40B",

      // New Testament groups
      "BREAD" => "1F956",
      "PRAY" => "1F64F",
      "HEADSCARF" => "1F9D5",
      "SCROLL" => "1F4DC",
      "COMET" => "2604",

      // Genesis to Revelation
      "GENESIS" => "1F313",
      "EXODUS" => "1F997"
   ];

   foreach ($unicode as $key => $value)
   {
      $unicode[$key] = html_entity_decode(("&#x" . $value . ";"), ENT_NOQUOTES, 'UTF-8');
   }

   //var_dump($unicode);
   //exit;
?>