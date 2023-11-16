var ___offline =
{
   offline:
   {
      load: function(__callback)
      {
         function __load(indexBook)
         {
            indexBook = ((indexBook === undefined) ? 0 : indexBook);

            _var.offline.key = "bibles/kjv/" + _var.bible.__books[indexBook] + ".data";
            _var.offline.value = "";

            function __finally()
            {
               _var.bible.verses.push.apply(_var.bible.verses, _var.offline.value.split("\n"));
               indexBook++;
               if (indexBook < _var.bible.__books.length)
               {
                  __load(indexBook);
               }
               else
               {
                  console.log(_var.offline.count + " offline books were loaded!");
                  __callback();
               }
            }

            function __success(response)
            {
               if (response.replace(/<\/?b>/g, "").substr(0, 5) == "Error")
               {
                  console.error(response);
               }
               else if (response.replace(/<\/?b>/g, "").substr(0, 7) == "Warning")
               {
                  console.warning(response);
               }
               else
               {
                  _var.offline.value = response;
                  localforage.setItem(_var.offline.key, _var.offline.value).
                     then(
                        function()
                        {
                           __finally();
                        });

               }
            }

            localforage.
               setDriver(
                  [
                     localforage.INDEXEDDB,
                     localforage.WEBSQL,
                     localforage.LOCALSTORAGE
                  ]).
               then(
                  function()
                  {
//   localforage.removeItem(_var.offline.key).then(function(){ // ### Remove this line after testing ###
//   localforage.clear().then(function(){ 
                     localforage.getItem(_var.offline.key).
                        then(
                           function(__value)
                           {
                              // Replace XXX with, eg. Deu, to update the offline copy of the book [MQUPDATE]
                              let updateAll = false;
                              if (updateAll || (_var.offline.key == "bibles/kjv/XXX.data"))
                              {
                                 __value = "";
                              }

                              if (__value)
                              {
                                 _var.offline.value = __value;
                                 _var.offline.count++;

                                 __finally();
                              }
                              else
                              {
                                 $.ajax(
                                    {
                                       type: "POST",
                                       url: "php/bookLoad.php",
                                       data: 
                                          {
                                             book: _var.bible.__books[indexBook],
                                             version: _var.bible.__version[_var.bible.__books[indexBook]]
                                          },
                                       success: __success
                                    }
                                 );

                              }
                           });
//   }); // ### Remove this line after testing ###
                  });
         }

         __load();
      }
   }
};