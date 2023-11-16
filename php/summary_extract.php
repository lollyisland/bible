<?php
   // summary_extract.php is used to independently extract summary headings from downloaded pages

   $__books =
      [
         "Ge",
         "Exo",
         "Lev",
         "Num",
         "Deu",
         "Josh",
         "Jdgs",
         "Ruth",
         "1Sm",
         "2Sm",
         "1Ki",
         "2Ki",
         "1Chr",
         "2Chr",
         "Ezra",
         "Neh",
         "Est",
         "Job",
         "Psa",
         "Prv",
         "Eccl",
         "SSol",
         "Isa",
         "Jer",
         "Lam",
         "Eze",
         "Dan",
         "Hos",
         "Joel",
         "Amos",
         "Obad",
         "Jonah",
         "Mic",
         "Nahum",
         "Hab",
         "Zep",
         "Hag",
         "Zec",
         "Mal",
         "Mat",
         "Mark",
         "Luke",
         "John",
         "Acts",
         "Rom",
         "1Cor",
         "2Cor",
         "Gal",
         "Eph",
         "Phi",
         "Col",
         "1Th",
         "2Th",
         "1Tim",
         "2Tim",
         "Titus",
         "Phmn",
         "Heb",
         "Jas",
         "1Pet",
         "2Pet",
         "1Jn",
         "2Jn",
         "3Jn",
         "Jude",
         "Rev"
      ];

   $chapterCount =
   [
      "Ge" => 50,
      "Exo" => 40,
      "Lev" => 27,
      "Num" => 36,
      "Deu" => 34,
      "Josh" => 24,
      "Jdgs" => 21,
      "Ruth" => 4,
      "1Sm" => 31,
      "2Sm" => 24,
      "1Ki" => 22,
      "2Ki" => 25,
      "1Chr" => 29,
      "2Chr" => 36,
      "Ezra" => 10,
      "Neh" => 13,
      "Est" => 10,
      "Job" => 42,
      "Psa" => 150,
      "Prv" => 31,
      "Eccl" => 12,
      "SSol" => 8,
      "Isa" => 66,
      "Jer" => 52,
      "Lam" => 5,
      "Eze" => 48,
      "Dan" => 12,
      "Hos" => 14,
      "Joel" => 3,
      "Amos" => 9,
      "Obad" => 1,
      "Jonah" => 4,
      "Mic" => 7,
      "Nahum" => 3,
      "Hab" => 3,
      "Zep" => 3,
      "Hag" => 2,
      "Zec" => 14,
      "Mal" => 4,
      "Mat" => 28,
      "Mark" => 16,
      "Luke" => 24,
      "John" => 21,
      "Acts" => 28,
      "Rom" => 16,
      "1Cor" => 16,
      "2Cor" => 13,
      "Gal" => 6,
      "Eph" => 6,
      "Phi" => 4,
      "Col" => 4,
      "1Th" => 5,
      "2Th" => 3,
      "1Tim" => 6,
      "2Tim" => 4,
      "Titus" => 3,
      "Phmn" => 1,
      "Heb" => 13,
      "Jas" => 5,
      "1Pet" => 5,
      "2Pet" => 3,
      "1Jn" => 5,
      "2Jn" => 1,
      "3Jn" => 1,
      "Jude" => 1,
      "Rev" => 22
   ];

   $extract = "";

   for ($indexBook = 3; $indexBook < count($__books); $indexBook++)
   {
      $parent = "summary/" . str_pad($indexBook + 1, 2, "0", STR_PAD_LEFT);

      $book = $__books[$indexBook];

      $extract = $extract . 
         '      "' . $__books[$indexBook] . '":' . PHP_EOL .
         '      [' . PHP_EOL;

      for ($chapter = 1; $chapter <= $chapterCount[$book]; $chapter++)
      {
         $path = $parent . "/" . str_pad($chapter, 3, "0", STR_PAD_LEFT) . ".html";
         $siteData = file_get_contents($path);

         $needleStart = "<p class=summary>";
         $needleEnd = "</p>";
         $start = strpos($siteData, $needleStart);
         if ($start !== FALSE)
         {
            $data = substr($siteData, $start + strlen($needleStart));
            $length = strpos($data, $needleEnd);
            $data = substr($data, 0, $length);

            $data = strip_tags($data);

            $data = preg_replace("/(\d+)/", " $1 ", $data);

            $extract = $extract . 
               '         "' . $data . '"' . (($chapter == $chapterCount[$book]) ? '' : ',') . PHP_EOL;
         }
         else
         {
            $extract = $extract . 
               '         "",' . PHP_EOL;
         }
      }

      $extract = $extract . 
         '      ],' . PHP_EOL;
   }

   $path = "summary_extract.js";

   file_put_contents($path, $extract);
?>