(function()
{
   Object.assign(Number.prototype,
      {
         random: function()
         {
            return Math.min(Math.floor(Math.random() * (this + 1)), this);
         },

         ordinalIndicator: function()
         {
            return ["th", "st", "nd", "rd"][this % 10 > 3 ? 0 : (this % 100 - this % 10 != 10) * this % 10];
         },

         pad: function(digits)
         {
            var __number = String(this);
            if (__number.length < digits)
            {
               __number = ("0").repeat(digits - __number.length) + __number;
            }
            return __number;
         },

         expand: function()
         {
            function __part(__n, id)
            {
               const and = "( and)? ";

               var index = Number(__n);
               var __a = a[index];
               if ((index == 1) && id)
               {
                  __a = "(one |an |a )";
               }

               var result = 
                  (
                     (__n != 0) ? 
                        (
                           (
                              __a || 
                              (b[__n[0]] + and + a[__n[1]])
                           ) + 
                           (
                              id ? 
                                 (id + and) :
                                 ""
                           )
                        ) : 
                        ""
                  );
               return result;
            }

            var __number = String(this);
            var a = 
               [
                  "", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", 
                  "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "
               ];
            var b = ["", "", "twenty", "thirty", "forty", "fifty", "(sixty|threescore)", "(seventy|threescore and ten)", "(eighty|fourscore)", "ninety"];

            if (__number.length > 9)
            {
               return "overflow";
            }
            var n = ("000000000" + __number).substr(-9).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
            if (!n)
            {
               return;
            }
            var str = "";
            str += __part(n[1], "hundred");
            str += __part(n[2], "million");
            str += __part(n[3], "hundred");
            str += __part(n[4], "thousand");
            str += __part(n[5], "hundred");
            str += __part(n[6], "");
            return str.trim();
         }
      });

   Object.assign(String.prototype, 
      {
         capitalize: function()
         {
            return this.charAt(0).toUpperCase() + this.slice(1);
         },

         trim: function()
         {
            return this.replace(/^\s+|\s+$/g, "");
         },

         ltrim: function()
         {
            return this.replace(/^\s+/, "");
         },

         rtrim: function()
         {
            return this.replace(/\s+$/, "");
         },

         copy: function()
         {
            return (" " + this).slice(1);
         },

         preg_split: function(separator, limit, flags)
         {
            var __split =
            {
               string: this.copy(),
               separator: separator,
               limit: limit
            }
            if (separator instanceof RegExp)
            {
               __split.separator = new RegExp(__split.separator.source, __split.separator.flags + "g");
               __split.string = __split.string.replace(__split.separator, _php.uniqid);
               __split.separator = _php.uniqid;
            }
            var result = __split.string.split(__split.separator, __split.limit);
            if (flags && flags.PREG_SPLIT_NO_EMPTY)
            {
               result = result.remove("");
            }
            return result;
         },

         reverse: function()
         {
            return this.split("").reverse().join("");
         }
      });

   Object.assign(Array.prototype,
      {
         trim: function()
         {
            return this.map(s => s.trim());
         },

         empty: function()
         {
            this.length = 0;
         },

         equals: function(__array)
         {
            return ((this.length === __array.length) && this.every(function(value, index) { return value === __array[index]}));
         },

         unique: function(numeric)
         {
            var __array = this.concat();
            for (var i = 0; i < __array.length; ++i)
            {
               for (var j = (i + 1); j < __array.length; ++j)
               {
                  if (__array[i] === __array[j])
                  {
                     __array.splice(j--, 1);
                  }
               }
            }
            if (numeric)
            {
               return __array.sort(function(a, b) { return a - b; });
            }
            else
            {
               return __array.sort();
            }
         },

         toLowerCase: function()
         {
            return (this).map(x => x.toLowerCase());
         },

         toUpperCase: function()
         {
            return (this).map(x => x.toUpperCase());
         },

         remove: function()
         {
            var values = arguments;
            var length = values.length;
            var value;
            var index;
            while (length && this.length)
            {
               value = values[--length];
               while ((index = this.indexOf(value)) !== -1)
               {
                  this.splice(index, 1);
               }
            }
            return this;
         }
      });

   Object.assign(jQuery.prototype, // Alias for $.fn
      {
         selectText: function()
         {
            this.find("input").each(
               function()
               {
                  if (($(this).prev().length == 0) || !($(this).prev().hasClass("p_copy")))
                  {
                     $("<p class='p_copy' style='position: absolute; z-index: -1;'></p>").insertBefore($(this));
                  }
                  $(this).prev().html($(this).val());
               });
            var element = this[0];
            if (document.body.createTextRange)
            {
               var range = document.body.createTextRange();
               range.moveToElementText(element);
               range.select();
            }
            else if (window.getSelection)
            {
               var selection = window.getSelection();
               var range = document.createRange();
               range.selectNodeContents(element);
               selection.removeAllRanges();
               selection.addRange(range);
            }
         },

         visible: function()
         {
            return this.css("visibility", "visible").removeClass("__invisible");
         },

         invisible: function()
         {
            return this.css("visibility", "hidden").addClass("__invisible");
         },

         toggleVisibility: function()
         {
            return this.css("visibility", 
               function(i, visibility)
               {
                  return ((visibility == "visible") ? "hidden" : "visible");
               });
         },

         ignore: function(__selector)
         {
            return this.clone().find(__selector || ">*").remove().end();
         }
      });
})();
