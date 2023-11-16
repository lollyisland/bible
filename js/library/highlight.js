/*
   hsla(hue, saturation, lightness, alpha)
      * Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.
      * Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
      * Lightness is also a percentage; 0% is black, 100% is white.
      * Alpha defines the opacity; a number between 0.0 (fully transparent) and 1.0 (fully opaque).
*/
_const.HIGHLIGHT.colour =
{
   crimson:    [0, "100%", "30%"],
   blood:      [0, "100%", "25%"],
   blue:       [210, "100%", "50%"],
   gold:       [35, "100%", "50%"],
   grass:      [120, "100%", "25%"],
   green:      [120, "100%", "38%"],
   guava:      [0, "34%", "63%"],
   ice:        [200, "100%", "63%"],
   lavender:   [260, "100%", "63%"],
   pool:       [180, "100%", "25%"],
   purple:     [300, "100%", "25%"],
   raspberry:  [345, "100%", "50%"],
   spearmint:  [160, "100%", "38%"],
   white:      [0, "0%", "100%"]
};

_const.HIGHLIGHT.index =
{
   expression: 0,
   style: 1,
   filter: 2,
   class: 3,

   __filter:
   {
      book: 0,
      chapter: 1,
      verse: 2
   }
};

_const.HIGHLIGHT.filter =
{
   all: "A",
   oldTestament: "OT",
   newTestament: "NT"
};

_var.verseRegularExpression = null;

var ___highlight =
{
   highlight:
   {
      init: function()
      {
         /*
         Syntax:
         [
            Regular Expression, 
            Style Declarations, 
            Filter ("A" = All Bible, "OT" = Old Testament, "NT" = New Testament, ["<Book>"[, "<Chapter>"[, "<Verse>"]]])
         ]

         Example:
         [
            /\b(Jesus|Jesus Christ|Lord Jesus Christ|Lord|Christ)\b/g,
            "background: rgba(128, 0, 128, 1.0)",
            "NT"
         ]
         */
         _var.highlight.highlight = 
         [
            [
               /\b(\w*faith\w*)\b/gi,
               _library.highlight.getBackgroundColour("gold"),
               _const.HIGHLIGHT.filter.all,
               "gold"
            ],
            [
               /\b(\w*hope\w*)\b/gi,
               _library.highlight.getBackgroundColour("green"),
               _const.HIGHLIGHT.filter.all,
               "green"
            ],
            [
               ///\b(\w*love\w*)\b/gi,
               /\b([ABD-Zabd-z]*love\w*)\b/gi, // Prevent highlighting of the word "cloven" and "clovenfooted"
               _library.highlight.getBackgroundColour("blood"),
               _const.HIGHLIGHT.filter.all,
               "blood"
            ],
            [
               /\b(God|GOD|Lord GOD|JEHOVAH|JAH|Father|LORD|The LORD's|the LORD's|The LORD|the LORD|LORD of hosts)\b/g,
               _library.highlight.getBackgroundColour("blue"),
               _const.HIGHLIGHT.filter.oldTestament,
               "blue"
            ],
            [
               /\b(God|Lord God|Lord thy God|Father)\b/g,
               _library.highlight.getBackgroundColour("blue"),
               _const.HIGHLIGHT.filter.newTestament,
               "blue"
            ],
            [
               /\b(Lord Jesus Christ|Jesus Christ|Christ Jesus|Lord(?! God)|Lord(?! thy God)|Jesus|Christ|Son of God|Son of man|Son of the living God)\b/g, // Refer to "negative lookahead assertion" [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions]
               _library.highlight.getBackgroundColour("purple"),
               _const.HIGHLIGHT.filter.newTestament,
               "purple"
            ],

            // Genesis 1 & 2 ...
            [
               /\b(first day|second day|third day|fourth day|fifth day|sixth day|seventh day)\b/gi,
               _library.highlight.getTextUnderline("white", {"wavy": true}),
               [["Genesis", 1], ["Genesis", 2]],
               "white"
            ],
            [
               /\b(And God said|And the LORD God said)\b/gi,
               _library.highlight.getTextUnderline("blue", {"wavy": true}),
               [["Genesis", 1], ["Genesis", 2]],
               "blue"
            ],

            // Samuel, Kings & Chronicles ...
            [
               /\b(did|doing) that which was right in the (eyes|sight) of the LORD\b/g,
               _library.highlight.getTextUnderline("green"),
               [["1 Samuel"], ["2 Samuel"], ["1 Kings"], ["2 Kings"], ["1 Chronicles"], ["2 Chronicles"]],
               "green"
            ],
            [
               /\b((wrought|work|was|did|doing|do) (that which was )?(evil|wicked|wickedness)|(the evil that he did)|(did not that which was right)) in the (eyes|sight) of the LORD\b/g,
               _library.highlight.getTextUnderline("blood"),
               [["1 Samuel"], ["2 Samuel"], ["1 Kings"], ["2 Kings"], ["1 Chronicles"], ["2 Chronicles"]],
               "blood"
            ],

            // Psalm 110 ...
            [
               /\b(Lord)\b/g,
               _library.highlight.getBackgroundColour("purple"),
               ["Psalm", 110],
               "purple"
            ],
            /* This was the ultimate/definitive test to implement individual verse highlighting
            [
               /\b(right hand)\b/g,
               _library.highlight.getBackgroundColour("raspberry"),
               ["Psalm", 110, 1]
            ],
            [
               /\b(right hand)\b/g,
               _library.highlight.getBackgroundColour("green"),
               ["Psalm", 110, 5]
            ],
            */

            // Psalm 119 ...
         /*   [
               /\b(ALEPH|BETH|GIMEL|DALETH|HE|VAU|ZAIN|CHETH|TETH|JOD|CAPH|LAMED|MEM|NUN|SAMECH|AIN|PE|TZADDI|KOPH|RESH|SCHIN|TAU)\b/g,
               _library.highlight.getBorderColour("blue"),
               ["Psalm", 119]
            ],*/
            [
               /\b(way|ways|law|testimonies|testimony|precepts|statutes|commandments|commandment|commanded|judgments|judgment|word|words|works|ordinances)\b/gi,
               _library.highlight.getTextUnderline("blue", {"wavy": true}),
               ["Psalm", 119],
               "blue"
            ],

            // Matthew 11:25; Luke 10:21 ...
            [
               /\b(Lord)\b/g,
               _library.highlight.getBackgroundColour("blue"),
               [["Matthew", 11, 25], ["Luke", 10, 21]],
               "blue"
            ],

            // Galatians 5 ...
            [
               /\b(\w*love\w*)\b/gi,
               _library.highlight.getBackgroundColour("blood", {"spotlight": true}),
               ["Galatians", 5, 22],
               "blood"
            ],
            [
               /\b(\w*joy\w*)\b/gi,
               _library.highlight.getBackgroundColour("raspberry", {"spotlight": true}),
               ["Galatians", 5],
               "raspberry"
            ],
            [
               /\b(\w*peace\w*)\b/gi,
               _library.highlight.getBackgroundColour("grass", {"spotlight": true}),
               ["Galatians", 5],
               "grass"
            ],
            [
               /\b(\w*longsuffering\w*)\b/gi,
               _library.highlight.getBackgroundColour("ice", {"spotlight": true}),
               ["Galatians", 5],
               "ice"
            ],
            [
               /\b(\w*gentleness\w*)\b/gi,
               _library.highlight.getBackgroundColour("lavender", {"spotlight": true}),
               ["Galatians", 5],
               "lavender"
            ],
            [
               /\b(\w*goodness\w*)\b/gi,
               _library.highlight.getBackgroundColour("pool", {"spotlight": true}),
               ["Galatians", 5],
               "pool"
            ],
            [
               /\b(\w*faith\w*)\b/gi,
               _library.highlight.getBackgroundColour("gold", {"spotlight": true}),
               ["Galatians", 5, 22],
               "gold"
            ],
            [
               /\b(\w*meekness\w*)\b/gi,
               _library.highlight.getBackgroundColour("spearmint", {"spotlight": true}),
               ["Galatians", 5],
               "spearmint"
            ],
            [
               /\b(\w*temperance\w*)\b/gi,
               _library.highlight.getBackgroundColour("guava", {"spotlight": true}),
               ["Galatians", 5],
               "guava"
            ],
            [
               /\b(adultery|fornication|uncleanness|lasciviousness|idolatry|witchcraft|hatred|variance|emulations|wrath|strife|seditions|heresies|envyings|murders|drunkenness|revellings)\b/gi,
               _library.highlight.getBackgroundColour("crimson", {"mark": true}),
               ["Galatians", 5],
               "crimson"
            ],
            [
               /\b(lust of the flesh|works of the flesh|crucified the flesh|flesh)\b/gi,
               _library.highlight.getTextUnderline("crimson", {"wavy": true}),
               ["Galatians", 5],
               "crimson"
            ],
            [
               /\b(Spirit|walk in the Spirit|fruit of the Spirit|live in the Spirit)\b/gi,
               _library.highlight.getTextUnderline("blue", {"wavy": true}),
               ["Galatians", 5],
               "blue"
            ]
         ];
      },

      __getColour: function(__array) // Array of array of pairs - id, opacity
      {
         var __colour = [];
         for (var index = 0; index < __array.length; index++)
         {
            var id = __array[index][0];
            var opacity = __array[index][1];
            __colour[index] = "hsla(" + ((typeof id == "string") ? _const.HIGHLIGHT.colour[id] : id).join(", ") + ", " + opacity + ")";
         }
         var colour = ((__colour.length == 1) ? __colour[0] : "radial-gradient(" + __colour.join(", ") + ")");
         return colour;
      },

      getBorderColour: function(id, borderWidth)
      {
         var __array = [[id, 1]];
         //var borderColour = "margin: calc(-2px -3px); border: 2px solid " + _library.highlight.__getColour(__array); // .spanHighlight has margin -3px
         var borderColour = "margin: -5px; border: 2px solid " + _library.highlight.__getColour(__array); // .spanHighlight has margin -3px
         //var borderColour = "outline: 2px solid " + _library.highlight.__getColour(__array); // .spanHighlight has margin -3px
         if (borderWidth)
         {
            //borderColour += "; outline-width: " + borderWidth;
         }
      //console.log(borderColour);
         return borderColour;
      },

      getBackgroundColour: function(id, __options) // id can be either a string from the _const.HIGHLIGHT.colour object or a HSL array
      {
         __options = ((__options === undefined) ? [] : __options);

         var opacity = __options["opacity"];
         var spotlight = __options["spotlight"];
         var mark = __options["mark"];

         opacity = ((opacity === undefined) ? 1 : opacity);
         spotlight = ((spotlight === undefined) ? false : spotlight);
         mark = ((mark === undefined) ? false : mark);

         var __array = [[id, opacity]];
         var backgroundColour = "background: ";
         var colour = _library.highlight.__getColour(__array);
         if (mark)
         {
            // NB: 100deg is getting toward the width limit of a 3 letter word
            backgroundColour += "linear-gradient(100deg, transparent 0%, transparent 40%, " + colour + " 40%, " + 
               colour + " 60%, transparent 60%, transparent 100%); padding: 2px 3px; margin: -2px -3px;";
         }
         else
         {
            if (spotlight)
            {
               var hsl = ((typeof id == "string") ? _const.HIGHLIGHT.colour[id] : id);
               var lightness = (100 - ((100 - parseInt(hsl[2])) / 2)) + "%";
               __array.unshift([hsl.slice(0, -1).concat([lightness]), opacity]);
               colour = _library.highlight.__getColour(__array);
            }
            backgroundColour += colour;
         }
         return backgroundColour;
      },

      getTextUnderline: function(id, __options)//, {"wavy": true})
      {
         __options = ((__options === undefined) ? [] : __options);

         var wavy = __options["wavy"];

         wavy = ((wavy === undefined) ? false : wavy);

         //var textUnderline = "text-decoration: underline; text-decoration-color: " + _library.highlight.__getColour([[id, 1]]) + 
         //   (wavy ? "; text-decoration-style: wavy" : "") +
         //   "; text-decoration-skip-ink: none"; // This didn't fix the bug in Psalm 119:33
         //   //"; padding: 0px; margin: 0px"; // This didn't fix the bug in Psalm 119:33

         //var textUnderline = (wavy ? "background: url(images/wavy_" + id + ".png) bottom/0.3125em repeat-x;" :
         var textUnderline = (wavy ? "background: url(images/wavy_" + id + ".png) 50% 90%/0.3125em repeat-x;" :
            "text-decoration: underline; text-decoration-color: " + _library.highlight.__getColour([[id, 1]]) + "; text-decoration-skip-ink: none");

         return textUnderline;
      },

      /* ### I DON'T THINK THIS FUNCTION IS USED ANY MORE ###
      highlight: function(text, __text, __underline) // Need to put these in a text file different for each user
      {
         text = text.replace(/<\/?(i|em)>/g, "");
         var indexRegularExpression = 0;
         var indexStyleDeclarations = 1;
         var indexFilter = 2;
         for (var indexHighlight = 0; indexHighlight < _highlight.length; indexHighlight++)
         {
            var doHighlight = false;
            if (typeof _highlight[indexHighlight][indexFilter] == "string")
            {
               switch (_highlight[indexHighlight][indexFilter])
               {
                  case _const.HIGHLIGHT.filter.all:
                     doHighlight = true;
                     break;
                  case _const.HIGHLIGHT.filter.oldTestament:
                     if (!(isNewTestament()))
                     {
                        doHighlight = true;
                     }
                     break;
                  case _const.HIGHLIGHT.filter.newTestament:
                     if (isNewTestament())
                     {
                        doHighlight = true;
                     }
                     break;
               }
            }
            else // An array to define a quote or quotes
            {
               // An array to define a quote
               if (typeof _highlight[indexHighlight][indexFilter][_indexBook] == "string")
               {
                  doHighlight = __checkHighlight(_highlight[indexHighlight][indexFilter], _highlight[indexHighlight][indexRegularExpression], __text);
               }
               // An array to define several quotes
               else
               {
                  for (var indexQuote = 0; indexQuote < _highlight[indexHighlight][indexFilter].length; indexQuote++)
                  {
                     doHighlight = __checkHighlight(_highlight[indexHighlight][indexFilter][indexQuote], _highlight[indexHighlight][indexRegularExpression], __text);
                     if (doHighlight)
                     {
                        break;
                     }
                  }
               }
               // Verse filtering not yet implemented
            }
            if (doHighlight)
            {
               var underlineStyle = (_highlight[indexHighlight][indexStyleDeclarations].indexOf("underline") != -1);
               if ((__underline && underlineStyle) || (!__underline && !underlineStyle))
               {
                  text = text.replace((_var.verseRegularExpression ? _var.verseRegularExpression : _highlight[indexHighlight][indexRegularExpression]), 
                     "<span class='spanHighlight' style='" + _highlight[indexHighlight][indexStyleDeclarations] + "'>$1</span>");
                  _var.verseRegularExpression = null;
               }
            }
         }
         return text;
      }, ### */

      __checkHighlight: function(quoteArray, regularExpression, __text)
      {
         var doHighlight = false;
         if (quoteArray[_const.HIGHLIGHT.index.__filter.book] == _var.bible.books[_var.select.book.value])
         {
            if (quoteArray.length > 1)
            {
               if (quoteArray[_const.HIGHLIGHT.index.__filter.chapter] == _var.select.chapter.value)
               {
                  if (quoteArray.length > 2)
                  {
                     var verse = quoteArray[_const.HIGHLIGHT.index.__filter.verse];
                     if (__text == null) // Applies to current verse. We could also determine using _currentVerse whether we are looking at versesAbove or versesBelow
                     {
                        if (verse == _currentVerse)
                        {
                           doHighlight = true;
                        }
                     }
                     else if (verse <= _var.bible.verseCount) // Check that the user has entered a valid verse number
                     {
                        doHighlight = true;
                        /*var pattern = regularExpression.source + 
                           ("(?!.*spanVerse" + formatNumber(verse, 3) + ")") + // Check that the verse number isn't after (therefore it's before)
                           ("(?=.*spanEnd" + formatNumber(verse, 3) + ")"); // Check that the next verse number is after
                        var flags = regularExpression.flags;
                        var __regularExpression = RegExp(pattern, flags);
                        doHighlight = __regularExpression.test(__text);
                        if (doHighlight)
                        {
                           _var.verseRegularExpression = __regularExpression;
                        }*/
                     }
                  }
                  else
                  {
                     doHighlight = true;
                  }
               }
            }
            else
            {
               doHighlight = true;
            }
         }
         return doHighlight;
      }
   }
};