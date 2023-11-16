var ___common =
{
   common:
   {
      __timestamp: function(__date) // #_library.common.__timestamp  #common.__timestamp  #__timestamp
      {
         __date = ((__date === undefined) ? (new Date()) : __date);
         return __date.getTime();
      },

      __book: function(chapter)
      {
         var book = (chapter ? chapter : _var.bible.chapter);
         while (!isNaN(book.substr(book.length - 1, 1)))
         {
            book = book.substr(0, book.length - 1);
         }
         return book;
      },

      // Return the first selected verse as a string, else ""
      __verse: function(selection)
      {
         var selection = (selection ? selection : _var.bible.verse.selection);
         var verse = (selection ? selection.match(/:\d+/)[0].substr(1) : "");
         return verse;
      },

      __chapterNo: function(chapter)
      {
         chapter = (chapter ? chapter : _var.bible.chapter);
         var book = _library.common.__book(chapter);
         var chapterNo = parseInt(chapter.substr(book.length));
         return chapterNo;
      },

      __getChapter: function(__quote, __long, __range) // Returns the chapter portion of the quote including the book
      {
         var chapter = ((__quote.indexOf(":") == -1) ? __quote : __quote.substr(0, __quote.indexOf(":")));
         if (__long)
         {
            var book = _library.common.__book(chapter);
            var __chapter = chapter.match(/\d+$/)[0];
//console.log([_var.bible.books[book], __chapter]);
            chapter = 
               "<span>" + _var.bible.books[book] + "</span> " +
               "<span>" + 
                  "<span class='chapter'>" + __chapter + "</span>" +
                  "<span class='verse'></span>" +
                  (__range ? ("<span class='range'>:1-" + _var.bible.verseCount + "</span>") : "") +
               "</span>";
         }
         return chapter;
      },

      __link: function(__quote, textOnly)
      {
         var indexComma = __quote.indexOf(",");
         var onclick = "_library.bible.showChapter(_library.common.__validateQuote(\"" + ((indexComma == -1) ? __quote : __quote.substr(0, indexComma)) + "\"))"; // __validateQuote enables verse ranges
         var verses = ((__quote.indexOf(":") == -1) ? "" : __quote.substr(__quote.indexOf(":")));
         var link = 
            "<span class='link' onclick='" + onclick + "'>" + 
               (_library.common.__getChapter(__quote, true, false) + verses) + 
            "</span>";
         return (textOnly ? $(link).text() : link);
      },

      __option: function(__attributes)
      {
         var option = document.createElement("option");
         option.setAttribute("value", __attributes.value);
         if (__attributes.id)
         {
            option.setAttribute("id", __attributes.id);
         }
         if (__attributes.disabled)
         {
            option.setAttribute("disabled", "disabled");
         }
         if (__attributes.shortLabel)
         {
            option.setAttribute("shortLabel", __attributes.shortLabel);
         }
         if (__attributes.label)
         {
            __attributes.label = __attributes.label
               .replace("[0]", " &#128220;")
               .replace("[1]", " &#10017;&#65039;")
               .replace("[2]", " &#127926;")
               .replace("[3]", " &#128331;")
               .replace("[4]", " &#128011;")
               .replace("[5]", " &#127806;")
               .replace("[6]", " &#10013;&#65039;")
               .replace("[7]", " &#9993;&#65039;")
               .replace("[8]", " &#128233;")
               .replace("[9]", " &#128081;");
         }
         option.innerHTML = (__attributes.icon ? (__attributes.icon + " ") : "") + (__attributes.label ? __attributes.label : "");
         return option;
      },

      __optgroup: function(__attributes)
      {
         var optgroup = document.createElement("optgroup");
         var label = _library.common.__spaced(__attributes.label, __attributes.uppercase, __attributes.spaced);
         if (__attributes.bold && __attributes.italic)
         {
            label = _library.common.__italic(label); // ### ???
         }
         else if (__attributes.bold)
         {
            label = _library.common.__bold(label);
         }
         else if (__attributes.italic)
         {
            label = _library.common.__italic(label);
         }
         var index = label.indexOf("#");
         label = (((index == -1) && __attributes.icon) ? ("# " + label) : label);
         //label = (__attributes.icon ? label.replace("#", (((index > 0) ? _const.UNICODE.NBSP : "") + __attributes.icon + _const.UNICODE.NBSP)) : label);
         label = label.replace("#", (__attributes.icon ? (((index > 0) ? _const.UNICODE.NBSP : "") + __attributes.icon + _const.UNICODE.NBSP) : _const.UNICODE.NBSP));
         label = label.replace(/\[\s?\d\s?\]/, "");
         $(optgroup).attr("label", label);
         if (__attributes.class)
         {
            $(optgroup).addClass(__attributes.class);
         }
         return optgroup;
      },

      __div: function(__attributes)
      {
         var div = document.createElement("div");
         div.innerHTML = (__attributes.html ? __attributes.html : "");
         if (__attributes.id)
         {
            div.setAttribute("id", __attributes.id);
         }
         if (__attributes.class)
         {
            $(div).addClass(__attributes.class);
         }
         return div;
      },

      __italic: function(label)
      {
         var offset = 0x1D434 - _const.KEYCODE.A;
         return _library.common.__offset(label, offset);
      },

      __bold: function(label)
      {
         var offset = 0x1D400 - _const.KEYCODE.A;
         return _library.common.__offset(label, offset);
      },

      __boldItalic: function(label)
      {
         var offset = 0x1D468 - _const.KEYCODE.A;
         return _library.common.__offset(label, offset);
      },

      __spaced: function(label, uppercase, spaced)
      {
         label = label.replace(/\s/g, _const.UNICODE.NBSP);
         if (uppercase)
         {
            label = label.toUpperCase();
         }
         return ((spaced === false) ? label : label.split("").join(" "));
      },

      __offset: function(label, offset)
      {
         var __array = label.split("");
         for (var index = 0; index < __array.length; index++)
         {
            var charCode = __array[index].charCodeAt(0);
            if ((charCode >= _const.KEYCODE.A) && (charCode <= _const.KEYCODE.Z))
            {
               __array[index] = _library.unicode.get(offset + charCode);
            }
         }
         label = __array.join("");
         return label;
      },

      __validateQuote: function(quote, ignoreCount)  // #_library.common.__validateQuote  #common.__validateQuote  #__validateQuote
      {
         if (quote && quote.match(/\d/) && !(quote.match(/[\{\(\[]/)))
         {
            quote = quote.trim();

            var book =
            {
               found: false,
               alias: "",
               aliases: []
            };
            for (var indexBook = 0; (!(book.found) && (indexBook < _var.bible.bookSearch.length)); indexBook++)
            {
               book.aliases = _var.bible.bookSearch[indexBook];
               for (var indexAlias = 0; (!(book.found) && (indexAlias < book.aliases.length)); indexAlias++)
               {
                  book.alias = book.aliases[indexAlias]
                  if (quote.substr(0, book.alias.length).match(new RegExp(book.alias, "i")))
                  {
                     if (quote.substr(book.alias.length).match(/^(\s|\d)/))
                     {
                        book.found = true;
                     }
                  }
               }
            }
            //if (book.found)
            //{
               quote = quote.replace(/(\d)(\s+|v|\.)(\d)/, "$1:$3");
               var indexDash = quote.indexOf("-");
               if (indexDash >= 0)
               {
                  var indexColon = quote.indexOf(":");
                  var verseFrom = quote.substr(indexColon + 1, indexDash - indexColon);
                  var verseTo = quote.substr(indexDash + 1);
                  if (!ignoreCount)
                  {
                     _var.bible.verse.count = parseInt(verseTo) - parseInt(verseFrom) + 1;
                  }
                  quote = quote.substr(0, indexDash);
               }
               if (book.found)
               {
                  return (book.aliases[0] + quote.substr(book.alias.length).replace(/^\s+|\s+$/g, ""));
               }
               else
               {
                  return _library.common.__book(_var.bible.chapter) + quote;
               }
            //}
         }
         return "";
      },

      __lastUpdated: function()
      {
         return "<img class='icon invert' src='images/time.svg' draggable='false'/> &nbsp; " + $("#divLastUpdated span:nth-of-type(2)").text() + "<br><br>" +
            "<img class='icon' src='images/date.png' draggable='false'/> &nbsp; " + $("#divLastUpdated span:nth-of-type(3)").text();
      },

      __getSearchMatch: function(r, searchWords, __verse)
      {
         var searchMatch = null;
         if (r && searchWords && __verse)
         {
            if (_var.tmp.normalSearch)
            {
               var mustMatch = true;
               var mustNotMatch = false;
               for (var indexWord = 0; indexWord < r[_const.SEARCH.index.normal].length; indexWord++)
               {
                  switch (searchWords[indexWord])
                  {
                     case "OR":
                        mustNotMatch = false;
                        continue;
                     case "NOT":
                        mustNotMatch = true;
                        continue;
                  }
                  var match = __verse.substr(__verse.indexOf(" ") + 1).match(r[_const.SEARCH.index.normal][indexWord]);
                  if (mustNotMatch)
                  {
                     if (match)
                     {
                        searchMatch = null;
                        break;
                     }
                  }
                  else
                  {
                     if (match)
                     {
                        if (!searchMatch)
                        {
                           searchMatch = match;
                        }
                        else
                        {
                           searchMatch.push.apply(searchMatch, match);
                        }
                     }
                     if (!match && (searchWords[indexWord + 1] != "OR") && mustMatch)
                     {
                        searchMatch = null;
                        break;
                     }
                     mustMatch = (!match || (searchWords[indexWord + 1] != "OR"));
                  }
                  mustNotMatch = false;
               }
            }
            else
            {
               searchMatch = [];
               while ((match = r[_const.SEARCH.index.advanced].exec(__verse.substr(__verse.indexOf(" ") + 1))) != null)
               {
                  searchMatch.push([match[0], match.index]);
               }
               if (!searchMatch.length)
               {
                  searchMatch = null;
               }
            }
         }
         return searchMatch;
      },

      __index: function(book)
      {
         return _var.bible.__books.indexOf(book);
      },

      __isNewTestament: function()
      {
         return (_var.bible.__books.indexOf(_library.common.__book()) >= _var.bible.__books.indexOf("Mat"));
      },

      __information: function(message)
      {
         _library.common.__message("information", message);
      },

      __error: function(message, auto_close)
      {
         auto_close = ((auto_close === undefined) ? false : auto_close);

         _library.common.__message("error", message, auto_close);
      },

      __message: function(type, message, auto_close, buttons)
      {
         function __default(__param, value)
         {
            return ((__param === undefined) ? value : __param);
         }

         auto_close = __default(auto_close, _const.ZEBRA.auto_close);
         buttons = __default(buttons, false);
/*
         _var.zebraDialog = new $.Zebra_Dialog(
            {
               type: type,
               message: message,
               auto_close: auto_close,
               buttons: false
            }
         );
*/
         _var.zebraDialog = new $.Zebra_Dialog(
            "<br>" +
            "<br>" +
            "<div style='text-align: center'>" + message + "</div>" +
            "<br>" +
            "<br>",
            {
               type: type,
               auto_close: auto_close,
               title: type.capitalize(),
               position: _const.ZEBRA.position,
               buttons: 
                  [
                     {
                        caption: "OK", 
                        callback: 
                           function() 
                           {
                              _var.zebraDialog = null; 
                           }
                     }
                  ],
               custom_class: "blueberry storm noicon"
            }
         );
      }
   }
};