var _event = // #_event
{
   load: function(__event) // #_event.load  #load
   {
      _var.__event = __event;
      switch (_var.sequence++)
      {
         case 0:
            _library.parameter.write();

            //_library.emoji.load();

            //_library.app.loadScript();  // This has to be the last call in sequence 0
            _library.app.doContinue();
            break;
         case 1:
            _library.bible.convertVerses();  // This has to be the last call in sequence 1
            break;
         case 2:
            _library.editor.init(__event);
            _event.assign();
            _event.resize(__event);

            _library.unicode.init();

            _library.app.cycle();

            _var.select.group = $("#selectGroup")[0];
            _var.select.book = $("#selectBook")[0];
            _var.select.chapter = $("#selectChapter")[0];
            _var.select.list.element = $("#selectList")[0];
            _library.bible.createGroupOptions(_var.select.group);
            _library.bible.createBookOptions(_var.select.book);

            _var.select.portion = $("#selectPortion")[0];
            _library.readings.init();

            _var.select.filter = $("#selectFilter")[0];
            _var.select.mode = $("#selectMode")[0];
            _var.select.case = $("#selectCase")[0];
            _library.search.init();

            _var.select.continue = $("#selectContinue")[0];
            _var.select.speaker = $("#selectSpeaker")[0];
            _library.menu.speech.init();

            _var.select.commentary = $("#selectCommentary")[0];
            _library.notes.commentary.init();

            _var.select.verseHistory[0] = $("#selectVerseHistory1")[0];
            _var.select.verseHistory[1] = $("#selectVerseHistory2")[0];
            _var.select.notesHistory = $("#selectNotesHistory")[0];
            _var.select.searchHistory = $("#selectSearchHistory")[0];

            _var.select.parallelVersion = $("#selectParallelVersion")[0];
            _library.parallel.init();

            _var.select.navigate = $("#selectNavigation")[0];
            _library.verse.init();

            _var.bible.audio.audio = $("#audioSound")[0];
            for (var indexPageTurn = 0; indexPageTurn < 5; indexPageTurn++)
            {
               _var.bible.audio.audioPageTurn[indexPageTurn] = $("div.page-turn audio")[indexPageTurn];
               // Use uniqid to prevent caching and this error: Failed to load resource: net::ERR_CACHE_OPERATION_NOT_SUPPORTED
               _var.bible.audio.audioPageTurn[indexPageTurn].setAttribute("src", "mp3/pageturn2.mp3?uniqid=" + _php.uniqid);
            }

            _library.highlight.init();

            _library.bible.showChapter((_php.options.chapter || _const.DEFAULT.chapter));
            _library.bookmark.click();

            _library.main.show();
            _library.menu.link(_const.PARAMETER.link, _const.PARAMETER.init);
            _library.menu.show(_const.PARAMETER.timeout);

            $("div.menuitem.option.inline").toggleClass("off", !(_php.options.inline));
            $("div.menuitem.option.highlight").toggleClass("off", !(_php.options.highlight));
            $("div.menuitem.option.footer").toggleClass("off", !(_php.options.footer));

            _library.bookmark.back(null, true);

            //_library.lightning.public.init();

            // Force a click so that Chrome allows special interactions to trigger system requests
            // eg. catching the back navigation button event and forcing the virtual keyboard to show (swipe up on div.menu will show virtual keyboard)
         if (false)
         {
            _var.zebraDialog = new $.Zebra_Dialog(
               _library.common.__lastUpdated(),
               {
                  type: "information",
                  title: "Last Updated",
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
                  onClose: 
                     function()
                     {
                        //$("main").focus();
                        $("div.citations").click();
                     },
                  custom_class: "blueberry storm noicon onebutton"
               }
            );
         }
            _library.app.preload();
            break;
      }
   },

   assign: function()  // #_event.assign  #assign
   {
      screen.orientation.onchange = _library.app.orientation;

      $("body").on("keydown", _event.keydown);

      $(window).on("resize", _event.resize);

      $("div.splash").on("click",
         function(__event)
         {
            if ($(__event.target).is("span.refresh-button") || $(__event.target).is("span.refresh-button > img"))
            {
               _library.app.refresh(true);
            }
            else
            {
               _event.splash.hide();
            }
         });

      $("div.menu").on("click",
         function(__event)
         {
            $("div.menuitem.verse.navigation").css({visibility: "hidden"}).addClass("none");

            if (_library.notes.active())
            {
               _library.notes.write();
               _library.menu.fade();
            }
            else
            {
               _library.menu.toggle(_const.PARAMETER.fade);
            }
         });

      $("div.menuitem").on("click",
         function(__event)
         {
            //_library.menu.item(__event.target); // __event.target would equate to the select element on top of the menuitem if there is one
            _library.menu.item(this);
         });

      $("div.scroll-to-selection").on("click",
         function(__event)
         {
            if ($("p.selected")[0])
            {
               $("p.selected")[0].scrollIntoView(
                  {
                     behavior: "instant", //"smooth",
                     block: "start"
                  });
               window.setTimeout(
                  function()
                  {
                     $("main")[0].scrollBy(0, -30); // Compensate for div.heading at the top
                  }, 0);
            }
         });

      $("main").on("scroll",
         function(__event)
         {
            if (_var.scroll.ignore)
            {
               _var.scroll.ignore = false;
               return;
            }

            _library.main.heading.resize();
            _library.main.refresh();

            $(this).addClass("scrolling");
            window.clearTimeout(_var.scroll.timeout);
            _var.scroll.timeout = window.setTimeout(
               function()
               {
                  _var.scroll.ignore = true;
                  $("main").removeClass("scrolling");
               }, _const.TIMEOUT.scrolling);
         });
      $("#divSearchHelp").on("scroll",
         function(__event)
         {
            if (_var.scroll.ignore)
            {
               _var.scroll.ignore = false;
               return;
            }

            $(this).addClass("scrolling");
            window.clearTimeout(_var.scroll.timeout);
            _var.scroll.timeout = window.setTimeout(
               function()
               {
                  _var.scroll.ignore = true;
                  $("#divSearchHelp").removeClass("scrolling");
               }, _const.TIMEOUT.scrolling);
         });

      $("#divEditor div.ql-editor").on("scroll",
         function(__event)
         {
            if (_var.scroll.ignore)
            {
               _var.scroll.ignore = false;
               return;
            }

            $(this).addClass("scrolling");
            window.clearTimeout(_var.scroll.timeout);
            _var.scroll.timeout = window.setTimeout(
               function()
               {
                  _var.scroll.ignore = true;
                  $("#divEditor div.ql-editor").removeClass("scrolling");
               }, _const.TIMEOUT.scrolling);
         });

      $("div.cover").on("click",
         function(__event)
         {
            _library.menu.close();
         });

      $.each(["start", "end", "move"],
         function(index, id)
         {
            var eventType = "touch" + id;
            document.addEventListener(eventType, _event.touch[id], false);
         });

      _var.editor.quill.on("text-change",
         function(delta, oldDelta, source)
         {
            switch (source)
            {
               case Quill.sources.USER:
                  _var.editor.change = _var.editor.change.compose(delta);
                  $(_var.editor.quill.root).find("a").attr("contenteditable", "false");
                  _event.assignLink();
                  break;
            }
         });

      $(window).on("mousedown touchstart",
         function(__event)
         {
            /*
            _var.help.hint.active = true;
            _var.help.hint.element = __event.target;
            window.setTimeout(
               function()
               {
                  _event.help(_var.help.hint.element);
               }, _const.TIMEOUT.repeat.start);
            */
         });

      $(window).on("mouseup touchend",
         function(__event)
         {
            _var.touch.repeat.active = false;

            /*
            _var.help.hint.active = false;
            _event.help();
            */
         });

      $(".repeat").on("mousedown touchstart",
         function(__event)
         {
            _var.touch.repeat.active = true;
            _var.touch.repeat.element = this;
            window.setTimeout(
               function()
               {
                  _event.repeat(_var.touch.repeat.element);
               }, _const.TIMEOUT.repeat.start);
         });

      $("div.find input.search").on("change",
         function(__event)
         {
            switch ($("main > div.find").attr("data-group"))
            {
               case "verse":
                  _library.search.checkBook(this);
                  break;
            }
         });

      $("div.find input").on("keyup",
         function(__event)
         {
            const __selector =
            {
               search: "main div.find input.search",
               number: "main div.find input.number"
            };
            switch (__event.keyCode)
            {
               case _const.KEYCODE.ENTER:
                  switch ($("main > div.find").attr("data-group"))
                  {
                     case "notes":
                        _library.notes.quick($("div.find input.search").val());
                        break;
                     case "search":
                        _library.search.find(this.value);
                        break;
                  }
                  if ($(this).hasClass("number"))
                  {
                     $(__selector.search).removeClass("none");
                     $(__selector.number).addClass("none");
                  }
                  break;
               default:
                  switch ($("main > div.find").attr("data-group"))
                  {
                     case "verse":
                        if ($(this).hasClass("search"))
                        {
                           _library.search.checkBook(this);
                        }
                        break;
                     case "search":
                        _library.search.autocomplete(this.value);
                        break;
                  }
                  break;
            }
         });

      $("div.find input.search").on("focus",
         function(__event)
         {
            switch ($("main > div.find").attr("data-group"))
            {
               case "verse":
                  window.setTimeout(
                     function()
                     {
                        $(this).attr("list", "datalistBooks");
                     }, 500);
                  break;
               case "search":
                  _library.search.focus(__event);
                  break;
            }
         });

      $("div.find input.search").on("blur",
         function(__event)
         {
            _library.search.blur(__event);
         });

      $("div.find img").on("click",
         function(__event)
         {
            if ($(this).hasClass("group"))
            {
               if ($(this).hasClass("second"))
               {
                  //console.log("HI");
                  $("#selectList").click();
               }
               else
               {
                  $("div.menu").click();
                  $("div.menuitem." + $(this).attr("data-group") + ".bar").click();
                  //$(".menuitems." + $(this).attr("data-group")).toggleClass("hidden");
               }
            }
            else if ($(this).hasClass("search"))
            {
               var navigate = "";
               switch ($("main > div.find").attr("data-group"))
               {
                  case "speech":
                     _library.bible.audio.locate();
                     break;
                  case "notes":
                     _library.notes.quick($("div.find input.search").val());
                     break;
                  case "verse":
                     navigate = _var.select.navigate.value;
                     if (navigate == "Random")
                     {
                        _library.verse.random();
                        break;
                     }
                     else if (navigate != "Quote")
                     {
                        var __classes =
                        {
                           previous: $(this).hasClass("reverse"),
                           next: !($(this).hasClass("reverse")),
                           group: (navigate == "Group"),
                           book: (navigate == "Book"),
                           chapter: (navigate == "Chapter")
                        };
                        var offset = (__classes.previous ? -1 : 1);
                        if (__classes.group)
                        {
                           _var.touch.offset = offset;
                           _library.bible.group();
                        }
                        else
                        {
                           var select = null;
                           var lastChapter = false;
                           if (__classes.book)
                           {
                              select = _var.select.book;
                           }
                           else if (__classes.chapter)
                           {
                              select = _var.select.chapter;
                              var __option = $(select).find(":selected");
                              var selector = "option:not(.none)";
                              var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                              if (!option)
                              {
                                 select = _var.select.book;
                                 lastChapter = (offset == -1);
                              }
                           }

                           if (select)
                           {
                              var __option = $(select).find(":selected");
                              var selector = "option:not(.none)";
                              var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                              if (!option && (select.id == "selectBook"))
                              {
                                 selector = "optgroup:not(.testament)";
                                 var optgroup = $(__option).closest(selector);
                                 if (optgroup)
                                 {
                                    optgroup = ((offset == 1) ? $(optgroup).nextAll(selector)[0] : $(optgroup).prevAll(selector)[0]);
                                    if (optgroup)
                                    {
                                       selector = "option:not(.none):" + ((offset == 1) ? "first" : "last") + "-child";
                                       option = $(optgroup).find(selector)[0];
                                    }
                                    else // Wrap around books (but not chapters)
                                    {
                                       option = ((offset == 1) ? $("#optionGenesis")[0] : $("#optionRevelation")[0]);
                                    }
                                 }
                              }
                              if (option)
                              {
                                 var value = $(option).attr("value");
                                 $(select).val(value);
                                 if (select.id == "selectBook")
                                 {
                                    $("#selectChapter").val((lastChapter ? ("" + _var.bible.chapterCount[value]) :"1"));
                                 }
                                 //$("body").addClass("touch");
                                 _library.select.change.chapter();
                              }
                           }
                        }

                        break;
                     }
                  default:
                     _library.search.find($("div.find input:not(.none)").val(), true);
                     if (navigate == "Quote")
                     {
                        const __selector =
                        {
                           search: "main div.find input.search",
                           number: "main div.find input.number"
                        };
                        $(__selector.search).removeClass("none");
                        $(__selector.number).addClass("none");
                     }
                     break;
               }
            }
            else if ($(this).hasClass("close"))
            {
               _library.bible.audio.stop();
               _library.menu.down();
            }
         });

      $("#audioSound").on("ended", 
         function() 
         {
            var __selector = "div.indicator";
            _library.bible.audio.reset();
            _library.bible.audio.animate(true);
            $(__selector).css({top: "0px"});

            if ((_var.select.continue.value == "ContinuePlaying")
               &&
               (_var.bible.audio.audio.currentTime == _var.bible.audio.audio.duration))
            {
               var offset = 1;
               var lastChapter = false;
               select = _var.select.chapter;
               var __option = $(select).find(":selected");
               var selector = "option:not(.none)";
               var option = $(__option).next(selector)[0];
               if (!option)
               {
                  select = _var.select.book;
               }
               var __option = $(select).find(":selected");
               var selector = "option:not(.none)";
               var option = $(__option).next(selector)[0];
               if (!option && (select.id == "selectBook"))
               {
                  selector = "optgroup:not(.testament)";
                  var optgroup = $(__option).closest(selector);
                  if (optgroup)
                  {
                     optgroup = $(optgroup).nextAll(selector)[0];
                     if (optgroup)
                     {
                        selector = "option:not(.none):first-child";
                        option = $(optgroup).find(selector)[0];
                     }
                     else // Wrap around books (but not chapters)
                     {
                        option = $("#optionGenesis")[0];
                     }
                  }
               }
               if (option)
               {
                  var value = $(option).attr("value");
                  $(select).val(value);
                  if (select.id == "selectBook")
                  {
                     $("#selectChapter").val((lastChapter ? ("" + _var.bible.chapterCount[value]) :"1"));
                  }
                  $("body").addClass("touch");
                  _library.select.change.chapter();
                  _library.bible.audio.play();
               }
            }
         });

      $("div.heading div.icon").on("click",
         function(__event)
         {
            if ($(this).hasClass("book"))
            {
               $("div.menuitem.verse.find").click();
            }
            else if ($(this).hasClass("filter"))
            {
               _library.search.filter.menu(false); // Make sure select.filter is moved over the bottom right icon of the full-width blue search bar
               $("div.menuitem.search.find").click();
            }
         });

      $("#selectGroup").on("click",
         function(__event)
         {
            // Don't change this code. It works differently between PC and mobile, but I like the mobile version just fine.
            _library.search.filter.menu(false);
            $("div.menuitem.verse.find").click();
         }
      );

      $("div.portion > ul > li").on("click",
         function(__event)
         {
            var id = $(__event.currentTarget).attr("data-item");
            switch (id)
            {
               case "breakfast":
               case "lunch":
               case "dinner":
                  _library.readings.select(null, _const.PORTION[id]);
                  break;
            }
         });

      // The splash image starts hidden so that we can pop-display it when it's finished loading.
      // It looks really bad to watch the image load for a few seconds.
      if (!($("div.splash img")[0].complete))
      {
         $("div.splash img").on("load",
            function(__event)
            {
               
               $(this).removeClass("hidden");
            });
      }
      else
      {
         $("div.splash img").removeClass("hidden");
      }

//      _event.back(null, true);

      _event.assignDynamic();
   },

   assignLink: function()  // #_event.assignLink  #assignLink
   {
      $("a").on("click",
         function(__event)
         {
            function __callback(button)
            {
               switch (button.caption)
               {
                  case "Yes":
                     _library.notes.write();
                  case "No":
                     _library.bible.showChapter(quote);
                     _library.notes.close(_const.PARAMETER.force);
                     break;
                  case "Cancel":
                     break;
               }
            }

            var quote = _library.common.__validateQuote($(this).attr("href")); // Don't use this.href otherwise you get the full unwanted url path which becomes invalid
            if (quote)
            {
               __event.preventDefault();
               __event.stopPropagation();
               $(".ql-tooltip").addClass("ql-hidden");
               if (_library.editor.changed())
               {
                  _var.zebraDialog = new $.Zebra_Dialog(
                     "<div style='text-align: center'>Do you want to Save the Note first?</div>",
                     {
                        "type": "confirmation",
                        "title": _var.bible.verse.selection,
                        "position": _const.ZEBRA.position,
                        "buttons": 
                           [
                              {
                                 caption: "Yes", 
                                 callback: function() { __callback(this); }
                              },
                              {
                                 caption: "No", 
                                 callback: function() { __callback(this); }
                              },
                              {
                                 caption: "Cancel", 
                                 callback: function() { __callback(this); }
                              }
                           ],
                        "custom_class": "blueberry storm noicon"
                     }
                  );
               }
               else
               {
                  _library.bible.showChapter(quote);
                  _library.notes.close(_const.PARAMETER.force);
               }
            }
         });
   },

   assignDynamic: function()  // #_event.assignDynamic  #assignDynamic
   {
      _event.assignLink();

      $("div.note div.ql-editor").on("scroll",
         function(__event)
         {
            if (_var.scroll.ignore)
            {
               _var.scroll.ignore = false;
               return;
            }

            $(this).addClass("scrolling");
            window.clearTimeout(_var.scroll.timeout);
            _var.scroll.timeout = window.setTimeout(
               function()
               {
                  _var.scroll.ignore = true;
                  $("div.note div.ql-editor").removeClass("scrolling");
               }, _const.TIMEOUT.scrolling);
         });

      $("div.note").on("click",
         function(__event)
         {
            if (_var.click.ignore)
            {
               return;
            }
            _var.click.ignore = true;

            var quote = $(this).find("div.inlineHeading").text();
            _var.bible.verse.count = 1;
            if (_library.common.__validateQuote(quote))
            {
               $(".selected").removeClass(_const.VERSE.class.join(" "));

               var verse = parseInt(quote.substr(quote.indexOf(":") + 1));
               var count = _var.bible.verse.count; // Have to save original value
               for (var offset = 0; offset < count; offset++)
               {
                  //var element = $("#tdChapter > div.verses > p:nth-of-type(" + (verse + offset) + ")")[0];
                  var element = $("#tdChapter div.verses > p:nth-of-type(" + (verse + offset) + ")")[0];
                  if (element)
                  {
                     $(element).click();
                     if (offset == 0)
                     {
                        $("main").scrollTop(Math.max(0, element.offsetTop - ($("main").height() / 2)));
                        $("main").scroll();
                     }
                  }
               }
            }

            window.clearTimeout(_var.click.timeout);
            _var.click.timeout = window.setTimeout(
               function()
               {
                  _var.click.ignore = false;
               }, _const.TIMEOUT.click);
         });
   },

   assignVerse: function()
   {
      //$("#tdChapter > div.verses > p").on("click", _library.verse.click);
      $("#tdChapter div.verses > p").on("click", _library.verse.click);

      $("#tdChapter div.verses > div.summary").on("click", _library.verse.summary.click);
   },

   resize: function(__event, noDelay) // #_event.resize  #resize
   {
      //$(".ql-container").css({height: ("calc(100% - " + $(".ql-toolbar").outerHeight() + "px)")});
      calcDeviceHeight();

      if ($("span.heading > span:last-child").length)
      {
         $(":root").css(
            {
               "--select-quote-division": $("span.heading > span:last-child").offset().left + "px",
               "--select-font-size": _var.main.heading.fontSize + "rem"
            });
      }
      _library.main.refresh(0);
/*
      // Detect resize after Next button tapped on virtual keyboard
      var value = $("div.find input")[0].value;
      if (value && !isNaN(value))
      {
         window.setTimeout(
            function()
            {
               $("div.find img.search.next").click();
            }, 500);
      }
*/
   },

   keydown: function(__event) // #_event.keydown  #keydown
   {
      if (!($("div.splash").hasClass("none")))
      {
         _event.splash.hide();
         return;
      }

      _var.__event = __event;
//console.log(__event);
      switch (__event.key)
      {
         case "Enter": // This is the only key recognised on Android - which is fine
            if (_library.notes.active())
            {
               __event.preventDefault();
               __event.stopPropagation();
               if (_library.editor.hasFocus())
               {
                  //_library.editor.submit();
               }
               else
               {
                  //_library.editor.focus();
               }
            }
            else if ($("div.find input.number").is(":focus"))
            {
               $("div.find img.search.next").click();
            }
            break;
         case "Escape":
            if (_library.notes.active())
            {
               window.setTimeout(
                  function()
                  {
                     _library.notes.close();
                  }, _const.TIMEOUT.repeat.start); // Appropriate use of timeout value, if only to prevent Esc registering on the Zebra Dialog
            }
            else
            {
               if ($("body").hasClass("find-active") && $("div.find input:not(.none)")[0].value)
               {
                  _library.search.toggle(_const.PARAMETER.show);
               }
               else
               {
                  if ($("body").hasClass("menu-active"))
                  {
                     _library.menu.toggle();
                  }
                  else if ($("div.ZebraDialog").length == 0)
                  {
                     _library.menu.up();
                  }
               }
            }
            break;
         default:
            if (_library.notes.active())
            {
               break;
            }
            if (document.activeElement.value === undefined) // ie the element in focus can't receive keyboard input
            {
               var hotKey = true;
               switch (__event.key)
               {
                  case "b": // bible
                  case "v": // verse
                  case "q": // quote
                     $("div.menuitem.verse.find").click();
                     break;
                  case "f": // filter
                  case "s": // search
                     $("div.menuitem.search.find").click();
                     break;
                  case "t": // strong's
                  case "r": // strong's
                  case "g": // strong's
                     $("div.menuitem.notes.strongs").click();
                     break;
                  case "c": // commentary
                     $("div.menuitem.notes.commentary").click();
                     break;
                  default:
                     hotKey = false;
                     break;
               }
               if (hotKey)
               {
                  __event.preventDefault();
                  __event.stopPropagation();
               }
            }
            break;
      }
   },

   touch:
   {
      start: function(__event) // #_event.touch.start  #touch.start  #start
      {
         if (__event.touches)
         {
            _var.touch.mainScrollTop = $("main")[0].scrollTop;

            //###TEST...##
            if (_var.touch.endFunction) return; // This prevents a 2-finger then 3-finger left-right swipe causing problems with skipping the grouping after Acts
            //###...TEST###

            //_library.app.debug("s");
            _var.touch.altFunction = ((__event.touches.length == 2) ?
                  function()
                  {
                     _library.verse.select($("div.heading span.heading").ignore("span.range").text());
                  } : null);

            _var.touch.endFunction = null;

            _var.touch.xDown = __event.touches[0].clientX;
            _var.touch.yDown = __event.touches[0].clientY;

            _var.touch.startTime = new Date().getTime();

            //var headerAreaTouched = ($(__event.target).closest("header").length > 0);
            var menuTouched = ($(__event.target).closest("div.menu").length > 0);
            //var linkMenuItemTouched = ($(__event.target).closest("div.menuitems.link").length > 0);
            var linkMenuHidden = $("div.menuitems.link").hasClass("hidden");
            //var timeout = !headerAreaTouched;
            //_library.header.show(timeout);
            _library.menu.show(/*timeout && */linkMenuHidden && !menuTouched);//!linkMenuItemTouched);
            _library.main.show();

            $("div.scroll-to-selection").removeClass("hidden");
            window.setTimeout(
               function()
               {
                  $("div.scroll-to-selection").addClass("hidden");
               }, _const.TIMEOUT.menu.hide);

            try
            {
               _var.bible.audio.audioPageTurn[0/*_var.bible.audio.indexPageTurn*/].currentTime = 0;
               _var.bible.audio.counter[0]++;
            }
            catch (__exception)
            {
               console.log([__exception.name, __exception.message, __exception.stack]);
            }
         }
      },

      end: function(__event) // #_event.touch.end  #touch.end  #end
      {
         //$("main").removeClass("no-scroll");

         _var.touch.xDown = undefined;
         _var.touch.yDown = undefined;
         //_library.app.debug(_var.touch.endFunction);
         if (_var.touch.endFunction)
         {
            _var.touch.endFunction();
            _var.touch.endFunction = null;
         }
         else if (_var.touch.altFunction)
         {
            _var.touch.altFunction();
            _var.touch.altFunction = null;
         }
         $("body").removeClass("touch");
      },

      move: function(__event) // #_event.touch.move  #touch.move  #move
      {
         function __locked()
         {
            $("body").addClass("lock");
            window.clearTimeout(_var.touch.timeout);
            _var.touch.timeout = window.setTimeout(
               function()
               {
                  $("body").removeClass("lock");
               }, _const.TIMEOUT.lock);
         }
         
         if ((_var.touch.xDown === undefined) || (_var.touch.yDown === undefined))
         {
            return;
         }

         _var.touch.endTime = new Date().getTime()

         var reset = false;

         var xUp = __event.touches[0].clientX;
         var yUp = __event.touches[0].clientY;

         var xDiff = _var.touch.xDown - xUp;
         var yDiff = _var.touch.yDown - yUp;

         if (Math.abs(xDiff) > Math.abs(yDiff)) // Most significant
         {
            var speed = Math.abs(xDiff) / (_var.touch.endTime - _var.touch.startTime);
            if (Math.abs(xDiff) > (1 / speed))
            {
               try
               {
                  if (_var.bible.audio.counter[1] < _var.bible.audio.counter[0])
                  {
                     _var.bible.audio.counter[1]++;
                     _var.bible.audio.audioPageTurn[0/*_var.bible.audio.indexPageTurn*/].play();
                     _var.bible.audio.indexPageTurn = (_var.bible.audio.indexPageTurn + 1) % 5;
                  }
               }
               catch (__exception)
               {
                  console.log([__exception.name, __exception.message, __exception.stack]);
               }

               var offset = 0;
               if (xDiff > 0) // Left swipe (ie finger goes from right to left)  #leftswipe #swipeleft
               {
                  offset = 1;
               }
               else // Right swipe (ie finger goes from left to right)  #rightswipe #swiperight
               {
                  offset = -1;
               }

               /*if (_var.touch.lock)
               {
                  __locked();
               }
               else
               {*/
                  if ($(__event.target).is("div.menu"))
                  {
                     _var.touch.endFunction = 
                        function()
                        {
                           $("div.menu").click();
                        };
                  }
                  else if ($(__event.target).is("select.quote"))
                  {
                     if (!(_var.touch.endFunction))
                     {
                        var select = __event.target;
                        var __option = $(select).find(":selected");
                        var selector = "option:not(.none)";
                        var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                        if (!option)
                        {
                           selector = "optgroup:not(.testament)";
                           var optgroup = $(__option).closest(selector);
                           optgroup = ((offset == 1) ? $(optgroup).nextAll(selector)[0] : $(optgroup).prevAll(selector)[0]);
                           if (optgroup)
                           {
                              selector = "option:not(.none):" + ((offset == 1) ? "first" : "last") + "-child";
                              option = $(optgroup).find(selector)[0];
                           }
                        }
                        if (option)
                        {
                           if (select.id == "selectBook")
                           {
                              $("#selectChapter").val("1");
                           }
                           $(select).val($(option).attr("value"));
                           $("body").addClass("touch");
                           _var.touch.endFunction = _library.select.change.chapter;
                        }
                     }
                  }
                  /*
                  else if ($(__event.target).is("input"))
                  {
                     if ($(__event.target).hasClass("search") && !($(__event.target).is(":focus")))
                     {
                        if (offset == 1)
                        {
                           _var.touch.endFunction = _library.search.next;
                        }
                        else
                        {
                           _var.touch.endFunction = _library.search.previous; // #bug - left spark number is incorrect; can't handle wrap around
                        }
                     }
                  }
                  */
                  else if ($(__event.target).is("main div.find") || $(__event.target).parents("main div.find").length)
                  {
                     var menus = ["verse", "portion", "notes", "speech", "search"];
                     //console.log([menus.length, menus.indexOf($("main div.find").attr("data-group")), offset]);
                     var menu = menus[(menus.length + menus.indexOf($("main div.find").attr("data-group")) + offset) % menus.length];
                     switch (menu)
                     {
                        case "verse":
                           _var.bible.verse.focus = false;
                           break;
                        case "notes":
                           _var.notes.focus = false;
                           break;
                        case "search":
                           _var.search.focus = false;
                           break;
                     }
                     _var.touch.endFunction = 
                        function()
                        {
                           $("div.menuitem." + menu + ".find").click();
                        };
                  }
                  else if ($(__event.target).is("p.selected") || $(__event.target).parents("p.selected").length)
                  {
                     var library = ($("p.selected").find("x").length ? _library.search : _library.verse);
                     _var.touch.endFunction = ((offset == 1) ? library.next : library.previous);
                  }
                  else if ($(__event.target).parents("div.parallel").length)
                  {
                     if (!(_var.touch.endFunction))
                     {
                        _var.touch.endFunction = ((offset == 1) ? _library.parallel.next : _library.parallel.previous);
                     }
                  }
                  else if ($(__event.target).parents("main").length)
                  {
                     if (_var.touch.lock)
                     {
                        __locked();
                     }
                     else if (!(_var.touch.endFunction))
                     {
                        var select = null;
                        var lastChapter = false;
                        //_library.app.debug(__event.touches.length);
                        switch (__event.touches.length)
                        {
                           case 1:
                              if ($(__event.target).parents("div.strongs").length)
                              {
                                 $(__event.target).parents("div.strongs").remove();
                              }
                              else
                              {
                                 select = _var.select.chapter;//$("#selectChapter")[0];
                                 var __option = $(select).find(":selected");
                                 var selector = "option:not(.none)";
                                 var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                                 if (!option)
                                 {
                                    select = _var.select.book;
                                    lastChapter = (offset == -1);
                                 }
                              }
                              break;
                           case 2:
                              select = _var.select.book;
                              break;
                           case 3: // Old & New Testament
                              $("body").addClass("touch");
                              _var.touch.endFunction = _library.bible.group;
                              _var.touch.offset = offset;
                              break;
                           case 4: // Old & New Testament
                              $("body").addClass("touch");
                              _var.touch.endFunction = _library.bible.testament;
                              _var.touch.offset = offset;
                              break;
                        }
                        if (select)
                        {
                           var __option = $(select).find(":selected");
                           var selector = "option:not(.none)";
                           var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                           if (!option && (select.id == "selectBook"))
                           {
                              selector = "optgroup:not(.testament)";
                              var optgroup = $(__option).closest(selector);
                              if (optgroup)
                              {
                                 optgroup = ((offset == 1) ? $(optgroup).nextAll(selector)[0] : $(optgroup).prevAll(selector)[0]);
                                 if (optgroup)
                                 {
                                    selector = "option:not(.none):" + ((offset == 1) ? "first" : "last") + "-child";
                                    option = $(optgroup).find(selector)[0];
                                 }
                                 else // Wrap around books (but not chapters)
                                 {
                                    option = ((offset == 1) ? $("#optionGenesis")[0] : $("#optionRevelation")[0]);
                                 }
                              }
                           }
                           if (option)
                           {
                              var value = $(option).attr("value");
                              $(select).val(value);
                              if (select.id == "selectBook")
                              {
                                 $("#selectChapter").val((lastChapter ? ("" + _var.bible.chapterCount[value]) :"1"));
                              }
                              $("body").addClass("touch");
                              _var.touch.endFunction = _library.select.change.chapter;
                           }
                           else
                           {
                              __locked();
                           }
                        }
                     }
                  }
               //}
               _var.touch.xDown = xUp;
               _var.touch.yDown = yUp;
            }
            reset = false;
         }
         else
         {

            var __up = false;
            var offset = 0;
            if (yDiff > 0) // Up swipe (ie finger goes from bottom to top)  #upswipe #swipeup
            {
               __up = true;
               offset = 1;
            }
            else // Down swipe (ie finger goes from top to bottom)  #downswipe #swipedown
            {
               offset = -1;
            }
            if ($(__event.target).is("div.menu"))
            {
               _var.touch.endFunction = (_library.notes.active() ? null : (__up ? _library.menu.up : _library.menu.down));
            }
            //else if ((!__up) && $(__event.target).closest("div.heading").length) // Swipe down from div.heading or any of its descendants
            else if ($(__event.target).closest("div.heading").length) // Swipe up or down from div.heading or any of its descendants
            {
               if (__up)
               {
                  _var.touch.endFunction = _event.swipeLockToggle;
               }
               else
               {
                  _var.touch.endFunction = 
                     (
                        function() // Swipe down on heading is a quick way of going to a different verse in the current chapter
                        {
                           $("div.menuitem.verse.find").click();
                           _library.search.toggle(true, true); // Show input.number
                           $("div.find input.number").val($(_var.select.chapter).val() + ".");
                        }
                     );
               }
            }
            /*else if ($(__event.target).closest("#tdChapter").length) // Swipe up or down the verses to give user option to show hidden paragraphs, citations etc
            {
               //_var.touch.endFunction = _library.main.refresh; // Disabled due to finger left-right swiping no longer working
            }*/
            else if ($(__event.target).parents("main").length)
            {
               // ### This code block is mostly the same as left and right swipe for "main" ###
               if ((__up && (($("main")[0].clientHeight + _var.touch.mainScrollTop + _const.LAYOUT.scrollAccuracy) > $("main")[0].scrollHeight)) || 
                  (!__up && (_var.touch.mainScrollTop == 0)))
               {
                  if (_var.touch.lock)
                  {
                     __locked();
                  }
                  else if (!(_var.touch.endFunction))
                  {
                     var select = null;
                     var lastChapter = false;
                     switch (__event.touches.length)
                     {
                        // We require user to have two fingers swipe down to go to end of previous chapter
                        case 1:
                        //case 1: // ### PC testing purposes only ###
                           if ($(__event.target).parents("div.strongs").length || $(__event.target).parents("div.note").length)
                           {
                              break;
                           }
                           select = _var.select.chapter;
                           var __option = $(select).find(":selected");
                           var selector = "option:not(.none)";
                           var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                           if (!option)
                           {
                              select = _var.select.book;
                              lastChapter = (offset == -1);
                           }
                           break;
                     }
                     if (select)
                     {
                        var __option = $(select).find(":selected");
                        var selector = "option:not(.none)";
                        var option = ((offset == 1) ? $(__option).next(selector)[0] : $(__option).prev(selector)[0]);
                        if (!option && (select.id == "selectBook"))
                        {
                           selector = "optgroup:not(.testament)";
                           var optgroup = $(__option).closest(selector);
                           if (optgroup)
                           {
                              optgroup = ((offset == 1) ? $(optgroup).nextAll(selector)[0] : $(optgroup).prevAll(selector)[0]);
                              if (optgroup)
                              {
                                 selector = "option:not(.none):" + ((offset == 1) ? "first" : "last") + "-child";
                                 option = $(optgroup).find(selector)[0];
                              }
                              else // Wrap around books (but not chapters)
                              {
                                 option = ((offset == 1) ? $("#optionGenesis")[0] : $("#optionRevelation")[0]);
                              }
                           }
                        }
                        if (option)
                        {
                           function __changeChapter(bottom)
                           {
                              $("main").addClass("no-scroll");
                              window.setTimeout(
                                 function()
                                 {
                                    _library.select.change.chapter();
                                    $("main").removeClass("no-scroll");
                                    $("main").scrollTop((bottom ? $("main")[0].scrollHeight : 0));
                                    $("main").scroll();
                                 }, 0);
                           }

                           var value = $(option).attr("value");
                           $(select).val(value);
                           if (select.id == "selectBook")
                           {
                              $("#selectChapter").val((lastChapter ? ("" + _var.bible.chapterCount[value]) :"1"));
                           }
                           $("body").addClass("touch");
                           _var.touch.endFunction = //_library.select.change.chapter;
                              (__up ? _library.select.change.chapter :
                                 function()
                                 {
                                    __changeChapter(true);
                                 }
                              );
                        }
                        else
                        {
                           __locked();
                        }
                     }
                  }
               }
            }
         }
         // Reset values
         if (reset)
         {
            _var.touch.xDown = undefined;
            _var.touch.yDown = undefined;
         }
      }
   },

   textareaFocus: function(__event, textarea) // #_event.textareaFocus  #textareaFocus
   {
      window.setTimeout(function() { $(textarea)[0].blur(); }, _const.TIMEOUT.textareaBlur);
   },

   repeat: function(element) // #_event.repeat  #repeat
   {
      if (_var.touch.repeat.active)
      {
         if ($(element).is("div.heading"))
         {
            // Unable to get to work - "bring up another select element"
         }
         else
         {
            $(element).trigger("click");
            //if ($(element).hasClass("button"))
            if ($(element).is(".button, .previous, .next"))
            {
               window.setTimeout(
                  function()
                  {
                     _event.repeat(element);
                  }, _const.TIMEOUT.repeat.interval);
            }
         }
      }
   },

   //help: function(element) // #_event.help  #help
   help: function() // #_event.help  #help
   {
      _var.help.hint.active = !(_var.help.hint.active);
      $("[data-help-hint]").toggleClass("hint", _var.help.hint.active);
      /*
      if (_var.help.hint.active && element)
      {
         $.each(_const.HELP.hint,
            function(index, hint)
            {
               if ($(element).is(hint.selector))
               {
                  $("#divHelp").removeClass("hidden").html(hint.message);
               }
            });
      }
      else
      {
         $("#divHelp").addClass("hidden").text("");
      }
      */
   },

   swipeLockToggle: function(menuitem)
   {
      menuitem = (menuitem ? menuitem : $("div.menuitem.lock")[0]);

      _var.touch.lock = !(_var.touch.lock);
      $([menuitem, $("html")[0]]).toggleClass("locked", _var.touch.lock);
      $(menuitem).toggleClass("on", _var.touch.lock);
   },

   splash:
   {
      hide: function()
      {
         $("html").addClass("no-splash");
         $("div.splash").addClass("none");
         $("body").removeClass("none refresh-button");
         $("div.menu").removeClass("none");
         $("div.parallel").removeClass("none");
         $("div.citations").click();
         _event.resize();
         _library.verse.update(); // Create the CLEAR item in the verse history list
      },

      show: function()
      {
         $("html").removeClass("no-splash");
         $("div.splash").removeClass("none"); // quote-disabled");
         $("body").addClass("none refresh-button");
         $("div.menu").addClass("none");
         $("div.parallel").addClass("none");
         _event.resize();
      }
   },

   xxxback: function(__event, init) // Refer to bookmark.back function instead
   {
      if (init)
      {
         window.addEventListener("popstate", _event.back);
      }
      else if (!($("#divSearchHelp").hasClass("none")))
      {
         $("#divSearchHelp").addClass("none");
      }
      else
      {
         // Android Back Button...
         if (false) // bookmark.js uses popstate
         {
            _event.exit();
         }
      }
      window.history.pushState({}, "");
   },

   exit: function()
   {
      $("body > *").addClass("none");
      window.setTimeout(
         function()
         {
            location.reload();
         }, _const.TIMEOUT.app.reload);
   }
};

$(document).ready(_event.load); // This is the most appropriate place to put this - ie in event.js after _event object declared