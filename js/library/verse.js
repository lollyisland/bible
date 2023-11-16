var ___verse =
{
   verse: // #_library.verse  #verse
   {
      init: function()
      {
         _library.verse.navigate.init();
      },

      set: function(__verse)  // #_library.verse.set  #verse.set  #set
      {
         _var.bible.verse.selection = __verse;
         $(_var.select.notesHistory).val(__verse);
         if (_var.bible.verse.selection)
         {
            var quote =
            {
               book: _var.bible.books[_library.common.__book(_var.bible.chapter)],
               chapter: _var.bible.chapter.match(/\d+$/)[0],
               verse: _library.common.__verse()
            };

            /*
            // Version 1
            _var.study.url.strongs = 
               "https://www.biblestudytools.com/kjv/" + 
               quote.book.replace(/\s/g, "-").replace("Psalm", "Psalms") + "/" + 
               quote.chapter + "-" + 
               quote.verse + ".html";
            // Version 2
            _var.study.url.strongs = 
               "https://www.biblestudytools.com/kjv/" + 
               quote.book.replace(/\s/g, "-").replace("Psalm", "Psalms") + "/" + 
               quote.chapter + ".html";
            */
            // Version 3
            _var.study.url.strongs = 
               "https://www.biblestudytools.com/kjv/" + 
               quote.book.replace(/\s/g, "-").replace("Psalm", "Psalms").toLowerCase() + "/" + 
               quote.chapter + ".html";

            //_library.notes.strongs.update();

            _library.notes.commentary.scroll();
         }
         else
         {
            _library.verse.read(""); // This allows the user to have control to stop the MacroDroid trigger in the middle of speaking
         }
      },

      copy: function(manual)  // #_library.verse.copy  #verse.copy  #copy
      {
         var quote = _var.bible.verse.selection;
         if (quote)
         {
            function __getVerse(__quote, __verse)
            {
               var verse = _var.bible.versesFlat[_var.bible.quotes.indexOf(_library.common.__validateQuote(__quote, true))];
               verse = verse.substr(verse.indexOf(" ") + 1);
               return (" " + __verse + "  " + verse);
            }

            var text = [quote, _var.bible.verse.summary.summary + "."];//.replace(/[:;,]$/, ".")];
            var indexColon = quote.indexOf(":");
            var indexDash = quote.indexOf("-");
            if (indexDash >= 0)
            {
               var verseFrom = parseInt(quote.substr(indexColon + 1, indexDash - indexColon));
               var verseTo = parseInt(quote.substr(indexDash + 1));
               //_var.bible.verse.count = parseInt(verseTo) - parseInt(verseFrom) + 1;
               var chapter = quote.substr(0, indexColon + 1);
               for (var verse = verseFrom; verse <= verseTo; verse++)
               {
                  text.push(__getVerse(chapter + verse, verse));
               }
            }
            else
            {
               var verse = parseInt(quote.substr(indexColon + 1));
               text.push(__getVerse(quote, verse));
            }
            text[1] = ""; // Often a period or some text from the parallel bible appears in this position
            text = text.trim();
            _library.clipboard.copy(text.join("<br>"), _const.CLIPBOARD.type.html, manual); // This is the only one that works with carriage returns on Android
            //_library.clipboard.copy(text.join("\n"), _const.CLIPBOARD.type.html, manual);
            //_library.clipboard.copy(text.join("\n"), _const.CLIPBOARD.type.text, manual);

            window.setTimeout(
               function()
               {
                  if ($("div.verses > p." + _const.VERSE.class[4]).length == 0) // Don't read the verse if the user intends to select a range by double clicking
                  {
                     _library.verse.read(text.
                        join(" ").
                        replace(/\(|\)/g, ""). // Prevent MacroDroid from reading emoticons, eg ;) is read aloud as "winking face" in Ephesians 5:9
                        replace(/^(\d)/, function(match, p1, offset, string) { return (["First", "Second", "Third"])[parseInt(p1) - 1]; }).
                        replace(/(\s)(\d+)(\s)/g, "$1$3").
                        replace(/:(\d+)-(\d+)/g, " verses $1 to $2.").
                        replace(/:(\d+)/g, " verse $1."));
                     _var.bible.verse.summary.summary = "";
                  }
               }, _const.TIMEOUT.verse);
         }
      },

      read: function(selectedVerses)
      {
         if (_var.touch.playOnSelect || (selectedVerses == ""))
         {
            switch (_php.user)
            {
               case "johnny":
                  $("#iframeTrigger").attr({src: (_const.MACRODROID.prefix + "Read%20Selected%20Verses?SelectedVerses=" + selectedVerses)});
                  break;
               default:
                  console.log("No webhook trigger defined for user " + _php.user);
                  break;
            }
         }
      },

      clear: function()  // #_library.verse.clear  #verse.clear  #clear
      {
         $(_var.select.verseHistory[0]).empty();
         _var.bible.verse.history.empty();
         $(".selected").removeClass(_const.VERSE.class.join(" "));
         $("div.heading span.verse").text("");
         _library.verse.set("");
         _event.resize();
      },

      click: function(__event) // #_library.verse.click  #verse.click  #click
      {
         // Only the user will perform the delayed double click functionality, so we need to know if this click is generated from the app so there's no delay
         var __virtualClick = (__event.screenX === undefined);

         const CLICK =
         {
            single: _library.verse.__click,
            double: _library.verse.__doubleClick
         };
         if (__virtualClick || _var.bible.verse.selection)
         {
            CLICK.single(__event);
         }
         else
         {
            if (_var.bible.verse.timeout == undefined)
            {
               _var.bible.verse.timeout = window.setTimeout(
                  function()
                  {
                     _var.bible.verse.timeout = undefined;
                     CLICK.single(__event);
                  }, _const.TIMEOUT.verse);
            }
            else
            {
               window.clearTimeout(_var.bible.verse.timeout);
               _var.bible.verse.timeout = undefined;
               CLICK.double(__event);
            }
         }
      },

      __doubleClick: function(__event) // #_library.verse.__doubleClick  #verse.__doubleClick  #__doubleClick
      {
         var p = __event.currentTarget;

         const __class = _const.VERSE.class[4];
         const __selector = "div.verses > p";

         _library.verse.__click(__event);
         $(__selector).removeClass(__class);
         $(p).addClass(__class);
      },

      __click: function(__event) // #_library.verse.__click  #verse.__click  #__click
      {
         var p = __event.currentTarget;

         const __class = _const.VERSE.class;
         const __selected = $(p).hasClass(__class[0]);
         const __selector = ["." + __class[0], "span.number"];

         //var __range = ($(p).prev().hasClass(__class[0]) || $(p).next().hasClass(__class[0]));
         var __range = 
            (
               $(p).prevAll("p").eq(0).hasClass(__class[0]) || 
               $(p).nextAll("p").eq(0).hasClass(__class[0]) ||
               $(p).siblings((["p", __class[0], __class[4]]).join(".")).length
            );
         var verses = "";

         if (__selected && !($(p).hasClass(__class[1]) && ($(p).hasClass(__class[2]) || $(p).hasClass(__class[3]))))
         {
            $(__selector[0]).removeClass(__class.join(" "));
         }
         else
         {
            if (__range)
            {
               $(__selector[0]).addClass(__class[1]);
               if (__selected)
               {
                  $(p).removeClass(__class.join(" "));
               }
               else
               {
                  $(p).addClass(__class.slice(0, 2).join(" "));
                  $(__selector[0]).first().nextUntil(__selector[0]).addClass(__class.slice(0, 2).join(" "));
               }
               $(__selector[0]).removeClass(__class.slice(2).join(" "));
               var first = $(__selector[0]).first().addClass(__class[2]);
               var last = $(__selector[0]).last().addClass(__class[3]);
               if ($(first)[0] == $(last)[0])
               {
                  __range = false;
                  $(first).removeClass(__class.slice(1).join(" "));
                  verses = ":" + $(first).find(__selector[1]).text().trim();
               }
               else
               {
                  verses = ":" + $(first).find(__selector[1]).text().trim() + "-" + $(last).find(__selector[1]).text().trim();
               }
            }
            else
            {
               $(__selector[0]).removeClass(__class.join(" "));
               $(p).addClass(__class[0]);
               verses = ":" + $(p).find(__selector[1]).text().trim();
            }
         }
         $("div.heading span.verse").text(verses);
         if (verses)
         {
            var __verse = $("div.heading span.heading").ignore("span.range").text();
            if (!(_var.bible.verse.ignore))
            {
               if (__range && _var.bible.verse.history.length)
               {
                  _var.bible.verse.history[_var.bible.verse.history.length - 1] = __verse;
               }
               else
               {
                  _var.bible.verse.history.push(__verse);
               }
               _library.verse.update(__verse);
            }
            _library.verse.set(__verse);
            _library.verse.copy();
         }
         else
         {
            _library.verse.set("");
         }
         _event.resize();
      },

      summary:
      {
         edit:
         {
            show: function(__event)
            {
               var div = __event.target;
               if (!($(div).hasClass("summary")))
               {
                  div = $(div).parent();
               }
               var __y = $(div).css("--y");
               var url = "";
               if ($(div).css("background-image") != "none")
               {
                  url = $(div).css("background-image");
               }
               new $.Zebra_Dialog($(div).text() + "<br>[--y: nn%;] url",
                  {
                     auto_focus_button: $("body.materialize").length ? false : true,
                     default_value: "--y: " + __y + "; background-image: " + url,
                     position: ["center", "top + 100"],
                     title: "Edit Summary Image",
                     type: "prompt",
                     onClose:
                        function(caption, item)
                        {
                           if ((item !== undefined) && ((caption === true) || (caption == "Ok")))
                           {
                              var y = "";
                              if (item.substr(0, 3) == "--y")
                              {
                                 y = item.substr(0, item.indexOf(";") + 2);
                                 item = item.substr(y.length);
                              }
                              if (item.indexOf("background-image: ") == 0)
                              {
                                 item = item.substr(("background-image: ").length);
                              }
                              if (item.substr(0, 4) != "url(")
                              {
                                 item = "url(" + item + ")";
                              }
                              var css =
                                 [
                                    'body[data-chapter="' + $("body").attr("data-chapter") + '"]',
                                    '{',
                                       '& div.summary:nth-of-type(' + ($(div).index("div.summary") + 1) + ')',
                                       '{',
                                          (y ? y : '') + 'background-image: ' + item + ';',
                                       '}',
                                    '}'
                                 ];
                              $.post("php/summaryImage.php",
                                 {
                                    path: "../css/summaryRaw.css",
                                    data: css.join(" ")
                                 });

                              // Create a preview of the background image
                              if (y)
                              {
                                 $(css[2].substr(2)).css({"--y": y.substr(5, y.length - 7), "background-image": item});
                              }
                              else
                              {
                                 $(css[2].substr(2)).css("background-image", item);
                              }
                           }
                        }
                  });
               window.setTimeout(
                  function()
                  {
                     $("input.ZebraDialog_Prompt_Input").val("--y: " + __y + "; background-image: " + url).select();
                  }, 250);
            },

            hide: function()
            {
            }
         },

         click: function(__event)
         {
            const CLICK =
            {
               single: _library.verse.summary.__click,
               double: _library.verse.summary.__doubleClick
            };

            if (__event.clientX <= 50)
            {
               _library.verse.summary.edit.show(__event);
               return;
            }

            if (_var.bible.verse.summary.timeout == undefined)
            {
               _var.bible.verse.summary.timeout = window.setTimeout(
                  function()
                  {
                     _var.bible.verse.summary.timeout = undefined;
                     CLICK.single(__event);
                  }, _const.TIMEOUT.verse);
            }
            else
            {
               window.clearTimeout(_var.bible.verse.summary.timeout);
               _var.bible.verse.summary.timeout = undefined;
               CLICK.double(__event);
            }
         },

         __click: function(__event)
         {
            var __this = __event.currentTarget;

            $("p." + _const.VERSE.class[0]).removeClass(_const.VERSE.class.join(" "));

            var p = $(__this).nextUntil("div.summary");
            _var.bible.verse.summary.summary = $(__this).text();
            for (var index = 0; index < p.length; index++)
            {
               $(p[index]).click();
            }
         },

         __doubleClick: function(__event)
         {
            var __this = __event.currentTarget;
            var p = $(__this).nextUntil("div.summary");
            if (p.length)
            {
               $(p[p.length - 1])[0].scrollIntoView(true);
            }
         }
      },

      update: function(__verse) // #_library.verse.update  #verse.update  #update
      {
         function __appendOption(value, label)
         {
            var option = _library.common.__option(
               {
                  value: value,
                  label: ((label === undefined) ? value : label)
               });
            _var.select.verseHistory[0].appendChild(option);
         }

         $(_var.select.verseHistory[0]).empty();
         __appendOption(_const.LABEL.clear, _library.common.__spaced(_const.LABEL.clear, true));
         if (_var.bible.verse.history.length)
         {
            for (var index = 0; index < _var.bible.verse.history.length; index++)
            {
               __appendOption(_var.bible.verse.history[index]);
            }
            $(_var.select.verseHistory[0]).val(__verse);
         }
      },

      change: function(__event) // #_library.verse.change  #verse.change  #change
      {
         _library.verse.select(__event.target.value);
      },

      select: function(value) // #_library.verse.select  #verse.select  #select
      {
         if (value == _const.LABEL.clear)
         {
            _library.verse.clear();
         }
         else
         {
            var quote = _library.common.__validateQuote(value);
            if (quote)
            {
               _var.bible.verse.ignore = true;
               _library.bible.showChapter(quote);
               window.setTimeout(
                  function()
                  {
                     _var.bible.verse.ignore = false;
                  }, 500);
            }
         }
      },

      next: function() // #_library.verse.next  #verse.next  #next
      {
         _library.verse.navigate.navigate();
      },

      previous: function() // #_library.verse.previous  #verse.previous  #previous
      {
         _library.verse.navigate.navigate(true);
      },

      navigate:
      {
         init: function()
         {
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

            __initSelect(_var.select.navigate, _const.NAVIGATE.navigate);
            $(_var.select.navigate).val("Quote");
         },

         navigate: function(__previous) // #_library.verse.navigate.navigate #verse.navigate.navigate  #navigate.navigate
         {
            var __navigate = false;
            var index = _var.select.verseHistory[0].selectedIndex;
            var offset = 1;
            var length = _var.bible.verse.history.length + offset; // The offset refers to the fact that we're using the CLEAR option in the verseHistory select
            if ((index != -1) && (index < length))
            {
               if (__previous)
               {
                  if (index > 0)
                  {
                     index--;
                     __navigate = true;
                  }
               }
               else
               {
                  if (index < (length - 1))
                  {
                     index++;
                     __navigate = true;
                  }
               }
               if (__navigate)
               {
                  var quote = _var.bible.verse.history[index - offset];
                  _library.verse.select(quote);
                  _library.verse.update(quote);
               }
            }
         },

         change: function(__event)
         {
            var value = _var.select.navigate.value;
            _library.search.placeholder();
            $("div.find img.reverse").toggleClass("none", (["Quote", "Random"]).includes(value));//(value == "Quote"));
            $("input.search").val("");//prop("disabled", (value != "Quote"));
         }
      },

      random: function()
      {
         _library.verse.select(_var.bible.verses[(_var.bible.verses.length - 1).random()].split(" ")[0]);
      },
   }
};