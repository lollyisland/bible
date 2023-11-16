var ___main =
{
   main:
   {
      show: function()
      {
         $("main").removeClass("hidden");
         $("main").addClass("touch");
         window.clearTimeout(_var.main.timeout.show);
         _var.main.timeout.show = window.setTimeout(
            function()
            {
               $("main").removeClass("touch");
            }, _const.TIMEOUT.main.hide);
      },

      refresh: function(delay)  // #_library.main.refresh  #main.refresh  #refresh
      {
         return; // ### I'm hiding the citations, paragraphs et al until the main swipe up/down functionality is completed

         if (_var.main.ignore)
         {
            if (_var.main.timeout.ignore === undefined)
            {
               _var.main.timeout.ignore = window.setTimeout(
                  function()
                  {
                     _var.main.ignore = false;
                     _var.main.timeout.ignore = undefined;
                  }, _const.TIMEOUT.main.ignore);
            }
            return;
         }
         //console.trace(); // This is a nice debugging tool besides console.log() of course

         window.clearTimeout(_var.main.timeout.refresh);
         _var.main.timeout.refresh = window.setTimeout(
            function()
            {
               var __selector = "main div.toggle";
               var __main = $("main")[0];
               var __outerHeight = 0;
               $(__selector).each(
                  function()
                  {
                     __outerHeight += $(this).outerHeight();
                  });
               var __none = (_var.bible.audio.playing || ((__main.scrollHeight - __outerHeight - __main.scrollTop) > __main.clientHeight));
               $(__selector).toggleClass("none", __none);
            }, ((delay === undefined) ? _const.TIMEOUT.main.refresh : delay));
      },

      heading:
      {
         resize: function() // #_library.main.heading.resize  #main.heading.resize  #heading.resize  #resize
         {
            var __max = 32;
            var __small = ($("main")[0].scrollTop > __max);
            _var.main.heading.fontSize = 1 + (__small ? 0 : ((__max - $("main")[0].scrollTop) / __max));
            $("div.heading").attr("style", "font-size: " + _var.main.heading.fontSize + "rem !important");
            $("div.heading").toggleClass("small", __small);

            _event.resize();
         }
      }
   }
};