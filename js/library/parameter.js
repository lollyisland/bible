var ___parameter =
{
   parameter:
   {
      read: function(name, __default)  // #_library.parameter.read  #parameter.read  #read
      {
         if (_var.params.has(name))
         {
            var value = _var.params.get(name);
            if (__default !== undefined)
            {
               switch (typeof __default)
               {
                  case "boolean":
                  case "number":
                     value = JSON.parse(value);
                     break;
               }
            }
            return value;
         }
         else
         {
            return ((__default === undefined) ? "" : __default);
         }
      },

      write: function()  // #_library.parameter.write  #parameter.write  #write
      {
         var __data = 
         {
            "__user": _php.user,
            "inline": _php.options.inline,
            "highlight": _php.options.highlight,
            "footer": _php.options.footer,
            "theme": _php.options.theme,
            "chapter": _var.bible.chapter
         };
         $.ajax({
            type    : "POST",
            url     : "php/writeOptions.php",
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
                  }
               }
         });
      },

      options: // #_library.parameter.options  #parameter.options  #options
      {
         toggleInline: function() // #_library.parameter.options.toggleInline  #parameter.options.toggleInline  #options.toggleInline  #toggleInline
         {
            _php.options.inline = !(_php.options.inline);
            $("html").toggleClass("inline", _php.options.inline);
            _library.parameter.write();
            _library.bible.showChapter(undefined, undefined, true);
         },

         toggleHighlight: function() // #_library.parameter.options.toggleHighlight  #parameter.options.toggleHighlight  #options.toggleHighlight  #toggleHighlight
         {
            _php.options.highlight = !(_php.options.highlight);
            $("html").toggleClass("highlight", _php.options.highlight);
            _library.parameter.write();
            _library.bible.showChapter();
         },

         toggleFooter: function() // #_library.parameter.options.toggleFooter  #parameter.options.toggleFooter  #options.toggleFooter  #toggleFooter
         {
            _php.options.footer = !(_php.options.footer);
            $("html").toggleClass("footer", _php.options.footer);
            _library.parameter.write();
         },

         toggleTheme: function() // #_library.parameter.options.toggleTheme  #parameter.options.toggleTheme  #options.toggleTheme  #toggleTheme
         {
            _php.options.theme = ((_php.options.theme == "dark") ? "light" : "dark");
            $("html").toggleClass("dark", (_php.options.theme == "dark"));
            _library.parameter.write();
         }
      }
   }
};