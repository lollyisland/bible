var ___unicode =
{
   unicode: // #_library.unicode  #unicode
   {
      init: function() // #_library.unicode.init  #unicode.init  #init
      {
         //_const.UNICODE = _php.unicode;

         var __unicode =
         {
            NBSP: 0x00A0,
            BULLET: 0x2022,
            COMET: 0x2604,
            CROSSED_SWORDS: 0x2694,
            BALANCE_SCALE: 0x2696,
            TENT: 0x26FA,
            BLACK_NIB: 0x2712,

            ISRAEL: [0x1F1EE, 0x1F1F1],

            FIRST_QUARTER_MOON: 0x1F313,
            WINE_GLASS: 0x1F377,
            WHALE: 0x1F40B,
            CROWN: 0x1F451,
            PRINCESS: 0x1F478,
            FLEXED_BICEPS: 0x1F4AA,
            HUNDRED_POINTS: 0x1F4AF,
            SCROLL: 0x1F4DC,
            CARD_INDEX_DIVIDERS: 0x1F5C2,
            PRAY: 0x1F64F,
            BREAD: 0x1F956,
            LAB_COAT: 0x1F97C,
            OWL: 0x1F989,
            CRICKET: 0x1F997,
            BONE: 0x1F9B4,
            HEADSCARF: 0x1F9D5,
            ABACUS: 0x1F9EE,
            RECEIPT: 0X1F9FE
         }
         var __unicodeBooks =
         {
            GENESIS: "first quarter moon",
            EXODUS: "cricket",
            LEVITICUS: "balance scale",
            NUMBERS: "abacus",
            DEUTERONOMY: "scroll",

            JOSHUA: "crossed swords",
            JUDGES: "flexed biceps",
            RUTH: "woman with headscarf",
            "1 SAMUEL": "lab coat",
            "2 SAMUEL": "lab coat",
            "1 KINGS": "crown",
            "2 KINGS": "crown",
            "1 CHRONICLES": "card index dividers",
            "2 CHRONICLES": "card index dividers",
            EZRA: "black nib",
            NEHEMIAH: "wine glass",
            ESTHER: "princess",

            JOB: "tired face",
            PSALMS: "musical notes",
            PROVERBS: "right anger bubble",
            ECCLESIASTES: "family: man, boy",
            "SONG OF SOLOMON": "kiss mark",

            ISAIAH: "seedling",
            JEREMIAH: "hole",
            LAMENTATIONS: "sad but relieved face",
            EZEKIEL: "bone",
            DANIEL: "lion face",

            HOSEA: "lipstick",
            JOEL: "sheaf of rice",
            AMOS: "fire",
            OBADIAH: "oncoming fist",
            JONAH: "whale",
            MICAH: "mountain",
            NAHUM: "horse",
            HABAKKUK: "water wave",
            ZEPHANIAH: "wolf face",
            HAGGAI: "hammer and pick",
            ZECHARIAH: "straight ruler",
            MALACHI: "family: man, girl, boy",

            MATTHEW: "man: beard",
            MARK: "ox",
            LUKE: "lion face",
            JOHN: "eagle",

            ACTS: "anchor",

            ROMANS: "sweat droplets",
            "1 CORINTHIANS": "baguette bread",
            "2 CORINTHIANS": "eye",
            GALATIANS: "family: man, woman, girl, boy",
            EPHESIANS: "shield",
            PHILIPPIANS: "latin cross",
            COLOSSIANS: "milky way",
            "1 THESSALONIANS": "person in bed",
            "2 THESSALONIANS": "angry face with horns",
            "1 TIMOTHY": "man teacher",
            "2 TIMOTHY": "flexed biceps",
            TITUS: "wine glass",
            PHILEMON: "person running",
            HEBREWS: "flag: Israel",

            JAMES: "tongue",
            "1 PETER": "ewe",
            "2 PETER": "receipt",
            "1 JOHN": "globe showing Asia-Australia",
            "2 JOHN": "old woman",
            "3 JOHN": "old man",
            JUDE: "right-facing fist",

            REVELATION: "comet"
         };
         
         /*Object.assign(__unicode, __unicodeBooks);*/

         $.each(__unicode, 
            function(key, value)
            {
               _const.UNICODE[key] = _library.unicode.get(value);
            });
      },

      get: function(__id) // #_library.unicode.get  #unicode.get  #get
      {
         if (typeof __id == "object")
         {
            var text = "";
            for (var index = 0; index < __id.length; index++)
            {
               text = text + _library.unicode.get(__id[index]);
            }
            return text;
         }
         else if (typeof __id == "string")
         {
            var __emoji = ___emoji.find(
               function(emoji, index)
               {
                  return (emoji.name === __id);
               });
            return (__emoji ? __emoji.char : "");
         }
         else
         {
            return $("<decode>").html("&#" + __id + ";").text(); // NB: "<decode>" is just a dummy element 
         }
      }
   }
};