const _const =
{
   KEYCODE:
   {
      ENTER: 13,
      ESC: 27,
      SPACE: 32,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      NUMPAD:
      {
         PLUS: 107,
         MINUS: 109
      }
   },
   UNICODE:
   {
   },
   TIMEOUT:
   {
      none: 0,
      repeat:
      {
         start: 500,
         interval: 30
      },
      cycle: 250,
      reload: 500,
      textareaBlur: 0,
      fade:
      {
         delay: 2000,
         duration: 400
      },
      notes:
      {
         keyword: 250,
         highlight: 1000,
         select: 500
      },
      continueLoading: 0,
      animation: 250,
      hideSelectCover: 100,
      menu:
      {
         hide: 500
      },
      header:
      {
         hide: 500
      },
      main:
      {
         hide: 500,
         refresh: 1000,
         ignore: 1000
      },
      lock: 500,
      search: 500,
      scrolling: 500,
      click: 500,
      mediaLoading: 1000,
      bookmark: 250,
      verse: 250,
      button:
      {
         highlight: 500
      },
      app:
      {
         reload: 100
      }
   },
   ZEBRA:
   {
      //position: ["center", "middle - 60"],
      position: ["center", "middle"],
      auto_close: 2000
   },
   SPEECH:
   {
      keyword: "over", // Possibility of editing notes using Voice Typing
      rate: // Milliseconds per character in manual scroll mode
      {
         slow: 50,
         normal: 60,
         fast: 70
      },
      scrollIntoViewOptions:
      {
         behavior: "smooth", 
         block: "center", 
         inline: "nearest"
      },
      continue:
      {
         label: "After Play Ends",
         id: "Continue",
         options:
         [
            {
               label: "Stop Playing (Default)",
               id: "StopPlaying",
               value: "StopPlaying"
            },
            {
               label: "Play Next Chapter",
               id: "ContinuePlaying",
               value: "ContinuePlaying"
            }
         ]
      },
      speaker:
      {
         label: "Speaker",
         id: "Speaker",
         options:
         [
            {
               label: "Alexander Scourby (Default)",
               id: "AlexanderScourby",
               value: "AlexanderScourby"
            },
            {
               label: "Max McLean",
               id: "MaxMcLean",
               value: "MaxMcLean"
            }
         ]
      }
   },
   ID:
   {
      group:
      [
         // _var.bible.groups
      ],
      testament:
      {
         old: "Old",
         new: "New"
      }

   },
   SEARCH:
   {
      filter:
      {
         label: "Search Filter",
         id: "Filter",
         options:
         [
            {
               group: "Bible",
               options:
               [
                  {
                     label: "All",
                     id: "All",
                     value: "A"
                  },
                  {
                     label: "Old Testament",
                     id: "OldTestament",
                     value: "OT"
                  },
                  {
                     label: "New Testament",
                     id: "NewTestament",
                     value: "NT"
                  }
               ]
            },

            {
               group: "Book",
               options:
               [
                  {
                     label: "Current",
                     id: "BookCurrent",
                     value: "BC"
                  },
                  {
                     label: "From",
                     id: "BookFrom",
                     value: "BF"
                  }/*,
                  {
                     label: "To",
                     id: "BookTo",
                     value: "BT"
                  }*/
               ]
            },

            {
               group: "Chapter",
               options:
               [
                  {
                     label: "Current",
                     id: "ChapterCurrent",
                     value: "CC"
                  },
                  {
                     label: "From",
                     id: "ChapterFrom",
                     value: "CF"
                  }/*,
                  {
                     label: "To",
                     id: "ChapterTo",
                     value: "CT"
                  }*/
               ]
            }
         ],
      },
      mode:
      {
         label: "Search Mode",
         id: "Mode",
         options:
         [
            {
               label: "Pro &bull; Regular Expression",
               id: "Advanced",
               value: "Advanced"
            },
            {
               label: "Standard &bull; Search Engine",
               id: "Normal",
               value: "Normal"
            },
            {
               label: "List &bull; Table of Matches",
               id: "List",
               value: "List"
            }
         ]
      },
      case:
      {
         label: "Case Sensitivity",
         id: "Case",
         options:
         [
            {
               label: "Case Insensitive",
               id: "CaseInsensitive",
               value: "CaseInsensitive"
            },
            {
               label: "Case Sensitive",
               id: "CaseSensitive",
               value: "CaseSensitive"
            }
         ]
      },
      index:
      {
         advanced: 0,
         normal: 1
      }
   },
   HIGHLIGHT:
   {
      // Refer to highlight.js
   },
   LAYOUT:
   {
      space: true,
      showStyles: true,
      scrollAccuracy: 1.5
   },
   REFERENCE:
   {
      citation: 0,  // A reference to a quote (almost verbatim)
      allusion: 1,  // A reference to a story, idea or event
      possible: 2   // A possible allusion
   },
   MENU:
   {
      link:
      {
         buttons:
            [
               ["verse", "copy"], //["verse", "find"],
               ["portion", "history"],
               ["notes", "strongs"], //["notes", "write"],
               ["speech", "find"],
               ["search", "filter"]
            ]
      }
   },
   CLIPBOARD:
   {
      type:
      {
         text: 0,
         html: 1
      }
   },
   LABEL:
   {
      clear: "Clear"
   },
   PARAMETER: // Parameter constant values passed to functions - just to show the meaning
   {
      unlink: true,
      link: false,
      init: true,
      timeout: true,
      show: true,
      hide: false,
      fade: true,
      force: true
   },
   VERSE:
   {
      class: ["selected", "range", "first", "last", "double"]
   },
   DEFAULT:
   {
      chapter: "Ge1"
   },
   NOTES:
   {
      action:
      {
         none: 0,
         add: 1,
         edit: 2,
         delete: 3
      },
      commentary:
      {
         label: "Commentary",
         id: "commentary",
         options:
         [
            {
               label: "Barnes' Notes",
               id: "barnes",
               value: "barnes"
            },
            {
               label: "Benson Commentary",
               id: "benson",
               value: "benson"
            },
            {
               label: "Biblical Illustrator",
               id: "illustrator",
               value: "illustrator"
            },
            {
               label: "Cambridge Bible for Schools and Colleges",
               id: "cambridge",
               value: "cambridge"
            },
            {
               label: "Clarke's Commentary",
               id: "clarke",
               value: "clarke"
            },
            {
               label: "Darby's Bible Synopsis",
               id: "darby",
               value: "darby"
            },
            {
               label: "Expositor's Bible Commentary",
               id: "expositors",
               value: "expositors"
            },
            {
               label: "Expositor's Dictionary of Texts",
               id: "edt",
               value: "edt"
            },
            {
               label: "Geneva Study Bible",
               id: "gsb",
               value: "gsb"
            },
            {
               label: "Gill's Bible Exposition",
               id: "gill",
               value: "gill"
            },
            {
               label: "Gray's Concise Bible Commentary",
               id: "gray",
               value: "gray"
            },
            {
               label: "Jamieson-Fausset-Brown",
               id: "jfb",
               value: "jfb"
            },
            {
               label: "Kingcomments Bible Studies",
               id: "king-en",
               value: "king-en"
            },
            {
               label: "Lange Commentary on the Holy Scriptures",
               id: "lange",
               value: "lange"
            },
            {
               label: "MacLaren Expositions Of Holy Scripture",
               id: "maclaren",
               value: "maclaren"
            },
            {
               label: "Matthew Henry Concise",
               id: "mhc",
               value: "mhc"
            },
            {
               label: "Matthew Henry Full",
               id: "mhcw",
               value: "mhcw"
            },
            {
               label: "Matthew Poole's Commentary",
               id: "poole",
               value: "poole"
            },
            {
               label: "Pulpit Commentary",
               id: "pulpit",
               value: "pulpit"
            },
            {
               label: "Pulpit Homiletics",
               id: "homiletics",
               value: "homiletics"
            },
            {
               label: "Sermon Bible - Nicoll",
               id: "sermon",
               value: "sermon"
            },
            {
               label: "Scofield Reference Notes",
               id: "sco",
               value: "sco"
            },
            {
               label: "Through the Bible Day by Day - Meyer",
               id: "ttb",
               value: "ttb"
            },
            {
               label: "Treasury of Scripture Knowledge",
               id: "tsk",
               value: "tsk"
            },
            {
               label: "Wesley's Notes",
               id: "wes",
               value: "wes"
            }
         ]
      }
   },
   BOOKMARK:
   {
      back: 1
   },
   SPARK:
   {
      highlight:
      {
         width: 20
      }
   },
   PARALLEL:
   {
      optgroups:
      [
         {
            group: "English Language",
            options:
            [
               {
                  value: "asv", 
                  label: "American Standard Version (ASV)"
               },
               {
                  value: "amp", 
                  label: "Amplified Bible (AMP)",
                  disabled: false
               },
               {
                  value: "csb", 
                  label: "Christian Standard Bible (CSB)"
               },
               {
                  value: "cev", 
                  label: "Contemporary English Version (CEV)",
                  disabled: false
               },
               {
                  value: "dby", 
                  label: "Darby Bible (DBY)",
                  shortLabel: "Darby"
               },
               {
                  value: "esv", 
                  label: "English Standard Version (ESV)"
               },
               {
                  value: "nasb", 
                  label: "New American Standard Bible (NASB)"
               },
               {
                  value: "net", 
                  label: "New English Translation (NET)"
               },
               {
                  value: "niv", 
                  label: "New International Version (NIV)"
               },
               {
                  value: "nkjv", 
                  label: "New King James Version (NKJV)"
               },
               {
                  value: "nlt", 
                  label: "New Living Translation (NLT)"
               },
               {
                  value: "nrsv", 
                  label: "New Revised Standard Version (NRSV)",
                  disabled: true
               },
               {
                  value: "rsv", 
                  label: "Revised Standard Version (RSV)"
               },
               {
                  value: "erb", 
                  label: "Rotherham's Emphasized Bible (ROTH)",
                  shortLabel: "Roth's"
               },
               {
                  value: "webster", 
                  label: "Webster's Revision (Webster)",
                  shortLabel: "Webster"
               },
               {
                  value: "web", 
                  label: "World English Bible (WEB)"
               },
               {
                  value: "ylt", 
                  label: "Young's Literal Translation (YLT)",
                  shortLabel: "Young's"
               }
            ]
         },
         {
            group: "Old Testament",
            options:
            [
               {
                  value: "lxx", 
                  label: "Septuagint (LXX)",
                  shortLabel: "Septuagint",
                  disabled: false
               }
            ]
         },
         {
            group: "Other Languages",
            options:
            [
               /*
               {
                  value: "por", 
                  label: "Portuguese (Brazil) (POR)", // Almeida Bible (POR)
                  shortLabel: "Portuguese",
                  disabled: false
               },
               */
               {
                  value: "arc", 
                  label: "Portuguese (Brazil) (ARC)", // Almeida Revista e Corrigida (ARC)
                  shortLabel: "Brazil"
               },
               {
                  value: "ceb", 
                  label: "Cebuano Bible (CEB)",
                  shortLabel: "Cebuano"
               },
               {
                  value: "tag", 
                  label: "Tagalog Bible (TAG)",
                  shortLabel: "Tagalog"
               }
            ]
         }
      ]
   },
   PORTION:
   {
      breakfast: 0,
      lunch: 1,
      dinner: 2
   },
   SELECT:
   {
      list:
      {
         max: 10 // While testing // 100
      }
   },
   HELP:
   {
      hint:
      [
         {
            selector: "#divHelp",
            message: "This shows that Help Hints are active"
         },
         {
            selector: "div.book.icon",
            message: "Tap the Book Icon to access the Verse Find feature"
         }
      ]
   },
   NAVIGATE:
   {
      navigate:
      {
         label: "Navigate",
         id: "Navigate",
         options:
         [
            {
               label: "Group",
               id: "Group",
               value: "Group"
            },
            {
               label: "Book",
               id: "Book",
               value: "Book"
            },
            {
               label: "Chapter",
               id: "Chapter",
               value: "Chapter"
            },
            {
               label: "Quote",
               id: "Quote",
               value: "Quote"
            },
            {
               label: "Random",
               id: "Random",
               value: "Random"
            }
         ]
      }
   },
   MACRODROID:
   {
      // The prefix in MacroDroid is unique to each phone
      //prefix: "https://trigger.macrodroid.com/bec8f8e8-47f3-4a73-af49-2ad7def1e7ca/" // Johnny's Galaxy S9+
      prefix: "https://trigger.macrodroid.com/ebe2fc36-274a-4155-880b-374b4e1ac8e7/" // Johnny's Galaxy S22 Ultra
   }
};
