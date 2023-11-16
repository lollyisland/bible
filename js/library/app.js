var ___app =
{
   app:
   {
      cycle: function() // #_library.app.cycle  #app.cycle  #cycle
      {
         // Style the section based on whether the editor has focus
         $("section.editor").toggleClass("blur", !(_library.editor.hasFocus()));

         // Check for the "over" keyword if we're using voice typing on the phone
         if (_php["device"] == "android")
         {
            _library.editor.keyword(true);
         }

         // Effectively resize main if section height changes
         var height = $("section.editor").height();
         if (_var.section.editor.height != height)
         {
            _var.section.editor.height = height;
            $(":root").css({"--section-height": height + "px"});
         }

         window.setTimeout(_library.app.cycle, _const.TIMEOUT.cycle);
      },

      refresh: function(__refresh) // #_library.app.refresh  #app.refresh  #refresh
      {
         if (__refresh)
         {
            $("span.refresh-button").css({opacity: 1});
            window.setTimeout(
               function()
               {
                  location.reload();
               }, 500);
         }
         else if (false)
         {
            _var.zebraDialog = new $.Zebra_Dialog(
               "<div style='text-align: center'>Do you want to Refresh the App?</div>" +
               "<br>" +
               "<hr>" +
               "<br>" +
               "<div>Current App Instance Updated:</div>" +
               "<br>" +
               _library.common.__lastUpdated(),
               {
                  "type": "confirmation",
                  "title": "Refresh " + document.title,
                  "position": _const.ZEBRA.position,
                  "buttons": 
                     [
                        {
                           caption: "Yes", 
                           callback: 
                              function() 
                              {
                                 $("html").css({"background-color": "black"});
                                 $("body").css({opacity: 0.5});
                                 window.setTimeout(function() { location.reload(); }, _const.TIMEOUT.reload);
                              }
                        },
                        {
                           caption: "No", 
                           callback: 
                              function() 
                              {
                                 _var.zebraDialog = null; 
                              }
                        }
                     ],
                  "custom_class": "blueberry storm noicon"
               }
            );
         }
         else
         {
            _event.splash.show();
         }
      },

      debug: function(data) // #_library.app.debug  #app.debug  #debug
      {
         console.log(data);
         var html = [];
         if (typeof data == "object")
         {
            $.each(data,
               function(key, value)
               {
                  switch (typeof value)
                  {
                     case "object":
                     case "function":
                        value = "[" + typeof value + "]";
                        break;
                  }
                  html.push(key + ": " + value);
               });
         }
         else
         {
            html.push(data);
         }
         $("#spanTest").html($("#spanTest").html() + html.join("<br>"));
      },

      preload: function() // #_library.app.preload  #app.preload  #preload
      {
         var __images =
         [
            "images/lock.svg",
            "images/bookmark.svg",
            "images/bookmarkFilled.svg"
         ];

         $.each(__images,
            function(index, __image)
            {
               (new Image()).src = __image;
            });
      },

      // ### We're not currently calling this function ###
      loadScript: function() // #_library.app.loadScript  #app.loadScript  #loadScript
      {
         function __appendScript(src)
         {
            var element = document.createElement("script");
            element.type = "application/javascript";
            element.src = src;
            //$("#sectionScript").append(element); // NB: jQuery uses AJAX in the append call which causes a Deprecation warning in the console - so use appendChild instead
            $("#sectionScript")[0].appendChild(element);
         }

         for (var index = 0; index < _var.bible.__books.length; index++)
         {
            __appendScript("kjv/" + _var.bible.__books[index] + ".js?version=" + _var.bible.__version[_var.bible.__books[index]]);
         }
      },

      // ### We're currently calling this function in place of _library.app.loadScript instead of at the end of Rev.js ###
      doContinue: function() // #_library.app.doContinue  #app.doContinue  #doContinue
      {
         function __callback()
         {
            _event.load(_var.__event);
         }

         /*while (_var.indexContinue < _var.bible.__books.length)
         {
            try
            {
               eval("load" + _var.bible.__books[_var.indexContinue] + "()");
               _var.indexContinue = _var.indexContinue + 1;
            }
            catch(err)
            {
               _var.indexContinue = _var.indexContinue + 1;
            }
         }*/
         _library.offline.load(__callback);
         //_event.load(_var.__event);
      },

      orientation: function(__event)
      {
         /* Current issues with full screen:
            1. Virtual keyboard and Android select boxes display the status bar
            2. Android navigation bar (ie menu/home/back) is still visible
            3. Not much gain in real estate - only height of Android status bar
            4. Can't see status bar blue, red or orange to match find bar
         if (screen.orientation.type.indexOf("landscape") != -1)
         {
            document.documentElement.webkitRequestFullscreen();
         }
         else
         {
            document.webkitExitFullscreen();
         }*/
         _library.parallel.load();
      },

      localhost: function()
      {
         return ((location.hostname == "localhost") || (location.hostname == "127.0.0.1"));
      }
   }
};