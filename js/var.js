var _var =
{
   tmp:
   {
   },
   __event: null,
   sequence: 0,
   indexContinue: 0,
   bible: // #extend
   {
      readings: ___readings,
      portion: null,
      chapter: "", // Current chapter
      indexChapter: 0, // Index of first verse in current chapter
      verse:
      {
         count: 1, // Selected verse count (from first to last selected verse)
         history: [],
         focus: true,
         selection: "",
         timeout: undefined,
         summary:
         {
            summary: "",
            timeout: undefined
         },
         chapter:
         {
            last: ""
         }
      },
      verseCount: 0, // Number of verses in current chapter
      parallel:
      {
         version: "web"
      },
      audio:
      {
         playing: false,
         audio: null,
         soundFile: "",
         button: null,
         currentSecond: -1,
         audioPageTurn: [],
         indexPageTurn: 0,
         counter: [0, 0]
      }
   },
   search:
   {
      history: [],
      focus: true,
      r: null,
      searchWords: null,
      active: false,
      list: [],
      listIndex: -1,
      statistic:
      {
         range: 0,
         total: 0,
         current: 0
      },
      caseSensitive: false,
      timeout: undefined,
      startingBook: "",
      startingChapter: "",
      startingVerse: -1,
      repeat: false,
      autocomplete: 
      {
         enabled: false, // DO NOT SET TO true - Need to fix autocomplete bug - search term - sanct| - as soon as vertical bar is pressed, it causes out-of-memory error and freezes app
         searchText: "",
         r: null,
         match: "",
         typedText: ""
      },
      filter:
      {
         parent: null,
         label: ""
      },
      indexLast: -1
   },
   bookmark:
   {
      chapter: "",
      timeout: undefined,
      hand:
      {
         chapter: ["", ""],
         index: 0
      }
   },
   editor:
   {
      path: "quill_empty.txt",
      toolbar: null,
      quill: null,
      change: null,
      originalContents: null,
      placeholder: "",
      inline: []
   },
   notes:
   {
      list: [],  // Note file paths
      history: [],  // Long quotes associated with each note file
      action: _const.NOTES.action.none,
      focus: true
   },
   commentary:
   {
      lock: false
   },
   study:
   {
      url:
      {
         strongs: "https://www.biblestudytools.com/concordances/strongs-exhaustive-concordance/"
      },
      title: "",
      all: false
   },
   touch:
   {
      xDown: undefined,
      yDown: undefined,
      startTime: 0,
      endTime: 0,
      endFunction: null,
      altFunction: null,
      lock: false,
      playOnSelect: false,
      timeout: undefined,
      offset: 1,
      repeat:
      {
         active: false,
         element: null
      },
      mainScrollTop: 0
   },
   scroll:
   {
      ignore: false,
      timeout: undefined
   },
   click:
   {
      ignore: false,
      timeout: undefined
   },
   section:
   {
      header:
      {
         indexBar: 0,
         offset: 0,
         selector: "header, main > div.gap, #trLastUpdated"
      },
      editor:
      {
         height: 0
      }
   },
   select:
   {
      group: null,
      book: null,
      chapter: null,
      portion: null,
      filter: null,
      mode: null,
      case: null,
      continue: null,
      speaker: null,
      commentary: null,
      verseHistory: [null, null],
      notesHistory: null,
      searchHistory: null,
      parallelVersion: null,
      navigate: null,
      list:
      {
         element: null,
         pageOptions: [], // Previous and Next
         options: [],
         indexStart: 0, // Into list.options array, excluding list.pageOptions
         verses: []
      },
      listOptions: []
   },
   params: new URLSearchParams(window.location.search),
   zebraDialog: null,
   //select2: null,
   main:
   {
      timeout: 
      {
         show: undefined,
         refresh: undefined,
         ignore: undefined
      },
      ignore: false,
      heading:
      {
         fontSize: 2 // rem
      }
   },
   highlight:  // Refer to highlight.js
   {
      highlight: []
   },
   menu:
   {
      link:
      {
         positions: []
      }
   },
   offline:
   {
      key: "",
      value: "",
      count: 0
   },
   help:
   {
      hint:
      {
         active: false,
         element: null
      }
   }
};

(function()
{
   var extend =
   [
      _____bible,
      ___paragraphs,
      ___citations,
      ___summary
   ];

   Object.assign(_var.bible, ...extend);
})();
