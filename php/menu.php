<section id="sectionMenu" class="noselect">
   <div class="menu none mirror" data-help-hint="Options Menu"></div>
   <?php
      function __menuitems($attributes)
      {
         $html = 
         [
            '<div class="menuitems ' . $attributes["id"] .' ' . $attributes["classes"] .' hidden"' .
               (array_key_exists("hint", $attributes) ? (' data-help-hint="' . $attributes["hint"] .  '"') : '') . 
            '>'
         ];
         //$html = ['<div class="menuitems ' . $attributes["id"] .' ' . $attributes["classes"] .' hidden">'];
         $menuitems = $attributes["menuitems"];
         for ($index = 0; $index < count($menuitems); $index++)
         {
            $menuitem = $menuitems[$index];
            array_push($html, 
               '<div class="menuitem ' . $menuitem["id"] . ' ' . $menuitem["classes"] . '" data-menuitem="' . $menuitem["id"] . '"' .
                  (array_key_exists("hint", $menuitem) ? (' data-help-hint="' . $menuitem["hint"] .  '"') : '') . 
               '>' . 
                  $menuitem["html"] . 
               '</div>');
            if (isset($menuitem["menuitems"]))
            {
               __menuitems($menuitem["menuitems"]);
            }
         }
         array_push($html, '</div>');
         echo implode("", $html);
      }

      __menuitems(
         [
            "id" => "bars",
            "classes" => "",
            "menuitems" => 
               [
                  [
                     "id" => "search", 
                     "classes" => "bar",
                     "html" => "",
                     "hint" => "Search Menu"
                  ],
                  [
                     "id" => "speech", 
                     "classes" => "bar",
                     "html" => "",
                     "hint" => "Speech Menu"
                  ],
                  [
                     "id" => "notes", 
                     "classes" => "bar",
                     "html" => "",
                     "hint" => "Notes Menu"
                  ],
                  [
                     "id" => "portion", 
                     "classes" => "bar",
                     "html" => "",
                     "hint" => "Portion Menu"
                  ],
                  [
                     "id" => "verse", 
                     "classes" => "bar",
                     "html" => "",
                     "hint" => "Verse Menu"
                  ]
               ]
         ]);

      // The link menu is populated when you swipe up from the div.menu element ... so don't delete this seemingly empty/unused bit of code
      __menuitems(
         [
            "id" => "link",
            "classes" => "bar",
            "menuitems" => 
               [
               ]
         ]);

      __menuitems(
         [
            "id" => "search",
            "classes" => "bar",
            "menuitems" => 
               [
                  [
                     "id" => "mode", 
                     "classes" => "search setting",
                     "html" => '<select id="selectMode" class="mode" onchange="_library.search.mode(event)"></select>',
                     "hint" => "Search Mode Setting"
                  ],
                  [
                     "id" => "filter", 
                     "classes" => "search setting",
                     "html" => '<select id="selectFilter" class="filter" onchange="_library.search.filter.change(event)"></select>',
                     "hint" => "Search Filter Setting"
                  ],
                  [
                     "id" => "case", 
                     "classes" => "search setting",
                     "html" => '<select id="selectCase" class="case" onchange="_library.search.case(event)"></select>',
                     "hint" => "Search Case Sensitivity Setting"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "search",
                     "html" => "",
                     "hint" => "Search Settings"
                  ],
/*
                  [
                     "id" => "random", 
                     "classes" => "search",
                     "html" => "",
                     "hint" => "Random Verse"
                  ],
*/
                  [
                     "id" => "history", 
                     "classes" => "search",
                     "html" => '<select id="selectSearchHistory" class="search" onchange="_library.search.change(event)"></select>',
                     "hint" => "Search History"
                  ],
                  [
                     "id" => "help", 
                     "classes" => "search",
                     "html" => "",
                     "hint" => "Help"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "search",
                     "html" => "",
                     "hint" => "Search Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "speech",
            "classes" => "bar",
            "menuitems" => 
               [
                  [
                     "id" => "speaker", 
                     "classes" => "speech setting",
                     "html" => '<select id="selectSpeaker" class="speaker" onchange="_library.menu.speech.speaker(event)"></select>',
                     "hint" => "Speaker Setting"
                  ],
                  [
                     "id" => "continue", 
                     "classes" => "speech setting",
                     "html" => '<select id="selectContinue" class="continue" onchange="_library.menu.speech.continue(event)"></select>',
                     "hint" => "Speech Continue Playing Setting"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "speech",
                     "html" => "",
                     "hint" => "Speech Settings"
                  ],
                  [
                     "id" => "play", 
                     "classes" => "speech",
                     "html" => "",
                     "hint" => "Speech Play/Pause"
                  ],
                  [
                     "id" => "scroll", 
                     "classes" => "speech",
                     "html" => "",
                     "hint" => "Silent Scroll"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "speech",
                     "html" => "",
                     "hint" => "Speech Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "notes",
            "classes" => "bar",
            "menuitems" => 
               [
                  [
                     "id" => "strongs", 
                     "classes" => "notes setting",
                     "html" => "",
                     "hint" => "Strong's"
                  ],
                  [
                     "id" => "commentary-lock", 
                     "classes" => "notes setting off",
                     "html" => "",
                     "hint" => "Lock Commentary"
                  ],
                  [
                     "id" => "commentary-select", 
                     "classes" => "notes setting",
                     "html" => '<select id="selectCommentary" class="commentary" onchange="_library.notes.commentary.change(event)"></select>',
                     "hint" => "Select Commentary"
                  ],
                  [
                     "id" => "commentary", 
                     "classes" => "notes setting",
                     "html" => "",
                     "hint" => "Toggle Commentary"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "notes",
                     "html" => "",
                     "hint" => "Notes Settings"
                  ],
                  [
                     "id" => "write", 
                     "classes" => "notes",
                     "html" => "",
                     "hint" => "Write A Note"
                  ],
                  [
                     "id" => "history", 
                     "classes" => "notes",
                     "html" => '<select id="selectNotesHistory" class="notes" onchange="_library.notes.change(event)"></select>',
                     "hint" => "Chapter Notes List"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "notes",
                     "html" => "",
                     "hint" => "Notes Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "portion",
            "classes" => "bar",
            "menuitems" => 
               [
                  [
                     "id" => "date", 
                     "classes" => "portion",
                     "html" => '<input id="inputDatePortion" type="date" onchange="_library.readings.change(event)" placeholder="Date"/>',
                     "hint" => "Select Portion Date"
                  ],
                  [
                     "id" => "breakfast", 
                     "classes" => "portion setting",
                     "html" => "",
                     "hint" => "Breakfast"
                  ],
                  [
                     "id" => "lunch", 
                     "classes" => "portion setting",
                     "html" => "",
                     "hint" => "Lunch"
                  ],
                  [
                     "id" => "dinner", 
                     "classes" => "portion setting",
                     "html" => "",
                     "hint" => "Dinner"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "portion",
                     "html" => "",
                     "hint" => "Portion Settings"
                  ],
                  [
                     "id" => "history", 
                     "classes" => "portion",
                     "html" => '<select id="selectPortion" class="portion" onchange="_library.readings.select(event)"></select>',
                     "hint" => "Daily Readings"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "portion",
                     "html" => "",
                     "hint" => "Portion Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "verse",
            "classes" => "bar",
            "menuitems" => 
               [
                  [
                     "id" => "navigate-group-previous", 
                     "classes" => "verse group previous repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Group Previous"
                  ],
                  [
                     "id" => "navigate-group", 
                     "classes" => "verse navigation none",
                     "html" => "",
                     "hint" => "Navigate Group"
                  ],
                  [
                     "id" => "navigate-group-next", 
                     "classes" => "verse group next repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Group Next"
                  ],
                  [
                     "id" => "navigate-book-previous", 
                     "classes" => "verse book previous repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Book Previous"
                  ],
                  [
                     "id" => "navigate-book", 
                     "classes" => "verse navigation none",
                     "html" => "",
                     "hint" => "Navigate Book"
                  ],
                  [
                     "id" => "navigate-book-next", 
                     "classes" => "verse book next repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Book Next"
                  ],
                  [
                     "id" => "navigate-chapter-previous", 
                     "classes" => "verse chapter previous repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Chapter Previous"
                  ],
                  [
                     "id" => "navigate-chapter", 
                     "classes" => "verse navigation none",
                     "html" => "",
                     "hint" => "Navigate Chapter"
                  ],
                  [
                     "id" => "navigate-chapter-next", 
                     "classes" => "verse chapter next repeat navigation none",
                     "html" => "",
                     "hint" => "Navigate Chapter Next"
                  ],
                  /*[
                     "id" => "navigate", 
                     "classes" => "verse",
                     "html" => '<select id="selectNavigation" class="navigate" onchange="_library.verse.navigate.select(event)"></select>',
                     "hint" => "Navigate"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "verse",
                     "html" => "",
                     "hint" => "Verse Settings"
                  ],*/
                  [
                     "id" => "reading", 
                     "classes" => "verse repeat",
                     "html" => "",
                     "hint" => "Reading Bookmark"
                  ],
                  [
                     "id" => "copy", 
                     "classes" => "verse",
                     "html" => "",
                     "hint" => "Copy Verse(s)"
                  ],
                  [
                     "id" => "history1", 
                     "classes" => "verse setting",
                     "html" => '<select id="selectVerseHistory1" class="verse" onchange="_library.verse.change(event)"></select>',
                     "hint" => "Selected Verse History"
                  ],
                  [
                     "id" => "history2", 
                     "classes" => "verse setting",
                     "html" => '<select id="selectVerseHistory2" class="verse" onchange="_library.verse.change(event)"></select>',
                     "hint" => "Visited Chapter History"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "verse",
                     "html" => "",
                     "hint" => "Verse Settings"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "verse",
                     "html" => "",
                     "hint" => "Find Quote Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "options",
            "classes" => "",
            "menuitems" => 
               [
                  [
                     "id" => "refresh", 
                     "classes" => "option",
                     "html" => "",
                     "hint" => "Refresh App"
                  ],
                  [
                     "id" => "image setting", 
                     "classes" => "option",
                     "html" => "",
                     "hint" => "Summary Images"
                  ],
                  [
                     "id" => "lock setting", 
                     "classes" => "option", // This logic uses the "on" class
                     "html" => "",
                     "hint" => "Swipe Lock"
                  ],
                  [
                     "id" => "playOnSelect setting", 
                     "classes" => "option off",
                     "html" => "",
                     "hint" => "Speak Selected Verses"
                  ],
                  [
                     "id" => "inline setting", 
                     "classes" => "option off",
                     "html" => "",
                     "hint" => "Show Inline Notes"
                  ],
                  [
                     "id" => "highlight setting", 
                     "classes" => "option off",
                     "html" => "",
                     "hint" => "Show Highlights"
                  ],
                  [
                     "id" => "footer setting", 
                     "classes" => "option off",
                     "html" => "",
                     "hint" => "Show Footer"
                  ],
                  [
                     "id" => "settings", 
                     "classes" => "option",
                     "html" => "",
                     "hint" => "Options Settings"
                  ],
                  /* If I ever want to display the light theme, then uncomment this menu item
                  [
                     "id" => "theme", 
                     "classes" => "option off",
                     "html" => ""
                  ],*/
                  [
                     "id" => "help", 
                     "classes" => "option",
                     "html" => "",
                     "hint" => "Help"
                  ],
                  [
                     "id" => "find", 
                     "classes" => "option",
                     "html" => "",
                     "hint" => "Bottom Bar"
                  ]
               ]
         ]);

      __menuitems(
         [
            "id" => "parallel",
            "classes" => "none",
            "menuitems" => 
               [
                  [
                     "id" => "version", 
                     "classes" => "parallel",
                     "html" => '<select id="selectParallelVersion" class="parallel" onchange="_library.parallel.change(event)"></select>'
                  ]
               ]
         ]);
   ?>
</section>
