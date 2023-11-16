var ___spark =
{
   spark: // #_library.spark  #spark
   {
      update: function() // #_library.spark.update  #spark.update #update
      {
         _var.search.active = (_var.search.statistic.total > 0);

         $(".spark").toggleClass("none", !_var.search.active);

         //$("#selectSearchList")[0].disabled = !_var.search.active;
         //$("#tdSearchList").toggleClass("disabled2", !_var.search.active);
         //$("#selectSearchList").toggleClass("disabled", !_var.search.active);

         var value = (!_var.search.active ? 0 : (_var.search.statistic.current / _var.search.statistic.total));

         var widthLeft = (value * 100);
         var widthRight = ((1 - value) * 100);

         $("#divSparkLeft").css(
            {
               width: "calc(" + (widthLeft + "%") + " - var(--spark-gap))"
            });
         $("#divSparkRight").css(
            {
               width: "calc(" + (widthRight + "%") + " - var(--spark-gap))",
               borderWidth: ((widthRight == 0) ? 0 : 1) + "px"
            });

         widthLeft = $("#divSparkLeft")[0].clientWidth;
         var widthHighlight = Math.min(widthLeft * 1.0, _const.SPARK.highlight.width);
         $("#divSparkHighlight").css(
            {
               width: (widthHighlight + "px"),
               left: (($("#divSpark")[0].offsetLeft + $("#divSpark td:nth-child(2)")[0].offsetLeft + widthLeft - widthHighlight + 1) + "px")
            });

         // I tried the non-breaking hyphen "&#8209;" but it caused a vertical offset with the spark display, so I'm using the bullet character instead
         $("#divStatCurrent").html(
            ((_var.search.statistic.range > 0) ? 
               (_var.search.statistic.range.toLocaleString() + "&nbsp;&bullet;&nbsp;") : 
               "") + 
            _var.search.statistic.current.toLocaleString());
         $("#divStatTotal").text(_var.search.statistic.total.toLocaleString()); // Calling toLocaleString will apply thousand comma separators
         $("#divStatCurrent, #divStatTotal").css({visibility: (!_var.search.active ? "hidden" : "")});
      },

      reset: function() // #_library.spark.reset  #spark.reset #reset
      {
         _var.search.statistic.total = 0;
         _library.spark.update();
      },

      statistic: function(offset) // #_library.spark.statistic  #spark.statistic #statistic
      {
         var max = _var.search.listIndex + (offset ? 0 : 1);
         _var.search.statistic.current = 0;
         for (var index = 0; index < max; index++)
         {
            _var.search.statistic.current += _var.search.list[index][1];
         }
      }
   }
};