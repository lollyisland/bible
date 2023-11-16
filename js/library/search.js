var ___search =
{
   search: // #_library.search  #search
   {
      init: function() // #_library.search.init  #search.init  #init
      {
         //function __initSelect(select, attributes, label, id)
         function __initSelect(select, attributes)
         {
            var optgroup = _library.common.__optgroup(
               {
                  label: attributes.label,
                  bold: false,
                  uppercase: true
               });
            select.appendChild(optgroup);
            for (var index = 0; index < attributes.options.length; index++)
            {
               if (attributes.options[index].group)
               {
                  var __optgroup = _library.common.__optgroup(
                     {
                        label: attributes.options[index].group,
                        bold: false,
                        uppercase: true
                     });
                  for (var __index = 0; __index < attributes.options[index].options.length; __index++)
                  {
                     var option = _library.common.__option(
                        {
                           value: attributes.options[index].options[__index].value,
                           id: "option" + attributes.id + attributes.options[index].options[__index].id,
                           label: attributes.options[index].options[__index].label
                        });
                     __optgroup.appendChild(option);
                  }
                  select.appendChild(__optgroup);
               }
               else
               {
                  var option = _library.common.__option(
                     {
                        value: attributes.options[index].value,
                        id: "option" + attributes.id + attributes.options[index].id,
                        label: attributes.options[index].label
                     });
                  optgroup.appendChild(option);
               }
            }
         }

         __initSelect(_var.select.filter, _const.SEARCH.filter);
         __initSelect(_var.select.mode, _const.SEARCH.mode);
         __initSelect(_var.select.case, _const.SEARCH.case);
      },

      filter:  // #_library.search.filter  #search.filter  #filter
      {
         get: function()
         {
            return _var.search.filter.label;
         },

         menu: function(showing)
         {
            var selector =
            {
               select: "select.filter"
            };

            if (showing)
            {
               if (_var.search.filter.parent)
               {
                  $(selector.select).appendTo(_var.search.filter.parent);
                  _var.search.filter.parent = null;
               }
            }
            else
            {
               if (!(_var.search.filter.parent))
               {
                  _var.search.filter.parent = $(selector.select).parent();
                  $(selector.select).appendTo("div.find[data-group=search]");
               }
            }
         },

         toggle: function(hide)  // #_library.search.filter.toggle  #search.filter.toggle  #filter.toggle  #toggle
         {
            var selector =
            {
               div: "div.filter-info",
               img: "div.find[data-group=search] img.search",
               select: "select.filter",
               input: "div.find input.search"
            };

            if (hide || _var.search.autocomplete.searchText)
            {
               $(selector.div).addClass("none");
               $(selector.img).addClass("hide-filter-info");
               _library.search.filter.menu(true);
            }
            else
            {
               var indexGroup = 0;
               var indexOption = 0;
               var filter;
               switch (_var.select.filter.value)
               {
                  case "BC":
                  case "BF":
                     indexGroup = 1;
                     break;
                  case "CC":
                  case "CF":
                     indexGroup = 2;
                     break;
               }
               var group = _const.SEARCH.filter.options[indexGroup];
               switch (_var.select.filter.value)
               {
                  case "OT":
                  case "BF":
                  case "CF":
                     indexOption = 1;
                     break;
                  case "NT":
                     indexOption = 2;
                     break;
               }
               var option = group.options[indexOption];
               _var.search.filter.label = option.label + (indexGroup ? (" " + group.group) : "");
               $(selector.div).html(_var.search.filter.label);
               if ($(selector.input).is(":focus"))
               {
                  $(selector.div).removeClass("none");
               }
               $(selector.img).removeClass("hide-filter-info");
               _library.search.filter.menu(false);
               _library.search.placeholder();
            }
         },

         change: function(__event) // #_library.search.filter.change  #search.filter.change  #filter.change  #change
         {
            if (__event)
            {
               var value = __event.target.value;

               $("div.heading div.filter > div > div.part").text(value.substr(0, 1));

               var __classes = ["C", "F"];
               $("div.arrow").removeClass(__classes.join(" "));
               var __class = value.substr(1, 1);
               if (__classes.indexOf(__class) != -1)
               {
                  $("div.arrow").addClass(__class);
               }

               _library.menu.close();
            }
            _library.search.filter.toggle();
         }
      },

      mode: function(__event) // #_library.search.mode  #search.mode  #mode
      {
         console.log(_var.select.mode.value);
         switch (_var.select.mode.value)
         {
            case "Advanced":
               break;
            case "Normal":
               break;
            case "List":
               break;
         }
      },

      case: function(__event) // #_library.search.case  #search.case  #case
      {
         var value = __event.target.value;

         __caseSensitive = _var.search.caseSensitive;
         _var.search.caseSensitive = ((value == "CaseSensitive") ? true : false);
         if (_var.search.caseSensitive != __caseSensitive)
         {
            _library.search.reset();
         }
      },

      reset: function() // #_library.search.reset  #search.reset  #reset
      {
         _var.tmp.searchTextLast = "";
      },

      find: function(value, arrowClick) // #_library.search.find  #search.find  #find
      {
         var selector = "div.find input.search";
         var group = $("main div.find").attr("data-group");
         switch (group)
         {
            case "verse":
               var quote = _library.common.__validateQuote(value);
               if (quote)
               {
                  _library.bible.showChapter(quote);
                  $(selector).val($("span.heading").ignore("span.range").text());
               }
               else
               {
                  _library.common.__error("Invalid Quote", _const.ZEBRA.auto_close);
               }
               break;
            case "search":
               value = value.trim();
               if (value)
               {
                  _var.search.autocomplete.typedText = value;
                  if (arrowClick)
                  {
                     value = _var.search.autocomplete.match;
                     $(selector).val(value);
                  }
                  _library.search.expression(value);
               }
               break;
         }

         // Don't blur on the PC, only on the phone
         if (!(_library.app.localhost()))
         {
            $(selector).blur();
         }
      },

      toggle: function(show, __number) // #_library.search.toggle  #search.toggle  #toggle
      {
         const __selector = 
         {
            find: "main div.find",
            search: "main div.find input.search",
            number: "main div.find input.number",
            speech: 
               [
                  [
                     "main div.find div.speech",
                     "main div.find img.close"
                  ],
                  "main div.find img.search"
               ],
            portion: 
               [
                  [
                     "main div.find div.portion",
                     "main div.find img.close"
                  ],
                  "main div.find img.search"
               ],
            notes: "main div.find input.search",
               /*[
                  [
                     "main div.find div.notes",
                     "main div.find img.close"
                  ],
                  "main div.find img.search"
               ]*/
         };
         const __color =
         {
            //default: "hsl(200, 12.5%, 20%)",
            default: "#000000",
            verse: "hsl(0, 67.2%, 49%)",
            portion: "hsl(30, 100%, 50%)",
            speech: "hsl(105, 67.2%, 49%)", // Have to put up with black text on status bar, else 35% lightness is required and is too dark a green
            notes: "hsl(43, 100%, 50%)",
            search: "hsl(199, 67.2%, 49%)"
         };

         __number = ((__number === undefined) ? false : __number);
         var hide = ((show === undefined) ? undefined : !show);
         var active = !($(__selector.find).hasClass("none"));
         var group = $(__selector.find).attr("data-group");

         if (show === false)
         {
            $(__selector.search).attr("data-save-" + group, $(__selector.search).val());
            $(__selector.search).val("");
         }
         else if (!hide)
         {
            $(__selector.search).val($(__selector.search).attr("data-save-" + group));
         }

         switch (group)
         {
            case "verse":
               if (active && show)
               {
                  $(__selector.search).blur();
                  $(__selector.search).focus();
                  $(__selector.search).select();
               }
               $(__selector.search).removeAttr("list");
               _library.search.placeholder();
               break;
            case "notes":
               _library.search.placeholder();
               break;
            case "speech":
            case "portion":
               $(__selector[group][0][0]).toggleClass("hidden", hide);
            case "search":
               $(__selector.search).removeAttr("list");
               _library.search.placeholder();
               break;
         }

         function __toggleFind()
         {
            $(__selector.find + ", #divFindSpacer").toggleClass("none", hide);
         }

         active = ((hide !== undefined) ? !hide : $(__selector.find).hasClass("none"));
         //if (hide)
         if (!active)
         {
            $(__selector.find + " input").blur();
            //window.setTimeout(__toggleFind, 100); // This delay prevents a large white block from appearing when the virtual keyboard disappears
            __toggleFind(); // Unfortunately the timeout was stuffing up the display when _library.search.toggle is called consecutively
         }
         else
         {
            __toggleFind();
         }

         //$("meta[name=theme-color]").attr("content", (active ? __color[group] : __color.default));
         $("meta[name=theme-color]").attr("content", __color[group]); // Show group color even if not active - so we know what to expect when swiping down on menu

         $("body").toggleClass("find-active", active);

         $(__selector.search).toggleClass("none", __number);
         $(__selector.number).toggleClass("none", !__number);
         if (__number)
         {
            var book = _library.common.__book(_var.bible.chapter);
            var chapterCount = _var.bible.chapterCount[book];

            // Refer to style.css - :focus::-webkit-input-placeholder
            var placeholder =
               [
                  "(" + _var.bible.books[book] + ")",
                  "1" + ((chapterCount > 1) ? ("-" + chapterCount) : "") + "   [ .verse ]"
               ];

            // This is the best solution since the first chapter of the entered book is shown from _library.search.checkBook before this function is called
            $(__selector.number).addClass("spud");
            $(__selector.number)[0].placeholder = placeholder[1];

            $(__selector.number).val("");

            $(__selector.number).blur();
            $(__selector.number).focus();
            $(__selector.number).select();
         }
         else
         {
            switch (group)
            {
               case "verse":
                  if (active)
                  {
                     if (_var.bible.verse.focus)
                     {
                        if (_var.select.navigate.value == "Quote")
                        {
                           $(__selector.search).blur();
                           $(__selector.search).focus();
                           $(__selector.search).select();
                        }
                     }
                     else
                     {
                        _var.bible.verse.focus = true;
                     }
                  }
                  break;
               case "search":
                  if (active)
                  {
                     if (_var.search.focus)
                     {
                        $(__selector.search).blur();
                        $(__selector.search).focus();
                        $(__selector.search).select();
                     }
                     else
                     {
                        _var.search.focus = true;
                     }
                  }
                  break;
               case "notes":
                  if (active)
                  {
                     if (_var.notes.focus)
                     {
                        $(__selector.search).blur();
                        $(__selector.search).focus();
                        $(__selector.search).select();
                     }
                     else
                     {
                        _var.notes.focus = true;
                     }
                  }
                  break;
            }
         }
      },

      __autocomplete: function(searchText)
      {
         if (_var.search.autocomplete.typedText)
         {
            searchText = _var.search.autocomplete.typedText;
            $("div.find input.search").val(searchText);
         }
         var extra = _var.search.autocomplete.match.substr(searchText.length);
         $("div.autocomplete").html("<span class='hidden'>" + extra.replace(/&bull;/g, ";llub&").reverse() + searchText + "</span><span>" + extra + "</span>");
         _library.search.filter.toggle(true);
      },

      autocomplete: function(searchText, reset, force)
      {
         function __reset()
         {
            $("div.autocomplete").html("");
            _var.search.autocomplete.typedText = "";
         }

         if (_var.search.autocomplete.enabled)
         {
            if (reset)
            {
               __reset();
            }
            else if ((_var.search.autocomplete.searchText != searchText) || force)
            {
               _var.search.autocomplete.searchText = searchText;
               if (searchText)
               {
                  _var.search.autocomplete.typedText = searchText;
                  _library.search.expression(searchText, undefined, true, undefined, true);
               }
               else
               {
                  __reset();
                  _library.search.filter.toggle();
               }
            }
         }
         else
         {
            __reset();
         }
      },

      expression: function(searchText, currentChapter, noAssignInput, __previous, __autocomplete)
      {
         function __raise(__exception)
         {
            console.log([__exception.name, __exception.message, __exception.stack]);
            if (!__autocomplete)
            {
               _library.common.__error(
                  ((__exception.name == "SyntaxError") ? "There's a Syntax Error in the Regular Expression used in the Search<br><br>" : "") + __exception.message);
            }
         }

         function __createListOptions()
         {
            if (_var.search.list.length)
            {
               // Initialise select list variables
               var __select = _var.select.list.element;
               $(__select).empty();
               _var.select.list.indexStart = 0;
               _var.select.list.options = [];
               if (_var.select.list.pageOptions.length == 0)
               {
                  _var.select.list.pageOptions =
                     [
                        _library.common.__option(
                           {
                              value: "previous",
                              id: "optionListPrevious",
                              label: "Previous"
                           }),
                        _library.common.__option(
                           {
                              value: "next",
                              id: "optionListNext",
                              label: "Next"
                           })
                     ];
               }

               // Append previous page option
               __select.appendChild(_var.select.list.pageOptions[0]);

               _var.select.list.verses = [];

               // Create all option elements in an array
               for (var indexList = 0; indexList < _var.search.list.length; indexList++)
               {
                  var verse = _var.bible.versesFlat[_var.search.list[indexList][0]];
                  var quote = verse.substr(0, verse.indexOf(" "));
                  verse = verse.substr(verse.indexOf(" ") + 1);
                  _var.select.list.verses.push(verse);
                  var match = verse.match(_var.search.r[0])[0];
                  _var.select.list.options.push(
                     _library.common.__option(
                        {
                           value: quote,
                           id: "optionList" + indexList,
                           label: _library.common.__link(quote, true) //+ " " + verse
                              //"..." + verse.substr(Math.max(0, verse.indexOf(match) - 10), 20 + match.length) + "..."
                        })
                     );
               }

               // Only show first page of option elements in select element
               for (var indexList = 0; indexList < Math.min(_const.SELECT.list.max, _var.search.list.length); indexList++)
               {
                  __select.appendChild(_var.select.list.options[indexList]);

                  var option = _library.common.__option(
                     {
                        value: "Verse" + indexList,
                        id: "optionListVerse" + indexList,
                        label: _var.select.list.verses[indexList],
                        disabled: true
                     });
                  __select.appendChild(option);
               }

               // Append next page option
               __select.appendChild(_var.select.list.pageOptions[1]);

               __select.selectedIndex = 1; // Since previous page option is first

               // Disable the previous and next options if the search results are no more than a page worth
               _var.select.list.pageOptions[0].disabled = 
               _var.select.list.pageOptions[1].disabled = 
                  (_var.search.list.length <= _const.SELECT.list.max);
            }
         }

         if (searchText)
         {
            searchText = searchText.trim();
         }

         var verseFound = false;
         var calcStatistics = false;
      //
      //       Get the search string
      //
         var inputTextSearch = $("div.find input.search")[0];
         if (searchText === undefined)
         {
            searchText = inputTextSearch.value.trim();
         }
         else if (!currentChapter && !noAssignInput)
         {
            inputTextSearch.value = searchText;
         }

         if (searchText == "")
         {
            _var.tmp.searchMode = false;
            return;
         }

         _var.tmp.searchMode = true;
         var filter = _var.select.filter.value;
         searchText = searchText.substr(searchText.indexOf(":") + 1);

         var searchNumber = searchText.replace(/(\,|^\s+|\s+$)/g, "").match(/^\d+$/g);
         if (searchNumber)
         {
            if (__autocomplete)
            {
               _library.search.autocomplete(undefined, true);
               return;
            }
            searchNumber = parseInt(searchNumber[0]);
            const __b = "\\b";
            searchText = __b + searchNumber.expand() + __b;
         }

         if (currentChapter)
         {
         }
         else if (!__autocomplete && ((searchText != _var.tmp.searchTextLast) || (filter != _var.tmp.filterLast) || _var.search.repeat))
         {
            _var.search.indexLast = -1;
            _var.tmp.searchTextLast = searchText;
            _var.tmp.filterLast = filter;
            if (!(_var.search.repeat))
            {
               _var.search.startingChapter = _var.bible.chapter;
               _var.search.startingBook = _library.common.__book(_var.search.startingChapter);
               switch (filter)
               {
                  case "BF":
                     _var.search.startingVerse = _var.bible.quotes.indexOf(_var.search.startingBook + "1:1");
                     break;
                  case "CF":
                     _var.search.startingVerse = _var.bible.quotes.indexOf(_var.search.startingChapter + ":1");
                     break;
               }
            }
            newTestament = false;
            calcStatistics = true;
            _var.search.repeat = false;
         }
         try
         {
            var pattern = searchText.replace(/ /g, "\\W* ");//"\\W* \\(?");
            if (__autocomplete)
            {
               pattern = "\\b" + pattern + "\\w*\\b(\\W?\\s\\W?\\b\\w+\\b){0,2}";
            }
            var flags = (_var.search.caseSensitive ? "" : "i") + "g";
            var r = [];
            r[_const.SEARCH.index.advanced] = new RegExp(pattern, flags);
            r[_const.SEARCH.index.normal] = [];
         }
         catch (__exception)
         {
            __raise(__exception);
            return;
         }

         var searchWords = (_var.tmp.normalSearch ? searchText.replace(/\\b/g, "") : searchText).split(" ");
         for (var index = 0; index < searchWords.length; index++)
         {
            try
            {
               r[_const.SEARCH.index.normal][index] = new RegExp("\\b" + searchWords[index] + "\\b", "ig");
            }
            catch (__exception)
            {
               if (_var.tmp.normalSearch)
               {
                  __raise(__exception);
                  return;
               }
            }
         }

         if (__autocomplete)
         {
            _var.search.autocomplete.match = "";
            var __newTestament = false;
            var startingChapter = _var.bible.chapter;
            var startingBook = _library.common.__book(startingChapter);
            switch (filter)
            {
               case "BF":
                  var startingVerse = _var.bible.quotes.indexOf(startingBook + "1:1");
                  break;
               case "CF":
                  var startingVerse = _var.bible.quotes.indexOf(startingChapter + ":1");
                  break;
            }
            //for (var index = 0; index < _var.bible.versesFlat.length; index++)
            for (var index = _var.search.indexLast + 1; index < _var.bible.versesFlat.length; index++)
            {
               if ((filter == "OT") && (_var.bible.versesFlat[index].substr(0, 4) == "Mat1"))
               {
                  break;
               }
               else if (filter == "NT")
               {
                  if (_var.bible.versesFlat[index].substr(0, 4) == "Mat1")
                  {
                     __newTestament = true;
                  }
                  else if (!__newTestament)
                  {
                     continue;
                  }
               }
               else if (filter == "BC")
               {
                  if (_var.bible.versesFlat[index].substr(0, startingBook.length) != startingBook)
                  {
                     continue;
                  }
               }
               else if (filter == "BF")
               {
                  if (index < startingVerse)
                  {
                     continue;
                  }
               }
               else if (filter == "CC")
               {
                  if (_var.bible.versesFlat[index].substr(0, startingChapter.length + 1) != (startingChapter + ":"))
                  {
                     continue;
                  }
               }
               else if (filter == "CF")
               {
                  if (index < startingVerse)
                  {
                     continue;
                  }
               }
               var searchMatch = _library.common.__getSearchMatch(r, searchWords, _var.bible.versesFlat[index]);
               if (searchMatch)
               {
                  var matchCount = (_var.tmp.normalSearch ? 1 : searchMatch.length);
                  _var.search.autocomplete.match = searchMatch[0][0]; // ### need to get the next match also, so when user hits spyglass we can offer the next autocomplete ###
                  _library.search.__autocomplete(searchText);
                  break;
               }
            }
            if (_var.search.autocomplete.match == "")
            {
               _library.search.autocomplete(undefined, true);
            }
            return;
         }

         _var.search.r = r;

         if (calcStatistics)
         {
            calcStatistics = false;
            _var.search.statistic.total = 0;
            _var.search.statistic.current = 0;
            var __newTestament = false;
            _var.search.list = [];
            _var.search.listIndex = -1;
            for (var index = 0; index < _var.bible.versesFlat.length; index++)
            {
               if ((filter == "OT") && (_var.bible.versesFlat[index].substr(0, 4) == "Mat1"))
               {
                  break;
               }
               else if (filter == "NT")
               {
                  if (_var.bible.versesFlat[index].substr(0, 4) == "Mat1")
                  {
                     __newTestament = true;
                  }
                  else if (!__newTestament)
                  {
                     continue;
                  }
               }
               else if (filter == "BC")
               {
                  if (_var.bible.versesFlat[index].substr(0, _var.search.startingBook.length) != _var.search.startingBook)
                  {
                     continue;
                  }
               }
               else if (filter == "BF")
               {
                  //if (index < _var.bible.quotes.indexOf(_var.search.startingBook + "1:1"))
                  if (index < _var.search.startingVerse)
                  {
                     continue;
                  }
               }
               else if (filter == "CC")
               {
                  if (_var.bible.versesFlat[index].substr(0, _var.search.startingChapter.length + 1) != (_var.search.startingChapter + ":"))
                  {
                     continue;
                  }
               }
               else if (filter == "CF")
               {
                  //if (index < _var.bible.quotes.indexOf(_var.search.startingChapter + ":1"))
                  if (index < _var.search.startingVerse)
                  {
                     continue;
                  }
               }
               var currentVersion = "KJV";//_translations[_indexTranslation];
               var __verse = ((currentVersion == "WEB") ? versesWEB[index] : ((currentVersion == "TAG") ? versesTAG[index] : _var.bible.versesFlat[index]));
               var searchMatch = _library.common.__getSearchMatch(r, searchWords, __verse);
               if (searchMatch)
               {
                  var matchCount = (_var.tmp.normalSearch ? 1 : searchMatch.length);
                  _var.search.statistic.total = _var.search.statistic.total + matchCount;
                  _var.search.list.push([index, matchCount]);
               }
            }
            _library.spark.update();
            _var.search.active = (_var.search.statistic.total > 0);

            __createListOptions();
         }
         var incrementValue = (__previous ? -1 : 1);
         for (var index = _var.search.indexLast + incrementValue; (index < _var.bible.versesFlat.length) && (index >= 0); index = index + incrementValue)
         {
            if ((filter == "OT") && (_var.bible.versesFlat[index].substr(0, 4) == "Mat1"))
            {
               break;
            }
            else if (filter == "NT")
            {
               if (_var.bible.versesFlat[index].substr(0, 4) == "Mat1")
               {
                  newTestament = true;
               }
               else if (!newTestament)
               {
                  continue;
               }
            }
            else if (filter == "BC")
            {
               if (_var.bible.versesFlat[index].substr(0, _var.search.startingBook.length) != _var.search.startingBook)
               {
                  continue;
               }
            }
            else if (filter == "BF")
            {
               //if (index < _var.bible.quotes.indexOf(_var.search.startingBook + "1:1"))
               if (index < _var.search.startingVerse)
               {
                  continue;
               }
            }
            else if (filter == "CC")
            {
               if (_var.bible.versesFlat[index].substr(0, _var.search.startingChapter.length + 1) != (_var.search.startingChapter + ":"))
               {
                  continue;
               }
            }
            else if (filter == "CF")
            {
               //if (index < _var.bible.quotes.indexOf(_var.search.startingChapter + ":1"))
               if (index < _var.search.startingVerse)
               {
                  continue;
               }
            }
            var __verse = "";
            if (false && searchText.match(/(H|G)\d+/))
            {
               __verse = extractVerse(verses[index], false, true);
            }
            else
            {
               var currentVersion = "KJV";//_translations[_indexTranslation];
               __verse = ((currentVersion == "WEB") ? versesWEB[index] : ((currentVersion == "TAG") ? versesTAG[index] : _var.bible.versesFlat[index]));
            }
            var searchMatch = _library.common.__getSearchMatch(r, searchWords, __verse);
            //_var.search.r = r;
            _var.search.searchWords = searchWords;
            if (searchMatch)
            {
               // Get search matches for every verse in the chapter
               var searchMatches = [];
               var chapter = _var.bible.quotes[index].substr(0, _var.bible.quotes[index].indexOf(":"));
               var indexFirstVerse = _var.bible.quotes.indexOf(chapter + ":1");
               for (var __index = indexFirstVerse; __index < _var.bible.quotes.length; __index++)
               {
                  var __chapter = _var.bible.quotes[__index].substr(0, _var.bible.quotes[__index].indexOf(":"));
                  if (chapter == __chapter)
                  {
                     searchMatches.push(_library.common.__getSearchMatch(r, searchWords, _var.bible.versesFlat[__index]));
                  }
                  else
                  {
                     break;
                  }
               }
               switch (_var.select.mode.value)
               {
                  case "Advanced":
                     _library.bible.showChapter(__verse.substr(0, __verse.indexOf(" ")), searchMatches, (_var.search.indexLast == -1));
                     break;
                  case "List":
                     //console.log([__verse.substr(0, __verse.indexOf(" ")), searchMatches, (_var.search.indexLast == -1)]);
                     //listVerses.push(__verse.substr(0, __verse.indexOf(" ")));
                     break;
               }

               _var.search.indexLast = index;

               verseFound = true;
               _var.search.statistic.range = 
                  ((searchMatch.length > 1) ? 
                     (__previous ? 
                        (_var.search.statistic.current - searchMatch.length) : 
                        (_var.search.statistic.current + 1)) : 
                     0);

               //_var.search.listIndex++;
               _var.search.listIndex += (__previous ? -1 : 1);

               _library.spark.statistic();
               _library.spark.update();
               _var.search.active = (_var.search.statistic.total > 0);
               break;
            }
         }

         if (__previous && (_var.search.listIndex <= 0) && !searchMatch)
         {
            _var.search.listIndex = _var.search.list.length;
            _var.search.indexLast = _var.bible.versesFlat.length;
         }

         // ### LATER ### updateSearchButton((verseFound ? "" : "rgba(255, 70, 70, 0.5)"));
         // Feedback for when swiping to search and user might forget that swiping is not to change chapter...
         if (!verseFound)
         {
            //$("input.search").fadeTo(500, 0.5).fadeTo(500, 1);
            $("body").addClass("noMatch");
            window.clearTimeout(_var.search.timeout);
            _var.search.timeout = window.setTimeout(
               function()
               {
                  $("body").removeClass("noMatch");
               }, _const.TIMEOUT.search);
         }
         // ... Feedback
      //
      //       Allow start over search if no more matches
      //
         if (!verseFound && (_var.search.indexLast != -1) && !__previous)
         {
            //_library.search.reset();
            _var.search.repeat = true;
         }

         if (_var.tmp.repeatActive)
         {
            _var.tmp.repeatActive = verseFound;
         }
         _var.tmp.repeatReady = true;

         if (verseFound)
         {
            if (_var.search.history.indexOf(searchText) == -1)
            {
               _var.search.history.push(searchText);
               _library.search.update(searchText);
            }

            if (!searchNumber)
            {
               _library.search.autocomplete(searchText, undefined, true); // Find the next autocomplete
            }
         }

         return verseFound;
      },

      next: function()  // #_library.search.next  #search.next  #next
      {
         _library.search.navigate();
      },

      previous: function()  // #_library.search.previous  #search.previous  #previous
      {
         _library.search.navigate(true);
      },

      navigate: function(__previous)  // #_library.search.navigate  #search.navigate  #navigate
      {
         function _refreshList()
         {
            var __select = _var.select.list.element;
            var offset = (__previous ? -1 : 1);
            var append = true;
            var indexStart = _var.select.list.indexStart;
            var selectedIndex = __select.selectedIndex;
            var indexQuote = ((selectedIndex + 1) * 0.5) + offset;
            if (indexQuote <= 0)
            {
               indexStart = Math.max(0, (indexStart - _const.SELECT.list.max));
               selectedIndex = (Math.min(_var.select.list.options.length, _const.SELECT.list.max) * 2) - 1;
            }
            else if (indexQuote > _var.select.list.options.length)
            {
               indexStart = 0;
               selectedIndex = 1;
            }
            /*
            else if (__previous && (__select.selectedIndex <= 1))
            {
               indexStart = Math.max(0, (_var.select.list.indexStart - _const.SELECT.list.max));
               selectedIndex = (Math.min(_var.select.list.options.length, _const.SELECT.list.max) * 2) - 1;
            }
            */
            else if (!__previous && (indexQuote > _const.SELECT.list.max))
            {
               indexStart = Math.min((_var.select.list.options.length - _const.SELECT.list.max),
                  (_var.select.list.indexStart + _const.SELECT.list.max));
               selectedIndex = 1;
            }
            else
            {
               append = false;
               selectedIndex = __select.selectedIndex + (offset * 2);
            }

            if (append)
            {
               $(__select).empty();
               __select.appendChild(_var.select.list.pageOptions[0]);
            }

            for (var indexList = indexStart; indexList < (indexStart + _const.SELECT.list.max); indexList++)
            {
               if (_var.select.list.options[indexList])
               {
                  if (indexList == indexStart)
                  {
                     _var.select.list.indexStart = indexStart;
                  }
                  if (append)
                  {
                     __select.appendChild(_var.select.list.options[indexList]);

                     var option = _library.common.__option(
                        {
                           value: "Verse" + indexList,
                           id: "optionListVerse" + indexList,
                           label: _var.select.list.verses[indexList],
                           disabled: true
                        });
                     __select.appendChild(option);
                  }
               }
            }
            if (append)
            {
               __select.appendChild(_var.select.list.pageOptions[1]);
            }
            __select.selectedIndex = selectedIndex;
         }

         var __input = $("main div.find input.search")[0];
         if (_library.search.expression(__input.value.trim(), undefined, undefined, __previous))
         {
            _refreshList();

            _var.search.listIndex = _var.select.list.indexStart + ((_var.select.list.element.selectedIndex - 1) / 2);

            _library.spark.statistic();
            _library.spark.update();
         }

         // Hide the virtual keyboard on the phone
         if (_php["device"] == "android")
         //if (navigator.userAgent.indexOf("Android") != -1)
         {
            //__input.blur();
         }
      },

      update: function(searchText) // #_library.search.update  #search.update  #update
      {
         $(_var.select.searchHistory).empty();
         if (_var.search.history.length)
         {
            for (var index = 0; index < _var.search.history.length; index++)
            {
               var option = _library.common.__option(
                  {
                     value: _var.search.history[index],
                     label: _var.search.history[index]
                  });
               _var.select.searchHistory.appendChild(option);
            }
            $(_var.select.searchHistory).val(searchText);
         }
      },

      change: function(__event) // #_library.search.change  #verse.search  #change
      {
         _library.search.select(__event.target.value);
      },

      select: function(value) // #_library.search.select  #search.select  #select
      {
         $("div.find input.search").val(value);
         $("div.find img:not(.group)").click();
      },

      checkBook: function(__input) // #_library.search.checkBook  #search.checkBook  #checkBook
      {
         var value = $(__input).val().trim();
         if (_var.bible.bookSearch.flat(2).toLowerCase().indexOf(value.toLowerCase()) != -1) // NB: Using new prototype.js function Array::toLowerCase
         {
            if (_var.bible.ambiguous.toLowerCase().indexOf(value.toLowerCase()) == -1)
            {
               var quote = _library.common.__validateQuote(value + " 1");
               _library.bible.showChapter(quote);
               _library.search.toggle(true, true); // Show input.number
            }
         }
      },

      focus: function(__event)
      {
         _library.search.autocomplete(__event.target.value, undefined, true);
         _library.search.placeholder();
      },

      blur: function(__event)
      {
         _library.search.autocomplete(undefined, true);
         _library.search.placeholder();
         //_library.search.filter.toggle(true);
         $("div.filter-info").addClass("none");
      },

      placeholder: function()
      {
         var selector = 
         {
            find: "main div.find",
            search: "main div.find input.search"
         };
         var __placeholder = "";
         switch ($(selector.find).attr("data-group"))
         {
            case "verse":
               //__placeholder = "Quote";
               __placeholder = $(_var.select.navigate).val();
               break;
            case "search":
               var __filter = (_library.search.filter.get() || "All");
               __placeholder = ("Search" + ($(selector.search).is(":focus") ? "" : $("<span/>").html(" &bull; " + __filter).text()));
               /*__placeholder = 
                  ("Search" + 
                     ($(selector.search).is(":focus") ?
                        ""
                           :
                        $("<span/>").html(" " + _library.search.filter.get()).text())
                  );*/
               break;
            case "notes":
               __placeholder = "Quick Note";
               break;
         }
         $(selector.search).attr("placeholder", __placeholder);
      }
   }
};