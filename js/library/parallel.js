var ___parallel =
{
   parallel:
   {
      load: function() // #_library.parallel.load  #parallel.load  #load
      {
         if (screen.orientation.type.indexOf("landscape") != -1)
         {
            const __class = _const.VERSE.class;
            var selector =
            {
               verses: "#tdChapter div.verses",
               parallel: "#divVersesContainer div.parallel",
               p: "p",
               words: "span.words"
            };

            // NB: There is a delay between assigning min-height and the $.height() function returning the correct new height.
            // Since we're making an ajax call, this serves as the required delay.
            $(([selector.verses, ">", selector.p]).join(" ")).css({"min-height": "0px"});

            $(selector.parallel).addClass("hidden");
            $(selector.parallel).html($(selector.verses).html());
            $(([selector.parallel, ">", selector.p]).join(" ")).removeClass(__class.join(" ") + " note");

            var __data = 
            {
               bible: _var.bible.parallel.version,
               index: _var.bible.indexChapter,
               count: _var.bible.verseCount
            };
            $.ajax({
               type    : "POST",
               url     : "php/parallel.php",
               data    : __data,
               success : 
                  function(response)
                  { 
                     if (response != "")
                     {
                        if (response.substr(0, 5) == "Error")
                        {
                           console.log(response);
                        }
                        else
                        {
                           var verses = JSON.parse(response);
                           for (var indexVerse = 0; indexVerse < verses.length; indexVerse++)
                           {
                              var verse = 
                                 verses[indexVerse].
                                    substr(verses[indexVerse].indexOf(" ") + 1).
                                    replace(/\{/g, "<span class='comment'> {").
                                    replace(/\}/g, "} </span>");

                              selector.p = "p:nth-of-type(" + (indexVerse + 1) + ")";
                              $(([selector.parallel, ">", selector.p, "span.words"]).join(" ")).html(verse);

                              function __height(__selector)
                              {
                                 return $(([__selector, ">", selector.p]).join(" ")).height();
                              }
                              var height = Math.max(__height(selector.verses), __height(selector.parallel)) + "px";
                              $(([selector.verses, ">", selector.p, ",", selector.parallel, ">", selector.p]).join(" ")).css({"min-height": height});
                           }

                           $(selector.parallel).removeClass("hidden");

                           /*$("div.parallel > div.summary").each(
                              function(index, parallelSummaryElement)
                              {
                                 if (index == 0)
                                 {
                                    return true; // continue
                                 }
                                 let summaryElement = $("div.verses > div.summary")[index];
                                 let delta = $(summaryElement).position().top - $(parallelSummaryElement).position().top;
                                 console.log(delta);
                              });*/
                        }
                     }
                  }
            });
         }
      },

      init: function() // #_library.parallel.init  #parallel.init  #init
      {
         $(_var.select.parallelVersion).empty();
         $.each(_const.PARALLEL.optgroups,
            function(index, optgroup)
            {
               var element = _library.common.__optgroup(
               {
                  label: optgroup.group,
                  bold: false,
                  uppercase: true
               });

               $.each(optgroup.options,
                  function(index, option)
                  {
                     element.appendChild(_library.common.__option(option));
                  });

               _var.select.parallelVersion.appendChild(element);
            });
         $(_var.select.parallelVersion).val(_var.bible.parallel.version);
      },

      change: function(__event) // #_library.parallel.change  #parallel.change  #change
      {
         _library.parallel.select(__event.target.value, $(__event.target.options[__event.target.selectedIndex]).attr("shortLabel"));
         $("#divSubheadingParallel td:last-child").text($(__event.target.options[__event.target.selectedIndex]).text());
      },

      select: function(value, shortLabel) // #_library.parallel.select  #parallel.select  #select
      {
         _var.bible.parallel.version = value;
         $(":root").css(
            {
               "--parallel-version": ("\"" + (shortLabel ? shortLabel : _var.bible.parallel.version.toUpperCase()) + "\"")
            });
         _library.parallel.load();
      },

      previous: function() // #_library.parallel.previous  #parallel.previous  #previous
      {
         _library.parallel.swipe(false);
      },

      next: function() // #_library.parallel.next  #parallel.next  #next
      {
         _library.parallel.swipe(true);
      },

      swipe: function(__next)
      {
         var __select = _var.select.parallelVersion;
         var index = __select.selectedIndex;

         do
         {
            index = ((index + (__next ? 1 : (__select.length - 1))) % __select.length);
         } while (__select.options[index].disabled);

         $(__select)
            .val(__select.options[index].value)
            .trigger("change");
      }
   }
};
