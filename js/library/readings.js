var ___readings =
{
   readings:
   {
      init: function(__day)
      {
         __day = (__day ? __day : new Date());

         _var.bible.portion = _var.bible.readings[__day.getMonth()][__day.getDate() - 1];
         if (_var.bible.portion)
         {
            $(_var.select.portion).empty();
/*
            for (var index = 0; index < _var.bible.portion.length; index++)
            {
               var option = _library.common.__option(
                  {
                     value: _var.bible.portion[index].portion[0],
                     id: "optionPortion" + (index + 1),
                     label: _var.bible.portion[index].desc
                  });
               _var.select.portion.appendChild(option);
            }
*/
            var optgroup = _library.common.__optgroup(
               {
                  label: "Daily Readings",
                  bold: false,
                  uppercase: true
               });
            _var.select.portion.appendChild(optgroup);
            optgroup = _library.common.__optgroup(
               {
                  label: __day.format("dddd, d mmmm yyyy"),
                  bold: false,
                  uppercase: false,
                  spaced: false
               });
            _var.select.portion.appendChild(optgroup);
            for (var index = 0; index < _var.bible.portion.length; index++)
            {
               var option = _library.common.__option(
                  {
                     value: _var.bible.portion[index].portion[0],
                     id: "optionPortion" + (index + 1),
                     label: _var.bible.portion[index].desc
                  });
               optgroup.appendChild(option);

               $("div.portion > ul > li:nth-child(" + (index + 1) + ") td:last-child span").html(_var.bible.portion[index].desc);
            }
         }
      },

      change: function(__event)
      {
         var __day = new Date($(__event.target)[0].valueAsNumber);
         _library.readings.init(__day);
         _library.readings.check();
         return;

         // ### code from Readings (Old)...

            _dateDailyReadings = (date ? new Date(date) : new Date());
            ___for = (date ? "" : "inputDateReadings");
            if (date)
            {
               $("#labelDate img:first-child").addClass("hide");
               $("#labelDate img:last-child").removeClass("hide");
            }
            else
            {
               $("#labelDate img:first-child").removeClass("hide");
               $("#labelDate img:last-child").addClass("hide");
            }
            window.setTimeout(function() { $("#labelDate").attr("for", ___for); }, 200); // Need this delay to allow for touchend to finish
            refreshDailyReadings(true);

      },

      select: function(__event, index)
      {
         _library.bible.showChapter((__event ? __event.target.value : _var.bible.portion[index].portion[0]));
      },

      check: function()
      {
         //console.log($(_var.select.portion)[0].selectedIndex);
         $("#tdChapter").toggleClass("reading", ($(_var.select.portion)[0].selectedIndex >= 0));

         if ($("#tdChapter").hasClass("reading"))
         {
            $("#tdChapter").removeClass("count-2 count-3 count-4 count-5");
            var portion = _var.bible.portion[$(_var.select.portion)[0].selectedIndex].portion;
            if (portion.length > 1)
            {
               $("#tdChapter").addClass("count-" + portion.length);
            }
         }
      }
   }
};