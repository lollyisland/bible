var ___emoji =
{
   emoji: // #_library.emoji  #emoji
   {
      load: function() // #_library.emoji.load  #emoji.load  #load
      {
         return;
         var json = 
            (function()
            {
               var json = null;
               $.ajax({
                  async: false,
                  global: false,
                  url: "/content.json",
                  dataType: "json",
                  success: 
                     function(data)
                     {
                        json = data;
                     }
               });
               return json;
            })();
         console.log(json);
      }
   }
};