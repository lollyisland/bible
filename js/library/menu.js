var ___menu =
{
   menu:
   {
      down: function() // #_library.menu.down  #menu.down  #down
      {
         var toggleSearch = true;

         if (!($("body").hasClass("find-active")))
         {
            if ($("body").hasClass("menu-active"))
            {
               _library.menu.toggle();
               toggleSearch = false;
            }
            else if ($("body").hasClass("link-menu-active"))
            {
               _library.menu.up();
               toggleSearch = false;
            }
         }

         if (toggleSearch)
         {
            $("body").attr("data-group", $("main div.find").attr("data-group"));
            _library.search.toggle(_const.PARAMETER.show);
         }
      },

      up: function() // #_library.menu.up  #menu.up  #up
      {
         function __version1()
         {
            var toggleSearch = true;

            if ($("body").hasClass("menu-active"))
            {
               _library.menu.toggle();
               toggleSearch = false;
            }

            $("body").attr("data-group", $("main div.find").attr("data-group"));
            if (!($("body").hasClass("find-active")))
            {
               $("div.menuitems.link").toggleClass("hidden");
               if ($("div.menuitems.link").hasClass("hidden"))
               {
                  _library.menu.link(_const.PARAMETER.unlink);
                  _library.menu.show(_const.PARAMETER.timeout);
               }
               else
               {
                  _library.menu.link(_const.PARAMETER.link);
               }
            }

            if (toggleSearch)
            {
               _library.search.toggle(_const.PARAMETER.hide);
            }
         }

         function __version2()
         {
            if ($("body").hasClass("menu-active"))
            {
               _library.menu.toggle();
            }
            else
            {
               $("div.menuitems.link").toggleClass("hidden");
               if ($("div.menuitems.link").hasClass("hidden"))
               {
                  _library.menu.link(_const.PARAMETER.unlink);
                  _library.menu.show(_const.PARAMETER.timeout);
               }
               else
               {
                  _library.menu.link(_const.PARAMETER.link);
               }
            }
         }

         //__version1();
         __version2();
      },

      toggle: function(fade) // #_library.menu.toggle  #menu.toggle  #toggle
      {
         var active = $("div.menuitems.bars").hasClass("hidden");
         if (active)
         {
            $("div.menu, div.menuitems.bars, div.menuitems.options, div.menuitems.parallel").removeClass("hidden");
            _library.menu.link(_const.PARAMETER.unlink);
         }
         else
         {
            $("div.menuitems:not(.parallel)").addClass("hidden");
            if (fade)
            {
               _library.menu.fade();
            }
            else
            {
               _library.menu.hide(true);
            }
         }
         $("div.menu").toggleClass("mirror");
         _library.menu.__toggleClass("body", "menu-active", active);
      },
      
      __toggleClass(selector, className, state)
      {
         $(selector).toggleClass(className, state);
         switch (selector)
         {
            case "body":
               var __classes = 
               [
                  "menu-active",
                  "link-menu-active"
               ];
               if (__classes.indexOf(className) != -1)
               {
                  var showing = ($(selector).hasClass(__classes[0]) || $(selector).hasClass(__classes[1]));
                  _library.search.filter.menu(showing);
               }
               break;
         }
      },

      show: function(timeout) // #_library.menu.show  #menu.show  #show
      {
         $("div.menu, xxxdiv.menuitems.link, div.menuitems.parallel").removeClass("hidden");
         if (timeout)
         {
            _library.menu.fade();
         }
      },

      fade: function() // #_library.menu.fade  #menu.fade  #fade
      {
         window.setTimeout(
            function()
            {
               _library.menu.hide(true);
            }, _const.TIMEOUT.menu.hide);
      },

      hide: function(timeout)
      {
         //var __hide = true;
         var __hide = $("div.menuitems.bars").hasClass("hidden");
         if (timeout)
         {
            var elapsed = (new Date().getTime()) - _var.touch.startTime;
            if (elapsed < _const.TIMEOUT.menu.hide)
            {
               __hide = false;
            }
         }
         if (__hide)
         {
            $("div.menu, xxxdiv.menuitems.link, div.menuitems.parallel").addClass("hidden");
            //$("div.scroll-to-selection").addClass("hidden");
            //_library.menu.link();
         }
      },

      item: function(menuitem) // #_library.menu.item  #menu.item  #item
      {
         var id = $(menuitem).attr("data-menuitem").split(" ")[0];
         var hide = true;
         var groups = ["speech", "search", "portion", "notes", "verse"];
         if (groups.indexOf(id) != -1)
         {
            $(".menuitems.bar:not(." + id + "), .menuitems.options").addClass("hidden");
            $(".menuitems." + id).toggleClass("hidden");
            hide = false;
         }
         switch (id)
         {
            case "search":
               break;
            case "portion":
               break;
            case "verse":
               break;
            case "notes":
               break;
            case "speech":
               break;
            case "refresh":
               _library.app.refresh();
               break;
            case "image":
               var __class = "summary-images";
               $("html").toggleClass(__class);
               $(menuitem).toggleClass("off", !($("html").hasClass(__class)));
               break;
            case "lock":
               _event.swipeLockToggle(menuitem);
               hide = false;
               break;
            case "playOnSelect":
               _var.touch.playOnSelect = !(_var.touch.playOnSelect);
               _library.verse.read("");
               $(menuitem).toggleClass("off", !(_var.touch.playOnSelect));
               break;
            case "inline":
               _library.parameter.options.toggleInline();
               $(menuitem).toggleClass("off", !(_php.options.inline));
               hide = false;
               break;
            case "highlight":
               _library.parameter.options.toggleHighlight();
               $(menuitem).toggleClass("off", !(_php.options.highlight));
               hide = false;
               break;
            case "footer":
               _library.parameter.options.toggleFooter();
               $(menuitem).toggleClass("off", !(_php.options.footer));
               hide = false;
               break;
            case "theme":
               _library.parameter.options.toggleTheme();
               $(menuitem).toggleClass("off", !(_php.options.theme));
               hide = false;
               break;
            case "play":
               _library.bible.audio.play();
               break;
            case "scroll":
               _library.bible.audio.manual();
               break;
            case "copy":
               _library.verse.copy(true);
               break;
            case "reading":
               if ($(menuitem).hasClass("verse"))
               {
                  _library.bookmark.click();
               }
               break;
            case "navigate":
               hide = false;
               //$("div.menuitem.verse.navigation").css({visibility: "visible"}).removeClass("none");
               break;
            case "find":
               $.each(groups,
                  function(index, group)
                  {
                     if ($(menuitem).hasClass(group))
                     {
                        if ($("main div.find").attr("data-group") != group)
                        {
                           _library.search.toggle(_const.PARAMETER.hide);
                        }
                        $("main div.find, body").attr("data-group", group);
                        return false;
                     }
                  });
               _library.search.toggle();
               break;
            // Menu Items with select elements on top ...
            case "filter":
               hide = false; // Make an exception since we move the select element over the search bar when menu closes - otherwise the select popup disappears immediately
               break;
            case "history":
            case "mode":
            case "case":
            case "date":
               hide = true;
               break;
            case "write":
               _library.notes.write();
               hide = true;
               break;
            case "strongs":
               _library.notes.strongs.strongs();
               hide = true;
               break;
            case "commentary":
               _library.notes.commentary.toggle();
               break;
            case "commentary-lock":
               _library.notes.commentary.lock();
               break;
            case "help":
               /*
               $("#divHelp").toggleClass("none");
               hide = true;
               */
               if ($(menuitem).hasClass("search"))
               {
                  $("#divSearchHelp").toggleClass("none");
               }
               else // option menu
               {
                  _event.help();
                  hide = false;
               }
               break;
            case "settings":
               console.log($(menuitem));
               break;
            case "breakfast":
            case "lunch":
            case "dinner":
               _library.readings.select(null, _const.PORTION[id]);
               break;
            case "random":
               _library.verse.random();
               break;
            default:
               var __classes =
               {
                  previous: $(menuitem).hasClass("previous"),
                  next: $(menuitem).hasClass("next"),
                  group: $(menuitem).hasClass("group"),
                  book: $(menuitem).hasClass("book"),
                  chapter: $(menuitem).hasClass("chapter")
               };

               // ### this code is a duplicate of a section in _library.event.touch.move ###
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

               hide = false;
               break;
         }
         if (hide)
         {
            if (!($("div.menuitems.bars").hasClass("hidden")))
            {
               window.setTimeout(
                  function()
                  {
                     _library.menu.toggle(_const.PARAMETER.fade);
                  }, _const.TIMEOUT.menu.hide);
            }
            else if (!($("div.menuitems.link.bar").hasClass("hidden")))
            {
               window.setTimeout(
                  function()
                  {
                     //_library.menu.link(_const.PARAMETER.unlink);
                     _library.menu.__toggleClass("body", "link-menu-active", false);
                  }, _const.TIMEOUT.menu.hide);
            }
         }
         if (!($("div.menuitems.link").hasClass("hidden")))
         {
            $("div.menuitems.link").addClass("hidden");
         }
      },

      link: function(unlink, init)  //  #_library.menu.link  #menu.link  #link
      {
         var savePosition = (_var.menu.link.positions.length == 0);

         for (var indexButton = 0; indexButton < _const.MENU.link.buttons.length; indexButton++)
         {
            var button = _const.MENU.link.buttons[indexButton];
            var selector = 
            {
               menuitems: "div.menuitems." + button[0],
               menuitem: "div.menuitem." + button[0] + "." + button[1]
            };
            if (unlink)
            {
               if ($(selector.menuitems).children().length)
               {
                  var position = _var.menu.link.positions[indexButton];
                  if (position == 0)
                  {
                     $(selector.menuitem).prependTo(selector.menuitems);
                  }
                  else
                  {
                     $(selector.menuitem).insertAfter($(selector.menuitems).children().eq(position - 1));
                  }
               }
               else
               {
                  $(selector.menuitem).appendTo(selector.menuitems);
               }
            }
            else
            {
               if (savePosition)
               {
                  _var.menu.link.positions.push($(selector.menuitem).index());
               }
               $(selector.menuitem).appendTo("div.menuitems.link");
            }
         }

         if (!init)
         {
            if (!unlink)
            {
               _library.menu.show();
            }
            _library.menu.__toggleClass("body", "link-menu-active", !unlink);
         }
      },

      close: function()
      {
         if ($("body").hasClass("menu-active"))
         {
            _library.menu.toggle(_const.PARAMETER.fade);
         }
         else if ($("body").hasClass("link-menu-active"))
         {
            _library.menu.up();
         }
         else if ($("body").hasClass("summary-edit"))
         {
            _library.verse.summary.edit.hide();
         }
      },

      speech:
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

            __initSelect(_var.select.continue, _const.SPEECH.continue);
            __initSelect(_var.select.speaker, _const.SPEECH.speaker);
         },

         continue: function(__event)
         {
            console.log(__event);
         },

         speaker: function(__event)
         {
            console.log(__event);
         }
      }
   }
};