<?php
   // summary.php is used to independently download summary heading pages from the internet

   include_once "library.php";

   set_time_limit(600);

   const DELIMITER_LEFT = "MQLEFT";
   const DELIMITER_RIGHT = "MQRIGHT";

   setUserAgent();

   $siteBooks =
   [
      "Gen",
      "Exod",
      "Lev",
      "Num",
      "Deut",
      "Josh",
      "Judg",
      "Ruth",
      "1Sam",
      "2Sam",
      "1Kgs",
      "2Kgs",
      "1Chr",
      "2Chr",
      "Ezra",
      "Neh",
      "Esth",
      "Job",
      "Ps",
      "Prov",
      "Eccl",
      "Song",
      "Isa",
      "Jer",
      "Lam",
      "Ezek",
      "Dan",
      "Hos",
      "Joel",
      "Amos",
      "Obad",
      "Jonah",
      "Mic",
      "Nah",
      "Hab",
      "Zeph",
      "Hag",
      "Zech",
      "Mal",
      "Matt",
      "Mark",
      "Luke",
      "John",
      "Acts",
      "Rom",
      "1Cor",
      "2Cor",
      "Gal",
      "Eph",
      "Phil",
      "Col",
      "1Thess",
      "2Thess",
      "1Tim",
      "2Tim",
      "Titus",
      "Phlm",
      "Heb",
      "Jas",
      "1Pet",
      "2Pet",
      "1John",
      "2John",
      "3John",
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

   $keys = array_keys($chapterCount);

   //for ($books = 1; $books <= count($keys); $books++)
   for ($books = 1; $books <= 3; $books++)
   {
      $book = $keys[$books - 1];
      $indexBook = array_search($book, $keys);

      $parent = "summary/" . str_pad($indexBook + 1, 2, "0", STR_PAD_LEFT);
      if (!file_exists($parent))
      {
         mkdir($parent);
      }

      for ($chapter = 1; $chapter <= $chapterCount[$book]; $chapter++)
      {
         $site = "https://reformedstandards.com/bible/" . $siteBooks[$indexBook] . "/" . $chapter . "/";
         $siteData = file_get_contents($site);
         $path = $parent . "/" . str_pad($chapter, 3, "0", STR_PAD_LEFT) . ".html";
         file_put_contents($path, $siteData);
      }
   }
?>