var ___bible =
{
   bible:  // #_library.bible  #bible
   {
      convertVerses: function()  // #_library.bible.convertVerses  #bible.convertVerses  #convertVerses
      {
         for (var index = 0; index < _var.bible.verses.length; index++)
         {
            _var.bible.versesFlat[index] = _library.bible.convertVerse(_var.bible.verses[index]);
            _var.bible.quotes[index] = _var.bible.versesFlat[index].substr(0, _var.bible.versesFlat[index].indexOf(" "));

            //_var.bible.versesAudioScript[index] = _library.bible.convertVerse(_var.bible.verses[index], true);
         }
         _event.load(_var.__event);
      },

      convertVerse: function(verse, audioScript)  // #_library.bible.convertVerse  #bible.convertVerse  #convertVerse
      {
         var __verse;

         if (verse instanceof Array)
         {
            __verse = verse[0];
         }
         else
         {
            __verse = verse;
         }

         // Remove Strong's
         __verse = __verse.replace(/\{\{\((H|G)\d+\)\}\}/g, "");
         __verse = __verse.replace(/\{\{(H|G)\d+\}\}/g, "");
         __verse = __verse.replace(/(\{|\})/g, "");

         // Remove study notes
         __verse = __verse.replace(/\|S\d+\|/g, "");

         // Remove red Jesus and blue God
         __verse = __verse.replace(/(\[|\])/g, "");

         // Remove em tags
         __verse = __verse.replace(/\<em\>/g, "");
         __verse = __verse.replace(/\<\/em\>/g, "");

         // Remove i tags
         __verse = __verse.replace(/\<i\>/g, "");
         __verse = __verse.replace(/\<\/i\>/g, "");

         // Remove subheading tags (eg. at start of Psalm)
         if (audioScript)
         {
            __verse = __verse.replace(/\<\<.*?\>\>/g, "");
         }
         else
         {
            __verse = __verse.replace(/\<\</g, "");
            __verse = __verse.replace(/\>\>/g, "");
         }

         return __verse;
      },

      showChapter: function(quote, searchMatches, force) // #_library.bible.showChapter  #bible.showChapter  #showChapter
      {
         _var.tmp.timing =
         {
            start: (new Date()).getTime(),
            section: 1,
            __log: [],
            log: function(id)
            {
               id = ((id === undefined) ? _var.tmp.timing.section++ : id);
               _var.tmp.timing.__log.push("showChapter:" + id + " - " + ((new Date()).getTime() - _var.tmp.timing.start) + " ms");
               return;
               console.log(_var.tmp.timing.__log.slice(-1));
            }
         };

         function __getHighlightMatch(expression, __verse)
         {
            var highlightMatch = [];
            var match;
            while ((match = expression.exec(__verse.substr(__verse.indexOf(" ") + 1))) != null)
            {
               highlightMatch.push([match[0], match.index]);
            }
            if (!highlightMatch.length)
            {
               highlightMatch = null;
            }
            return highlightMatch;
         }

         function __search()
         {
            if (searchMatches === undefined)
            {
               if (($("body").hasClass("find-active")) && ($("main div.find").attr("data-group") == "search"))
               {
                  searchMatches = [];
                  for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
                  {
                     searchMatches.push(_library.common.__getSearchMatch(_var.search.r, _var.search.searchWords, _var.bible.versesFlat[indexVerse + indexOffset]));
                  }
               }
            }
            if (searchMatches !== undefined)
            {
               for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
               {
                  var searchMatch = searchMatches[indexVerse];
                  if (searchMatch)
                  {
                     for (var indexSearch = 0; indexSearch < searchMatch.length; indexSearch++)
                     {
                        var segmentCharacter =
                        {
                           first: searchMatch[indexSearch][1] + 1,
                           last: (searchMatch[indexSearch][1] + searchMatch[indexSearch][0].length)
                        };
                        
                        var __number = indexVerse + 1;
                        var style = "p:nth-of-type(" + __number + ") x:nth-of-type(n+" + segmentCharacter.first + "):nth-of-type(-n+" + segmentCharacter.last + ")";
                        styles.search.styles.push(style);
                        if (styles.search.verses.indexOf(__number) == -1)
                        {
                           styles.search.verses.push(__number);
                        }
                     }
                  }
               }
            }
         }

         function __highlight()
         {
            var tag =
            {
               start: __expression.highlight[1],
               end: __expression.highlight[2]
            };

            for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
            {
               var __verse = verses[indexVerse];
               for (var indexHighlight = 0; indexHighlight < _var.highlight.highlight.length; indexHighlight++)
               {
                  var expression = _var.highlight.highlight[indexHighlight][_const.HIGHLIGHT.index.expression];
                  var style = _var.highlight.highlight[indexHighlight][_const.HIGHLIGHT.index.style];
                  var filter = _var.highlight.highlight[indexHighlight][_const.HIGHLIGHT.index.filter];
                  var __class = _var.highlight.highlight[indexHighlight][_const.HIGHLIGHT.index.class];

                  if (__class)
                  {
                     var ___debug = "Put a breakpoint here to debug __class"; // Go to line number in Sources ... Ctrl+O :<line number>:<column number>
                  }

                  var doHighlight = false;
                  if (typeof filter == "string")
                  {
                     switch (filter)
                     {
                        case _const.HIGHLIGHT.filter.all:
                           doHighlight = true;
                           break;
                        case _const.HIGHLIGHT.filter.oldTestament:
                           doHighlight = oldTestament;
                           break;
                        case _const.HIGHLIGHT.filter.newTestament:
                           doHighlight = !oldTestament;
                           break;
                     }
                  }
                  else // An array to define a quote or quotes
                  {
                     var indexFilterBook = _const.HIGHLIGHT.index.__filter.book;
                     // An array to define a quote
                     if (typeof filter[indexFilterBook] == "string")
                     {
                        doHighlight = _library.highlight.__checkHighlight(filter, expression, __verse);
                     }
                     // An array of arrays to define several quotes
                     else
                     {
                        for (var indexQuote = 0; indexQuote < filter.length; indexQuote++)
                        {
                           doHighlight = _library.highlight.__checkHighlight(filter[indexQuote], expression, __verse);
                           if (doHighlight)
                           {
                              break;
                           }
                        }
                     }
                  }
                  if (!doHighlight)
                  {
                     continue;
                  }

                  var highlightMatch = __getHighlightMatch(expression, _var.bible.versesFlat[indexOffset + indexVerse]);
                  if (highlightMatch)
                  {
                     for (var indexHighlightMatch = 0; indexHighlightMatch < highlightMatch.length; indexHighlightMatch++)
                     {
                        var segmentCharacter =
                        {
                           first: highlightMatch[indexHighlightMatch][1] + 1,
                           last: (highlightMatch[indexHighlightMatch][1] + highlightMatch[indexHighlightMatch][0].length)
                        };

                        var __number = indexVerse + 1;
                        var style = "p:nth-of-type(" + __number + ") x:nth-of-type(n+" + segmentCharacter.first + "):nth-of-type(-n+" + segmentCharacter.last + ")";
                        styles.highlight.styles.push(style);
                        if (styles.highlight.verses.indexOf(__number) == -1)
                        {
                           styles.highlight.verses.push(__number);
                        }

                        __characters = __verse.split("");
                        var countCharacter = 0;
                        var ignoreCharacter = false;
                        for (var indexCharacter = 0; indexCharacter < __characters.length; indexCharacter++)
                        {
                           var substr = 
                              ((indexCharacter > 0) ? __characters[indexCharacter - 1] : " ") + 
                              __characters[indexCharacter] + 
                              ((indexCharacter < (__characters.length - 1)) ? __characters[indexCharacter + 1] : " ");
                           switch (__characters[indexCharacter])
                           {
                              case "<":
                                 if ((substr[0] != "<") && (substr[2] != "<"))
                                 {
                                    ignoreCharacter = true;
                                 }
                                 break;
                              case ">":
                                 if ((substr[0] != ">") && (substr[2] != ">"))
                                 {
                                    ignoreCharacter = false;
                                 }
                                 break;
                              case "[":
                              case "]":
                                 break;
                              default:
                                 if (!ignoreCharacter)
                                 {
                                    countCharacter++;
                                    if (countCharacter == segmentCharacter.first)
                                    {
                                       var __tag = tag.start;
                                       if (__class)
                                       {
                                          __tag = __tag.replace(">", " class='" + __class + "'>");
                                       }
                                       __characters.splice(indexCharacter, 0, ...((__tag).split(""))); // ... = JavaScript "spread operator" - first time using it
                                       indexCharacter += __tag.length;
                                    }
                                    if (countCharacter == segmentCharacter.last)
                                    {
                                       __characters.splice(indexCharacter + 1, 0, ...((tag.end).split("")));
                                       indexCharacter += tag.end.length;
                                    }
                                 }
                                 break;
                           }
                        }
                        __verse = __characters.join("");
                     }
                  }
               }
               verses[indexVerse] = __verse;
               var ____verse = versesCopy[indexVerse];
               versesCopy[indexVerse] = ____verse.substr(0, ____verse.indexOf(" ") + 1) + __verse;
            }
         }

         function __setChapter(__quote)
         {
            var chapter = __quote.substr(0, __quote.indexOf(":"));
            var book = _library.common.__book(chapter);
            var number = chapter.match(/\d+$/)[0];

            $(_var.select.book).val(book);
            $(_var.select.chapter).val(number);
            $(_var.select.portion).val(chapter); // This will allow for no selection if there's no match below
            $(_var.select.portion).children().each(
               function(index, option)
               {
                  var portion = _var.bible.portion[index];
                  for (var indexChapter = 0; indexChapter < portion.portion.length; indexChapter++)
                  {
                     if (portion.portion[indexChapter] == chapter)
                     {
                        $(_var.select.portion).val(portion.portion[0]);
                        break;
                     }
                  }
               });

            _library.parameter.write();
         }

         function __getVerse(__quote, needle)
         {
            return parseInt(__quote.substr(__quote.indexOf(needle) + 1));
         }

         function __split(expression, strip)
         {
if (_var.bible.chapter == "Exo24")
{
   var __breakHere = true; // Search term: tables of stone
}
            var __styles = [];
            var __verses = [];
            for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
            {
               var __verse = verses[indexVerse].preg_split(expression);
               if (strip)
               {
                  strip.push(undefined);
                  for (var indexStrip = 0; indexStrip < strip.length; indexStrip++)
                  {
                     var indexSegment;
                     while ((indexSegment = __verse.indexOf(strip[indexStrip])) != -1)
                     {
                        __verse.splice(indexSegment, 1);
                     }
                  }
               }
               verses[indexVerse] = __verse.join("");
               if (!strip)
               {
                  var __strip = ["[[", "]]", "[", "]"];
                  for (var indexStrip = 0; indexStrip < __strip.length; indexStrip++)
                  {
                     for (var indexSegment = 0; indexSegment < __verse.length; indexSegment++)
                     {
                        __verse[indexSegment] = __verse[indexSegment].replace(__strip[indexStrip], "");
                     }
                  }
               }

               if (__verse.length > 1)
               {
                  var applyStyle =
                  {
                     first: false,
                     last: false
                  };
                  if ((__verse[0] == "") || (__verse[0] == 0)) // #InvalidEmptyStringMystery
                  {
                     __verse.shift();
                     applyStyle.first = true;
                  }
if ((_var.bible.chapter == "Exo24") && (indexVerse == 11))
{
   var __breakHere = true; // Search term: tables of stone
}
                  if ((__verse[__verse.length - 1] == "") || (__verse[__verse.length - 1] == 0)) // #InvalidEmptyStringMystery
                  {
                     __verse.pop();
                     applyStyle.last = true;
                  }
                  var totalCharacters = 0;
                  var specialCharacters = 
                  {
                     segment: 0,
                     total: 0
                  };
                  for (var indexSegment = 0; indexSegment < __verse.length; indexSegment++)
                  {
                     var segment = __verse[indexSegment];
                     var segmentCharacter =
                     {
                        first: 0,
                        last: 0
                     };
                     //specialCharacters.segment = ((segment.match(/\[|\]/g) || []).length);
                     specialCharacters.segment = (segment.length - (segment.replace(/\<.*?\>|[|]/g, "").length));
                     if (((indexSegment > 0) && (indexSegment < (__verse.length - 1))) || 
                        ((indexSegment == 0) && (applyStyle.first)) ||
                        ((indexSegment == (__verse.length - 1)) && (applyStyle.last)))
                     {
                        segmentCharacter.first = totalCharacters + 1 - specialCharacters.total;
                        segmentCharacter.last = totalCharacters + segment.length - specialCharacters.total - specialCharacters.segment;

                        var __number = indexVerse + 1;
                        var style = "p:nth-of-type(" + __number + ") x:nth-of-type(n+" + segmentCharacter.first + "):nth-of-type(-n+" + segmentCharacter.last + ")";
                        __styles.push(style);
                        if (__verses.indexOf(__number) == -1)
                        {
                           __verses.push(__number);
                        }

                        indexSegment++; // Can't have adjacent styles of the same type
                        if (indexSegment < __verse.length)
                        {
                           totalCharacters += __verse[indexSegment].length;
                        }
                     }

                     totalCharacters += segment.length;
                     specialCharacters.total += specialCharacters.segment;
                  }
               }
            }
            return { styles: __styles, verses: __verses };
         }

         function __italic()
         {
            return __split(__expression.italic[0]);
         }

         // Reference: https://www.biblegateway.com/passage/?search=Numbers%206&version=BRG
         //    Console: $("a.next-chapter").click()
         //
         // EditPlus Keystroke Recordings:
         //    Alt+1 - wrap selection in [[]]
         //    Alt+2 - go to start of next verse
         //    Alt+3 - no-wrap mode - wrap verse from cursor to end in [[]] and go to start of next verse
         function __godSpeak()
         {
            return __split(__expression.godSpeak[0], [__expression.godSpeak[1], __expression.godSpeak[2]]);
         }

         function __jesusSpeak()
         {
            return __split(__expression.jesusSpeak[0], [__expression.jesusSpeak[1], __expression.jesusSpeak[2]]);
         }

         function __subheading()
         {
            return __split(__expression.subheading[0], [__expression.subheading[1], __expression.subheading[2]]);
         }

         function __replace(verse)
         {
            return verse.
               replace(/\[\[/g, "<god>"). // Use regular expression because God speaks twice in the one verse in Genesis 15:5
               replace(/\]\]/g, "</god>").
               replace(/\[/g, "<jesus>"). // Use regular expression because Jesus speaks twice in the one verse about 20 times, eg Revelation 1:8
               replace(/\]/g, "</jesus>").
               replace(__expression.subheading[1], "<subheading>").
               replace(__expression.subheading[2], "</subheading>");
         }

         function __individualCharacters(__groups, __number)
         {
            var flag = false;
            for (var index = 0; index < __groups.length; index++)
            {
               flag = (flag || ((__groups[index].styles.length > 0) && (__groups[index].verses.indexOf(__number) != -1)));
               if (flag)
               {
                  break;
               }
            }
            return flag;
         }

         function __citation(__quote)
         {
            var cited = [];
            for (var indexCitation = 0; indexCitation < _var.bible.citations.length; indexCitation++)
            {
               var citation = _var.bible.citations[indexCitation];
               for (var indexCitationQuote = 0; indexCitationQuote < 2; indexCitationQuote++)
               {
                  var citationQuote = citation[indexCitationQuote];
                  if (__quote == citationQuote)
                  {
                     cited.push(citation);
                  }
                  else if (_library.common.__getChapter(__quote) == _library.common.__getChapter(citationQuote))
                  {
                     if (citationQuote.indexOf("-") != -1)
                     {
                        var verseRange =
                        {
                           first: __getVerse(citationQuote, ":"),
                           last: __getVerse(citationQuote, "-")
                        };
                        var verse = __getVerse(__quote, ":");
                        if ((verse >= verseRange.first) && (verse <= verseRange.last))
                        {
                           cited.push(citation);
                        }
                     }
                     else if (citationQuote.indexOf(":") == -1)
                     {
                        cited.push(citation);
                     }
                  }
               }
            }
            return cited;
         }

         function __testament(__quote)
         {
            var index = 
            {
               current: _library.common.__index(_library.common.__book()),
               testament:
               {
                  old: _library.common.__index("Ge"),
                  new: _library.common.__index("Mat")
               }
            };
            var testament = ((index.current < index.testament.new) ? "old" : "new");
            return testament;
         }

         function __group(__quote)
         {
            var index = 
            {
               current: _library.common.__index(_library.common.__book()),
               group: []
            };
            var books = [];
            $.each(_var.bible.groups,
               function(key, label)
               {
                  books.push([key, label]);
                  index.group.push(_library.common.__index(key));
               });
            var book = books[index.group.length - 1];
            for (var indexGroup = 1; indexGroup < index.group.length; indexGroup++)
            {
               if (index.current < index.group[indexGroup])
               {
                  book = books[indexGroup - 1];
                  break;
               }
            }
            _var.select.group.value = book[0];
            return book[1].replace(/\[\s?\d\s?\]/, "");
         }

         function __summary(__quote)
         {
            var quote =
            {
               book: _library.common.__book(),
               chapter: parseInt(_library.common.__getChapter(__quote).match(/\d+$/)[0]),
               verse: __getVerse(__quote, ":")
            };

            var summary = {};
            summary.book = _var.bible.summary[quote.book];
            if (summary.book)
            {
               summary.chapter = summary.book[quote.chapter - 1];
               if (summary.chapter)
               {
                  try
                  {
                     summary.verses = summary.chapter.match(/\d+/g).map(Number);
                  }
                  catch (__exception)
                  {
                     summary.verses = [1];
                  }
                  var indexVerse = -1;
                  if ((indexVerse = summary.verses.indexOf(quote.verse)) != -1)
                  {
                     summary.verse = summary.chapter.preg_split(/\d+/, undefined, {PREG_SPLIT_NO_EMPTY: true});
                     var div = document.createElement("div");
                     $(div).addClass("summary");// noselect");
                     /*if ((summary.verse[indexVerse].match(/\./g) || []).length == 1)
                     {
                        summary.verse[indexVerse] = summary.verse[indexVerse].replace(".", "");
                     }*/
                     var span = document.createElement("span");
                     $(span).html(summary.verse[indexVerse]);
                     $(div)[0].appendChild(span);
                     $("#tdChapter div.verses")[0].appendChild(div);
                  }
               }
            }
         }

         quote = ((quote === undefined) ? _var.bible.chapter : quote);

         _var.bookmark.hand.index = 1 - _var.bookmark.hand.index;
         _var.bookmark.hand.chapter[_var.bookmark.hand.index] = quote;

         var __expression =
         {
            highlight: [/<\/?highlight>/, "<highlight>", "</highlight>"],
            italic: [/<\/?em>/, "<em>", "</em>"],
            godSpeak: [/(\[\[)|(\]\])/, "[[", "]]"],
            jesusSpeak: [/\[|\]/, "[", "]"],
            subheading: [/(\<\<)|(\>\>)/, "<<", ">>"]
         };

         var highlight = (quote.indexOf(":") != -1);
         var verse = (highlight ? parseInt(quote.substr(quote.indexOf(":") + 1)) : 1);
         quote = quote + (highlight ? "" : ":1");
         var previousChapter = _var.bible.chapter;
         _var.bible.chapter = _library.common.__getChapter(quote);

         var visited =
         {
            book: _var.bible.books[_library.common.__book(_var.bible.chapter)],
            chapter: _var.bible.chapter.match(/\d+$/)[0]
         };
         var value = visited.book + " " + visited.chapter;
         if (_var.bible.verse.chapter.last != value)
         {
            var option = _library.common.__option(
               {
                  value: value,
                  label: value
               });
            _var.select.verseHistory[1].appendChild(option);
            $(_var.select.verseHistory[1]).val(value);
            _var.bible.verse.chapter.last = value;

            document.title = "The Bible ~ " + value;
            $("body").attr("data-chapter", value);
         }

         _library.bookmark.check();
         var verses = [];
         var quotes = [];
         var versesCopy = [];
         var index = _var.bible.quotes.indexOf(_var.bible.chapter + ":1");
         if (index == -1)
         {
            var book = _library.common.__book(_var.bible.chapter);
            var lastChapter = _var.bible.chapterCount[book];
            _var.bible.chapter = book + lastChapter;
            _library.bookmark.check();
            index = _var.bible.quotes.indexOf(_var.bible.chapter + ":1");
            quote = quote.replace(/\d+\:\d+/, lastChapter + ":1");
            highlight = false;
            if (index == -1)
            {
               return;
            }
            _var.bookmark.hand.chapter[_var.bookmark.hand.index] = _var.bible.chapter;
         }
         var refreshRequired = (force || (_var.bible.chapter != previousChapter));

         __setChapter(quote);

         var oldTestament = (__testament(quote) == "old");

         $("div.heading span.testament").html((oldTestament ? "Old" : "New") + " Testament &bull;&nbsp;");
         $("div.heading span.group").html(__group(quote));

         var styles =
         {
            search: { styles: [], verses: [] },
            highlight: { styles: [], verses: [] },
            italic: null,
            godSpeak: null,
            jesusSpeak: null,
            subheading: null,
            verses: null
         };

         var indexOffset = index;
         var indexSearchMatch = 0;
         do
         {
            var __verse = _var.bible.verses[index];
            var __number = parseInt(__verse.substr(_var.bible.chapter.length + 1, __verse.indexOf(" ") - _var.bible.chapter.length));

            verses.push(__verse.substr(__verse.indexOf(" ") + 1));
            quotes.push(_var.bible.quotes[index]);
            versesCopy.push(__verse);

            index++;
         } while ((index < _var.bible.quotes.length) && (_library.common.__getChapter(_var.bible.quotes[index]) == _var.bible.chapter));

         _var.bible.verseCount = verses.length;

         $("#tdChapter > div.heading > span.heading").html(_library.common.__getChapter(quote, true, true));

         if (refreshRequired)
         {
            __search();
            __highlight();
            styles.italic = __italic();
            styles.godSpeak = __godSpeak();
            styles.jesusSpeak = __jesusSpeak();
            styles.subheading = __subheading();

            styles.verses = [].
               concat(
                  styles.search.verses, 
                  styles.highlight.verses, 
                  styles.italic.verses, 
                  styles.godSpeak.verses, 
                  styles.jesusSpeak.verses, 
                  styles.subheading.verses
               ).unique(true);

            var extraSearchStyles = [];
            if (styles.search.styles.length)
            {
               var __extraSearchStyles = styles.search.styles.join(", ").replace(/(n\+)|(-n\+)/g, "");
               extraSearchStyles[0] = __extraSearchStyles.replace(/(\))(:nth-of-type\(\d+\))/g, "$1");
               extraSearchStyles[1] = __extraSearchStyles.replace(/(x:)(nth-of-type\(\d+\):)/g, "$1");
            }
            $("#styleDynamic").html(
               (styles.italic.styles.length ? (styles.italic.styles.join(", ") + "\n{ font-style: italic; }\n\n") : "") +
               (styles.highlight.styles.length ? (styles.highlight.styles.join(", ") + "\n{ border-bottom: var(--underline); }\n\n") : "") +
               (styles.godSpeak.styles.length ? (styles.godSpeak.styles.join(", ") + "\n{ color: var(--color-god-speak); }\n\n") : "") +
               (styles.jesusSpeak.styles.length ? (styles.jesusSpeak.styles.join(", ") + "\n{ color: var(--color-jesus-speak); }\n\n") : "") +
               (styles.subheading.styles.length ? (styles.subheading.styles.join(", ") + "\n{ opacity: 0.65; font-size: 0.85em; }\n\n") : "") +
               (styles.search.styles.length ?
                  (
                     [
                        [
                           styles.search.styles.join(", "), 
                           "{",
                              "background: hsla(0, 0%, 100%, 0.25);",
                              "margin: -2px 0px;",
                              "padding: 1px 0px;",
                              "border: 1px solid hsla(0, 0%, 100%, 0.5);",
                              "border-width: 1px 0px;",
                           "}"
                        ].join("\n"),

                        [
                           styles.search.styles.join(", ").replace(/p:nth-of-type/g, "p.selected:nth-of-type"), 
                           "{",
                              "background: hsla(0, 0%, 0%, 0.25);",
                           "}"
                        ].join("\n"),

                        [
                           extraSearchStyles[0],
                           "{",
                              "border-top-left-radius: 4px;",
                              "border-bottom-left-radius: 4px;",
                              "margin-left: -2px !important;",
                              "padding-left: 1px !important;",
                              "border-left: 1px solid rgba(255, 255, 255, 0.5) !important;",
                           "}"
                        ].join("\n"),

                        [
                           extraSearchStyles[1],
                           "{",
                              "border-top-right-radius: 4px;",
                              "border-bottom-right-radius: 4px;",
                              "margin-right: -2px !important;",
                              "padding-right: 1px !important;",
                              "border-right: 1px solid rgba(255, 255, 255, 0.5) !important;",
                           "}"
                        ].join("\n")
                     ].join("\n\n")
                  ) : "")
            );

            //$("#tdChapter > div.verses").html("");
            $("#tdChapter div.verses").html("");
            var paragraphsHTML = [];
            var citationsHTML = [];
            var citationGrammar = ["cited", "alluded to", "possibly alluded to"];
            var testamentGrammar = (oldTestament ? "in" : "from");
            for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
            {
               var p = document.createElement("p");
               var __number = parseInt(quotes[indexVerse].substr(quotes[indexVerse].indexOf(":") + 1));

               var paragraph = (_var.bible.paragraphs.indexOf(quotes[indexVerse]) != -1);
               if (paragraph)
               {
                  var paragraphCount = paragraphsHTML.length + 1;
                  var __html = 
                     "<div>" + 
                        _library.common.__link(quotes[indexVerse]) + 
                        " &nbsp; <span class='grammar'>" +
                           paragraphCount + (paragraphCount).ordinalIndicator() + " Paragraph" +
                        "</span> &nbsp; " +
                     "</div>";
                  paragraphsHTML.push(__html);
               }

               var cited = __citation(quotes[indexVerse]);
               for (var indexCitation = 0; indexCitation < cited.length; indexCitation++)
               {
                  var __html = 
                     "<div>" + 
                        _library.common.__link(cited[indexCitation][(oldTestament ? 1 : 0)]) + 
                        " &nbsp; <span class='grammar'>" +
                           citationGrammar[cited[indexCitation][2]] + " " + testamentGrammar +
                        "</span> &nbsp; " +
                        _library.common.__link(cited[indexCitation][(oldTestament ? 0 : 1)]) + 
                     "</div>";
                  if (citationsHTML.indexOf(__html) == -1)
                  {
                     citationsHTML.push(__html);
                  }
               }

               var __classes = 
               ([
                  "number", 
                  ((__number < 100) ? "before" : ""),
                  ((__number < 10) ? "after" : ""),
                  (paragraph ? "paragraph" : ""),
                  (cited.length ? "citation" : "")
               ]).join(" ");

               var __words =
                  ((_const.LAYOUT.showStyles && (styles.verses.indexOf(__number) != -1)) ? 
                     (__individualCharacters([styles.search], __number) ? 
                        verses[indexVerse].replace(/<\/?highlight.*?>/g, "").replace(/(.)/g, "<x>$1</x>") :
                        __replace(versesCopy[indexVerse].substr(versesCopy[indexVerse].indexOf(" ") + 1))
                     ) : 
                     verses[indexVerse]);

               $(p).html(
                  "<span class='" + __classes + "'>" + 
                     __number + (_const.LAYOUT.space ? "<span>&nbsp;</span>" : "") + 
                  "</span>" + 
                  "<span class='words'>" + 
                     __words +
                  "</span>");

               __summary(quotes[indexVerse]);
               //$("#tdChapter > div.verses")[0].appendChild(p);
               $("#tdChapter div.verses")[0].appendChild(p);
            }

            _var.bible.indexChapter = indexOffset;
            _library.parallel.load();

            _library.notes.list();

            $("#divParagraphsContainer > *").toggleClass("none", (paragraphsHTML.length == 0));
            $("div.paragraphs").html(paragraphsHTML.join(""));

            $("#divCitationsContainer > *").toggleClass("none", (citationsHTML.length == 0));
            $("div.citations").html(citationsHTML.join(""));

            _event.assignVerse();

            $("#selectChapter option").removeClass("none");
            $("#selectChapter option:nth-of-type(1n+" + (_var.bible.chapterCount[_var.select.book.value] + 1) + ")").addClass("none");

            _library.readings.check();
         }
         else
         {
            $(".selected").removeClass(_const.VERSE.class.join(" "));
         }

         if (highlight)
         {
            var count = _var.bible.verse.count; // Have to save original value
            for (var offset = 0; offset < count; offset++)
            {
               //var element = $("#tdChapter > div.verses > p:nth-of-type(" + (verse + offset) + ")")[0];
               var element = $("#tdChapter div.verses > p:nth-of-type(" + (verse + offset) + ")")[0];
               if (element)
               {
                  _var.main.ignore = true; // This prevents auto scroll showing the paragraphs and citations when the last verse in a chapter is highlighted
                  $(element).click();
                  if (offset == 0)
                  {
                     $("main").scrollTop(Math.max(0, element.offsetTop - ($("main").height() / 2)));
                     $("main").scroll();
                  }
               }
            }
            _var.bible.verse.count = 1;
         }
         else
         {
            _library.verse.set("");
            $("main").scrollTop(0);
         }

         if (refreshRequired)
         {
            _library.bible.audio.init();
         }

         _library.main.heading.resize();

         _library.notes.commentary.update();

         _event.resize(undefined, true);
      },

      note: function()  // #_library.bible.note  #bible.note  #note
      {
         $("div.verses p.note").removeClass("note");
         $("div.verses div.note").remove();

         var quote =
         {
            book: _library.common.__book(_var.bible.chapter),
            chapter: _var.bible.chapter.match(/\d+$/)[0],
            verse: -1
         };

         var notesHTML = [];

         _var.notes.history.empty();

         $.each(_var.notes.list,
            function(index, path)
            {
               var file = path.substr(path.lastIndexOf("/") + 1);
               var verse = 
               [
                  parseInt(file.replace(/(_.*)?\.note/, "")),
                  parseInt(file.replace(/(.*_)?(.*)\.note/, "$2"))
               ];
               $("div.verses span.number").eq(verse[0] - 1).parent().addClass("note");
               var heading =
               {
                  book: _var.bible.books[quote.book],
                  chapter: quote.chapter,
                  __verse:
                  {
                     first: verse[0],
                     last: ((verse[1] != verse[0]) ? verse[1] : undefined)
                  }
               };
               var range = (heading.__verse.first ? (":" + heading.__verse.first + (heading.__verse.last ? ("-" + heading.__verse.last) : "")) : "");
               var __heading = heading.book + " " + heading.chapter + range;
               if (_php.options.inline)
               {
                  var element = $("div.verses > p:nth-of-type(" + verse[0] + ")");
                  if (verse[0] == quote.verse)
                  {
                     element = $(element).prevUntil("div.verses > p").last();
                  }
                  quote.verse = verse[0];
                  var div = $("<div class='note' data-selection='" + __heading + "'></div>").insertBefore(element)[0];
                  $("<div class='inlineHeading'>Loading...</div>").prependTo(div);
                  _library.notes.read(path, div, verse[0] - 1, __heading);
               }

               _var.notes.history.push(heading.book + " " + heading.chapter + range);

               var __quote = _library.common.__validateQuote(heading.book + " " + heading.chapter) + range;
               var __html = 
                  "<div>" + 
                     _library.common.__link(__quote) + 
                  "</div>";
               notesHTML.push(__html);
            });

         _library.notes.update(_var.bible.verse.selection);

         $("#divNotesContainer > *").toggleClass("none", (notesHTML.length == 0));
         $("#divNotesContainer > div.notes").html(notesHTML.join(""));
      },

      createGroupOptions: function(selectGroup)  // #_library.bible.createGroupOptions  #bible.createGroupOptions  #createGroupOptions
      {
         _library.bible.createBookOptions(selectGroup, true);
      },

      createBookOptions: function(selectBook, groupsOnly)  // #_library.bible.createBookOptions  #bible.createBookOptions  #createBookOptions
      {
         function __testament(__id)
         {
            return _library.common.__optgroup(
            {
               label: __id + "#Testament",
               italic: false,
               uppercase: true,
               class: "testament"
            });
         }

         var optionGroupLabels = [];
         $.each(_var.bible.groups,
            function(key, label)
            {
               optionGroupLabels.push([key, label.replace(/ &bull;.*/, "").replace(/\s/g, "#")]);
            });
         var indexOptionGroup = 0;

         var testament = __testament(_const.ID.testament.old);
         selectBook.appendChild(testament);

         var optgroup = null;
         var datalist = $("#datalistBooks")[0];
         for (var index = 0; index < _var.bible.bookSearch.length; index++)
         {
            if (_var.bible.bookSearch[index][0] == "Mat")
            {
               testament = __testament(_const.ID.testament.new);
               selectBook.appendChild(testament);
            }
            if (optionGroupLabels[indexOptionGroup] && (_var.bible.bookSearch[index][0] == optionGroupLabels[indexOptionGroup][0]))
            {
               if (groupsOnly)
               {
                  var option = _library.common.__option(
                     {
                        value: _var.bible.bookSearch[index][0],
                        id: "optionGroup" + _var.bible.bookSearch[index][1].replace(/\s/g, ""),
                        label: optionGroupLabels[indexOptionGroup][1].replace(/#/g, _const.UNICODE.NBSP)
                     });
                  testament.appendChild(option);
               }
               else
               {
                  optgroup = _library.common.__optgroup(
                     {
                        label: optionGroupLabels[indexOptionGroup][1],
                        bold: false,
                        uppercase: ((optionGroupLabels[indexOptionGroup][3] === undefined) ? (!groupsOnly) : optionGroupLabels[indexOptionGroup][3])
                     });

                  selectBook.appendChild(optgroup);
               }
               indexOptionGroup++;
            }
            if (!groupsOnly)
            {
               var option = _library.common.__option(
                  {
                     value: _var.bible.bookSearch[index][0],
                     id: "option" + _var.bible.bookSearch[index][1].replace(/\s/g, ""),
                     label: _var.bible.bookSearch[index][1]
                  });
               optgroup.appendChild(option);

               option = _library.common.__option(
                  {
                     value: _var.bible.bookSearch[index][1] + " " // The space has two uses - 1. Space between book and chapter; 2. Show entire datalist by typing space
                  });
               datalist.appendChild(option);
            }
         }
      },

      group: function()  // #_library.bible.group  #bible.group  #group
      {
         var index =
         {
            current: _library.common.__index(_var.select.book.value),
            group: []
         };
         var books = [];
         $.each(_var.bible.groups,
            function(key, label)
            {
               books.push(key);
               index.group.push(_library.common.__index(key));
            });

         var book = "";
         switch (_var.touch.offset)
         {
            case 1:
               book = books[0];
               for (var indexGroup = 1; indexGroup < index.group.length; indexGroup++)
               {
                  if (index.current < index.group[indexGroup])
                  {
                     book = books[indexGroup];
                     break;
                  }
               }
               break;
            case -1:
               book = books[index.group.length - 1];
               for (var indexGroup = (index.group.length - 1); indexGroup >= 0; indexGroup--)
               {
                  if (index.current > index.group[indexGroup])
                  {
                     book = books[indexGroup];
                     break;
                  }
               }
               break;
            default:
               return;
               break;
         }
         if (book)
         {
            $(_var.select.book).val(book);
            _library.select.change.book();
         }
      },

      testament: function(id)  // #_library.bible.testament  #bible.testament  #testament
      {
         if (id === undefined)
         {
            var index = 
            {
               current: _library.common.__index(_var.select.book.value),
               testament:
               {
                  old: _library.common.__index("Ge"),
                  new: _library.common.__index("Mat")
               }
            };
            switch (_var.touch.offset)
            {
               case 1:
                  id = ((index.current < index.testament.new) ? _const.ID.testament.new : _const.ID.testament.old);
                  break;
               case -1:
                  if (index.current > index.testament.new)
                  {
                     id = _const.ID.testament.new;
                  }
                  else if (index.current > index.testament.old)
                  {
                     id = _const.ID.testament.old;
                  }
                  else
                  {
                     id = _const.ID.testament.new;
                  }
                  break;
               default:
                  return;
                  break;
            }
         }

         var book = "";
         switch (id)
         {
            case _const.ID.testament.old:
               book = "Ge";
               break;
            case _const.ID.testament.new:
               book = "Mat";
               break;
         }
         if (book)
         {
            $(_var.select.book).val(book);
            _library.select.change.book();
         }
      },

      audio:  // #_library.bible.audio  #bible.audio  #audio
      {
         init: function() // #_libary.bible.audio.init  #bible.audio.init  #audio.init  #init
         {
            var book = _library.common.__book(_var.bible.chapter);

            function __bookNo()
            {
               var bookNo = 1;
               for (var index = 0; index < _var.bible.bookSearch.length; index++)
               {
                 if (_var.bible.bookSearch[index][0] == book)
                  {
                     bookNo = index + 1;
                     break;
                  }
               }
               if (bookNo < 10)
               {
                  bookNo = "0" + bookNo;
               }
               return bookNo;
            }

            function __bookName()
            {
               var bookName = _var.bible.books[book];
               if (bookName.match(/Song of Solomon/i))
               {
                  bookName = "SOLOMON";
               }
               bookName = bookName.toUpperCase();
               for (var part = 1; part <= 3; part++)
               {
                  var search = part.toString();
                  if (bookName.match(search))
                  {
                     bookName = bookName.replace(search, ("I").repeat(part));
                     break;
                  }
               }
               return bookName;
            }

            var soundFile = escape(([__bookNo(), __bookName(), _library.common.__chapterNo().pad(3)]).join(" ") + ".MP3");
            if (soundFile != _var.bible.audio.soundFile)
            {
               _var.bible.audio.soundFile = soundFile;
               const alt = ($("select.speaker").val() == "MaxMcLean");
               if (alt)
               {
                  $("#iframeTrigger").attr({src: (_const.MACRODROID.prefix + "Read%20Bible%20Chapter?SoundFile=" + _var.bible.audio.soundFile)});
               }
               else
               {
                  //_var.bible.audio.audio.setAttribute("src", "https://www.lollyink.com/mp3/" + _var.bible.audio.soundFile);
                  _var.bible.audio.audio.setAttribute("src", "https://lollyisland.info/lollyink.com/mp3/" + _var.bible.audio.soundFile);
               }
               _library.bible.audio.reset();
               _library.bible.audio.animate(true);
               $("div.indicator").css({top: "0px"});
            }
         },

         play: function(element) // #_library.bible.audio.play  #bible.audio.play  #audio.play  #play
         {
            _library.bible.audio.highlightElement(element);
            if (_var.bible.audio.animating || (_var.bible.audio.playing && !(_var.bible.audio.audio.ended)))
            {
               _library.bible.audio.stop();
            }
            else
            {
               // Go to verse 1 of the current chapter when audio starts from beginning
               if ((_var.bible.audio.audio.currentTime == 0) || (_var.bible.audio.audio.currentTime >= _var.bible.audio.audio.duration))
               {
                  $("div.indicator").css({top: "0px"});
               }
               _library.bible.audio.animate();
               _library.bible.audio.set();
            }
         },

         stop: function() // #_library.bible.audio.stop  #bible.audio.stop  #audio.stop  #stop
         {
            _library.bible.audio.animate(true);
            _var.bible.audio.audio.pause();
            _library.bible.audio.reset();
         },

         animate: function(__stop, manual) // #_library.bible.audio.animate  #bible.audio.animate  #audio.animate  #animate
         {
            function __cleanup()
            {
               _var.bible.audio.animating = false;
            }

            var __selector = "div.indicator";
            if (__stop)
            {
               $(__selector).addClass("none");
               __cleanup();
               $(__selector).stop();
            }
            else if (!manual && isNaN(_var.bible.audio.audio.duration))
            {
               window.setTimeout(
                  function()
                  {
                     _library.bible.audio.animate();
                  }, _const.TIMEOUT.mediaLoading);
            }
            else
            {
               $(__selector).removeClass("none");
               _var.bible.audio.animating = true;
               var delay = 0;
               var scroll = {};
               if (manual)
               {
                  scroll.top = parseInt($("main")[0].scrollTop);
                  scroll.height = parseInt($("main")[0].scrollHeight);
                  $(__selector).css({top: scroll.top + "px"});
               }
               else
               {
                  var book = _var.bible.chapter.replace(/\d+$/, "");
                  var chapter = _var.bible.chapter.substr(book.length);
                  delay = ((_var.bible.audio.audio.currentTime == 0) ? (((chapter == 1) ? (10000 + ((book == "Mat") ? 2000 : 0)): 0) + 2000) : 0);
               }
               window.setTimeout(
                  function()
                  {
                     if (_var.bible.audio.animating)
                     {
                        var properties =
                        {
                           top: Math.max($("div.verses").height() + $("#divHeadingSpacer").height(), 0)
                        };
                        var duration = 
                           (manual ? 
                              ($("div.verses").text().replace(/\d/g, "").length * _const.SPEECH.rate.normal * ((scroll.height - scroll.top) / scroll.height)) : 
                              ((_var.bible.audio.audio.duration - _var.bible.audio.audio.currentTime) * 1000));
                        var easing = "linear";
                        var progress = 
                           function()
                           {
                              const SECONDS = 20;
                              var currentSecond = parseInt(_var.bible.audio.audio.currentTime);
                              if (manual || ((_var.bible.audio.currentSecond != currentSecond) && (currentSecond % SECONDS == 0))) // Scroll every n seconds
                              {
                                 _var.bible.audio.currentSecond = currentSecond;
                                 _library.bible.audio.locate(manual);
                              }
                           };
                        var complete = 
                           function()
                           {
                              //_var.bible.audio.animating = false;
                              __cleanup();
                              if (manual)
                              {
                                 _library.bible.audio.stop();
                              }
                           };

                        //$(__selector).stop().animate(properties, duration, easing, complete);
                        $(__selector)
                           .stop()
                           .animate(properties, 
                              {
                                 duration: duration,
                                 easing: easing,
                                 progress: progress,
                                 complete: complete
                              });
                     }
                  },
                  delay);
            }
         },

         set: function() // #_library.bible.audio.set  #bible.audio.set  #audio.set  #set
         {
            _library.bible.audio.__play(true);
         },

         reset: function() // #_library.bible.audio.reset  #bible.audio.reset  #audio.reset  #reset
         {
            _library.bible.audio.__play(false);
         },

         __play: function(playAudio) // #_library.bible.audio.__play  #bible.audio.__play  #audio.__play  #__play
         {
            if (playAudio)
            {
               _var.bible.audio.audio.play();
               _var.bible.audio.playing = true;
            }
            else
            {
               _var.bible.audio.playing = false;
            }
            _library.main.refresh();
         },

         manual: function(element) // #_library.bible.audio.manual  #bible.audio.manual  #audio.manual  #manual
         {
            _library.bible.audio.highlightElement(element);
            if (_var.bible.audio.animating)
            {
               _library.bible.audio.stop();
            }
            else
            {
               _library.bible.audio.animate(false, true);
            }
         },

         highlightElement: function(element)
         {
            if (element)
            {
               _var.bible.audio.button = element;
               $(_var.bible.audio.button).css({"background": "hsla(0, 0%, 100%, 0.25)"});
               window.setTimeout(
                  function()
                  {
                     $(_var.bible.audio.button).css({"background": "none"});
                  }, _const.TIMEOUT.button.highlight);
            }
         },

         locate: function(manual)
         {
            var duration = (manual ? 0 : (2 * 1000));
            $("main").stop().animate({scrollTop: Math.max(0, ($("div.indicator")[0].offsetTop - (manual ? 0 : 200)))}, 
               duration, "linear", 
               function()
               {
               });
         }
      }
   }
};