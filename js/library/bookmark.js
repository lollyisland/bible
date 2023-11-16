var ___bookmark =
{
   bookmark:  // #_library.bookmark  #bookmark
   {
      click: function()  // #_library.bookmark.click  #bookmark.click  #click
      {
         if (!(_var.touch.repeat.active) && _var.bookmark.chapter)
         {
            if (_var.bookmark.chapter == _var.bible.chapter)
            {
               _var.bookmark.chapter = "";
            }
            else
            {
               _library.bible.showChapter(_var.bookmark.chapter);
            }
         }
         else
         {
            _var.bookmark.chapter = _var.bible.chapter;
         }
         _library.bookmark.check();
      },

      check: function()  // #_library.bookmark.check  #bookmark.check  #check
      {
         $("#tdChapter").toggleClass("bookmark", (_var.bookmark.chapter == _var.bible.chapter));
      },

      set: function()  // #_library.bookmark.set  #bookmark.set  #set
      {
         _var.bookmark.chapter = _var.bible.chapter;
         _library.bookmark.check();
      },

      hand: function()  // #_library.bookmark.hand  #bookmark.hand  #hand
      {
         var index = 1 - _var.bookmark.hand.index;
         if (_var.bookmark.hand.chapter[index])
         {
            _library.bible.showChapter(_var.bookmark.hand.chapter[index]);
         }
      },

      back: function(__event, init)  // #_library.bookmark.back  #bookmark.back  #back
      {
         const CLICK =
         [
            {
               single: _library.bookmark.click,
               double: _library.bookmark.set
            },
            {
               single: _library.bookmark.hand,
               double: _library.bookmark.click
            }
         ];

         if (init)
         {
            window.addEventListener("popstate", _library.bookmark.back);
         }
         else
         {
            // Android Back Button...
            if (!($("#divSearchHelp").hasClass("none")))
            {
               $("#divSearchHelp").addClass("none");
            }
            else if (_library.notes.active())
            {
               _library.notes.close();
            }
            else
            {
               var click = CLICK[_const.BOOKMARK.back];
               if (_var.bookmark.timeout == undefined)
               {
                  _var.bookmark.timeout = window.setTimeout(
                     function()
                     {
                        _var.bookmark.timeout = undefined;
                        click.single();
                     }, _const.TIMEOUT.bookmark);
               }
               else
               {
                  window.clearTimeout(_var.bookmark.timeout);
                  _var.bookmark.timeout = undefined;
                  click.double();
               }
            }
         }
         window.history.pushState({}, "");
      }
   }
};