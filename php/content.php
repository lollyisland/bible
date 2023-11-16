<?php
   include_once "library.php";

   include "menu.php";
?>

<div id="textareaClipboard">Cool bananas</div>
<section class="editor none blur full">
   <?php
      $table = ["<table>"];
      array_push($table, 
         "<tr id='trEditorHeading'>",
            "<td id='tdEditorHeading'>",
            "</td>",
         "</tr>"
         );
      array_push($table, 
         "<tr>",
            "<td id='tdEditor'>",
               "<div id='divEditor' class='xxxspecial'></div>",
            "</td>",
         "</tr>"
         );
      array_push($table, "</table>");
      echo implode("", $table);
   ?>
</section>
<main class="hidden special">
   <div class="gap hidden"></div>
   <table>
      <tr id="trChapter">
         <td id="tdChapter">
            <div class="heading repeat">
               <span class="heading">Chapter Heading</span>
               <div id="divSubheading">
                  <span class="testament">Testament</span>
                  <span class="group">Group</span>
                  <div id="divSubheadingParallel">
                     <table>
                        <tr>
                           <td>King James Version (KJV)</td>
                           <td>World English Bible (WEB)</td>
                        </tr>
                     </table>
                  </div>
               </div>
               <select id="selectGroup" class="quote" onchange="_library.select.change.group(event)">
               </select>
               <select id="selectBook" class="quote" onchange="_library.select.change.book(event)">
               </select>
               <select id="selectChapter" class="quote" onchange="_library.select.change.chapter(event)">
                  <?php
                     for ($__chapter = 1; $__chapter <= 150; $__chapter++)
                     {
                        echo '<option value="' . $__chapter . '">' . $__chapter . '</option>';
                     }
                  ?>
               </select>
               <hr class="bridge clip top"/>
               <hr class="bridge clip bottom"/>
               <div class="filter icon">
                  <div>
                     <div class="part">A</div>
                     <div class="arrow"></div>
                  </div>
               </div>
               <div class="book icon"></div>
            </div>
            <div id="divHeadingSpacer" xxxclass="none"></div>
            <div class="indicator none"></div>
            
            <div id="divVersesContainer">
               <div class="verses column-no-wrap"></div> <!-- This only works if this div is display: inline-block and the next div is display: block -->
               <div class="parallel">Test This Baby!</div>
            </div>
            <div id="divNotesContainer" class="footer toggle">
               <hr class="white"/>
               <div>NOTES</div>
               <div class="notes"></div>
            </div>
            <div id="divParagraphsContainer" class="footer toggle">
               <hr class="white"/>
               <div>PARAGRAPHS</div>
               <div class="paragraphs"></div>
            </div>
            <div id="divCitationsContainer" class="footer toggle">
               <hr class="white"/>
               <div>CITATIONS</div>
               <div class="citations"></div>
            </div>
            <div id="divFindSpacer" class="none"></div>
         </td>
      </tr>
      <tr id="trLastUpdated" class="hidden" onclick="_library.app.refresh()">
         <td>
            <div id="divLastUpdated">
               <?php 
                  date_default_timezone_set("Australia/Sydney");
                  $files = tree(["index.php", "manifest_readings.json", "css", "js", "kjv", "php"]);
                  $filemtime = 0;
                  for ($index = 0; $index < count($files); $index++)
                  {
                     $path = validatePath($files[$index]);
                     $__filemtime = filemtime($path);
                     if ($__filemtime > $filemtime)
                     {
                        $filemtime = $__filemtime;
                     }
                  }
                  echo "<span id='spanLastUpdated'>Last Updated</span> &nbsp; " . 
                     "<img src='images/time.svg' draggable='false'/>" . 
                     " <span>" . date("g:i A", $filemtime) . "</span>" .
                     " &nbsp; " . 
                     "<img src='images/date.png' class='invert' draggable='false'/>" . 
                     " &nbsp;<span>" . date("l, j F Y", $filemtime) . "</span>";
               ?>
               <br>
               <br>
            </div>
         </td>
      </tr>
   </table>
   <div class="find none" data-group="search">
      <div class="portion hidden">
         <ul class="flex-container flex-start space-between">
            <li class="flex-item button noChangeColor" data-item="breakfast">
               <table>
                  <tr>
                     <td>
                        <img src="images/meal/spoon_knife.svg?version=1"/>
                     </td>
                     <td>
                        <span>Gen 17</span>
                     </td>
                  </tr>
               </table>
            </li>
            <li class="flex-item button noChangeColor" data-item="lunch">
               <table>
                  <tr>
                     <td>
                        <img src="images/meal/fork_spoon.svg?version=2"/>
                     </td>
                     <td>
                        <span>Psa 22</span>
                     </td>
                  </tr>
               </table>
            </li>
            <li class="flex-item button noChangeColor" data-item="dinner">
               <table>
                  <tr>
                     <td>
                        <img src="images/meal/knife_fork.svg?version=1"/>
                     </td>
                     <td>
                        <span>Mat 3</span>
                     </td>
                  </tr>
               </table>
            </li>
         </ul>
      </div>
      <!--<div class="notes hidden"></div>-->
      <div class="speech hidden">
         <ul class="flex-container flex-start space-between">
            <li class="flex-item button noChangeColor" onclick="_library.bible.audio.play(this)">
               <table>
                  <tr>
                     <td>
                        <img class="bigger" src="images/play01.svg"/>
                     </td>
                     <td>
                        <span>Audio</span>
                     </td>
                  </tr>
               </table>
            </li>
            <li xxxid="liCatalogName" class="flex-item button noChangeColor" onclick="_library.bible.audio.manual(this)">
               <table>
                  <tr>
                     <td>
                        <img src="images/scroll_normal.svg"/>
                     </td>
                     <td>
                        <span>Scroll</span>
                     </td>
                  </tr>
               </table>
            </li>
         </ul>
      </div>
      <input type="search" class="search" value="" placeholder="Quote" 
         autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
      <div class="autocomplete center noselect"></div>
      <div class="filter-info noselect"></div>
      <datalist id="datalistBooks"></datalist>
      <input class="number none" type="text" inputmode="numeric" value="" placeholder="Chapter"
         autocomplete="off" pattern="[0-9]{1,3}(\.[0-9]{1,3})?"/>
      <img class="noselect group" data-group="speech" src="images/speech03.svg"/>

      <img class="noselect group" data-group="search" src="images/search2.svg?version=2"/>
      <img class="noselect group second" data-group="search" src="images/path.svg?version=1"/>

      <img class="noselect group" data-group="verse" src="images/book.svg"/>
      <img class="noselect group second" data-group="verse" src="images/navigate2.svg?version=1"/>

      <img class="noselect group" data-group="portion" src="images/portion.svg?version=2"/>
      <img class="noselect group" data-group="notes" src="images/notes.svg"/>
      <img class="noselect search reverse repeat previous"/>
      <img class="noselect search repeat next"/>
      <img class="noselect close hidden" src="images/close.svg"/>

      <select id="selectList" onchange="_library.select.list.change(event)">
      </select>
      <select id="selectNavigation" onchange="_library.verse.navigate.change(event)">
      </select>

      <div id="divSparkContainer" class="spark none">
         <div id="divSpark">
            <table>
               <tr>
                  <td>
                     <div id="divStatCurrent" class="highlight3"></div>
                  </td>
                  <td>
                     <div id="divSparkLeft"></div>
                     <div id="divSparkRight"></div>
                  </td>
                  <td>
                     <div id="divStatTotal" class="highlight3"></div>
                  </td>
               </tr>
            </table>
         </div>
      </div>
      <div id="divSparkHighlight" class="spark none"></div>
   </div>
</main>

<div id="divCommentaryContainer" class="special">
   <hr class="bridge clip top"/>
   <div class="commentary"></div>
   <hr class="bridge clip bottom"/>
</div>

<div class="scroll-to-selection hidden"></div>

<div class="cover"></div>
<span id="spanTest" class="xxxnone"></span>
<audio id="audioSound" controls="controls" class="none"></audio>
<div class="none page-turn">
   <audio controls="controls" class="none"></audio>
   <audio controls="controls" class="none"></audio>
   <audio controls="controls" class="none"></audio>
   <audio controls="controls" class="none"></audio>
   <audio controls="controls" class="none"></audio>
</div>
<iframe id="iframeTrigger" src=""></iframe>

<div id="divHelp" class="hidden none">Help Hint</div>

<?php
   include "help.php";
?>

<div class="splash quote-disabled">
   <!--<img draggable="false" class="center hidden flare" src="images/flare2.png"/>-->
   <img draggable="false" class="center hidden book" src="images/favicon_optimised.png"/>
   <!--<img draggable="false" class="center hidden flare overlay" src="images/flare2.png"/>-->
   <!--<span class="center"><span>THE</span><br>HOLY<br>BIBLE</span>-->
   <span class="the-bible center noselect"><span>THE</span><br>BIBLE</span>

   <span class="refresh-button center"><img src="images/refresh.svg"/></span>

   <quote>
      <p>
         But thou, O Daniel, shut up the words, and seal <span class="u">the book</span> <span class="n">[The Bible]</span>,
         even to <span class="u">the time of the end</span> <span class="n">[now]</span>:
         many shall <span class="u">run to and fro</span> <span class="n">[flick/search quickly through The Bible]</span>,
         and knowledge shall be increased.
      </p>
      <p>
         Daniel 12:4
      </p>
   </quote>
</div>

<center><canvas class="lightning front noselect"></canvas></center>