var ___select =
{
   select:
   {
      change:
      {
         group: function(__event)
         {
            _var.select.book.value = _var.select.group.value;
            _library.select.change.book();
         },

         book: function(__event)
         {
            _var.select.chapter.value = "1";
            _library.select.change.chapter();
         },

         chapter: function(__event)
         {
            _library.bible.showChapter(_var.select.book.value + _var.select.chapter.value);
         }
      },

      list:
      {
         change: function(__event)
         {
            function __selectVerse()
            {
               var quote = _var.select.list.element.value;

               _var.search.indexLast = _var.bible.quotes.indexOf(quote);

               _library.bible.showChapter(quote);

               _var.search.listIndex = _var.select.list.indexStart + ((_var.select.list.element.selectedIndex - 1) / 2);
            }

            var mult = 1;
            var last = false;
            switch (_var.select.list.element.value)
            {
               case "previous":
                  mult = -1;
               case "next":
                  if (_var.search.list.length > _const.SELECT.list.max)
                  {
                     var __select = _var.select.list.element;
                     $(__select).empty();
                     __select.appendChild(_var.select.list.pageOptions[0]);
                     var indexStart = _var.select.list.indexStart + (_const.SELECT.list.max * mult);
                     if (indexStart < 0)
                     {
                        if (_var.select.list.indexStart > 0)
                        {
                           indexStart = 0;
                        }
                        else
                        {
                           indexStart = _var.select.list.options.length - _const.SELECT.list.max;
                           last = true;
                        }
                     }
                     if (!(_var.select.list.options[indexStart]))
                     {
                        indexStart = 0;
                     }
                     _var.select.list.indexStart = indexStart;
                     for (var indexList = indexStart; indexList < (indexStart + _const.SELECT.list.max); indexList++)
                     {
                        if (_var.select.list.options[indexList])
                        {
                           __select.appendChild(_var.select.list.options[indexList]);

                           var option = _library.common.__option(
                              {
                                 value: "Verse" + indexList,
                                 id: "optionListVerse" + indexList,
                                 label: _var.select.list.verses[indexList],
                                 disabled: true
                              });
                           __select.appendChild(option);
                        }
                     }

                     __select.appendChild(_var.select.list.pageOptions[1]);

                     __select.selectedIndex = (last ? ((__select.length - 1) - 1) : 1);

                     __selectVerse();
                  }
                  break;
               default:
                  __selectVerse();
                  break;
            }
            _library.spark.statistic();
            _library.spark.update();
         }
      }
   }
};