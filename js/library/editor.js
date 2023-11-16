var ___editor =
{
   editor:
   {
      init: function(__event)
      {
         _var.editor.path = _library.parameter.read("path", _var.editor.path);

         _var.editor.toolbar = 
            (_library.parameter.read("toolbar", true) ?
               {
                  container: 
                     [
                        //["upload"],
                        ["bold", "italic", "underline", "strike"], 
                        //["blockquote", "code-block"], // These work, but the blockquote is ugly and the code-block potentially loses all your formatting

                        //[{ "header": 1 }, { "header": 2 }],
                        [{ "list": "ordered"}, { "list": "bullet" }],
                        [{ "align": [] }],
                        [{ "script": "sub"}, { "script": "super" }],
                        [{ "indent": "-1"}, { "indent": "+1" }],
                        ["link", "image"],
                        //[{ "direction": "rtl" }],

                        //[{ "size": ["small", false, "large", "huge"] }],
                        //[{ "header": [1, 2, 3, 4, 5, 6, false] }],

                        [{ "color": [] }, { "background": [] }],
                        //[{ "font": [] }],

                        ["divider"],

                        ["clean"]
                     ],
                  handlers:
                     {
                        upload: _library.editor.save,
                        divider: _library.editor.divider
                     }
               } : false);

         _class.Delta = Quill.import("delta");
         _class.BlockEmbed = Quill.import("blots/block/embed");
         _class.DividerBlot = class extends _class.BlockEmbed { };
         _class.DividerBlot.blotName = "divider";
         _class.DividerBlot.tagName = "hr";

         Quill.register(_class.DividerBlot);

         _var.editor.quill = new Quill("#divEditor",
            {
               modules:
                  {
                     toolbar: _var.editor.toolbar
                  },
               theme: "snow"
            });

         //_var.editor.quill.enable(!!(_var.toolbar));

         $(_var.editor.quill.root).addClass("special");

         // Make sure pasted text is plain text
         _var.editor.quill.clipboard.addMatcher(Node.ELEMENT_NODE, 
            function(node, delta)
            {
               var plaintext = $(node).text();
               return (new _class.Delta()).insert(plaintext);
            });

         _library.editor.load();

         _var.editor.change = new _class.Delta();
      },

      ping: function(path, callback)
      {
         var __data = 
         {
            path: path
         };
         $.post("php/quillPing.php",
            __data,
            function(data)
            {
               if (data == "Success")
               {
                  if (callback.success)
                  {
                     callback.success(path);
                  }
               }
               else
               {
                  if (callback.failure)
                  {
                     callback.failure(path);
                  }
               }
            });
      },

      load: function()
      {
         function __success(path)
         {
            var __data = 
            {
               path: _var.editor.path
            };
            $.post("php/quillLoad.php",
               __data,
               function(data)
               {
                  if (data)
                  {
                     _var.editor.quill.setContents(JSON.parse(data));
                     if (!(_var.editor.originalContents))
                     {
                        _var.editor.originalContents = _var.editor.quill.getContents();
                     }
                  }
                  _library.editor.setPlaceholder(_var.editor.placeholder);
                  _var.editor.quill.enable(true);
                  _var.bible.verse.count = 1;
                  $(_var.editor.quill.root).find("a").attr("contenteditable", "false");
                  _event.assignLink();
               });
         }

         function __failure(path)
         {
            _library.editor.setPlaceholder(_var.editor.placeholder);
            _var.editor.quill.enable(true);
         }

         _var.editor.quill.enable(false);
         _var.editor.placeholder = "Note for " + _var.bible.verse.selection;
         _library.editor.ping(_var.editor.path, {success: __success, failure: __failure});
         _var.editor.change = new _class.Delta();
      },

      save: function(callback)  // #_library.editor.save  #editor.save  #save
      {
         var text = _library.editor.getText();
         if (text.trim() == "")
         {
            _library.editor.clear();
            $.post("php/quillDelete.php",
               {
                  path: _var.editor.path
               },
               callback);
         }
         else if (_library.editor.changed())
         {
            $.post("php/quillSave.php",
               {
                  path: _var.editor.path,
                  data: JSON.stringify(_var.editor.quill.getContents())
               },
               callback);
            _var.editor.change = new _class.Delta();
         }
      },

      getText: function(trim)
      {
         var text = _var.editor.quill.getText();
         if (trim)
         {
            text = text.trim();
         }
         return text;
      },

      setText: function(text)
      {
         // We do it this way so that we can use the formatting from the original empty quill file (quill_empty.txt)
         _library.editor.clear();
         _var.editor.quill.insertText(0, text);
      },

      clear: function()  // #_library.editor.clear  #editor.clear  #clear
      {
         _var.editor.quill.setContents(_var.editor.originalContents);
         _var.editor.change = new _class.Delta();
      },

      changed: function()
      {
         return (_var.editor.change.length() > 0);
      },

      focus: function(start)
      {
         if (start)
         {
            _var.editor.quill.focus();
         }
         else
         {
            _var.editor.quill.setSelection(_var.editor.quill.getLength());
         }
      },

      blur: function()
      {
         _var.editor.quill.blur();
      },

      hasFocus: function()
      {
         return $(_var.editor.quill.root).is(":focus");
      },

      submit: function(voice)
      {
         var text = _library.editor.getText();

         // Don't allow empty speech bubbles
         if (text.trim() == "")
         {
            _library.editor.clear();
            return;
         }

         _library.editor.clear();
      },

      setPlaceholder: function(placeholder)
      {
         _var.editor.quill.root.dataset.placeholder = placeholder;// + "...";
      },

      keyword: function(delay)
      {
         var __text = _library.editor.getText(true);
         function __match()
         {
            return (__text.endsWith(" " + _const.SPEECH.keyword));
         }

         if (__match())
         {
            if (delay)
            {
               window.setTimeout(_library.editor.keyword, _const.TIMEOUT.notes.keyword);
            }
            else
            {
               _library.editor.setText(__text.substr(0, (__text.length - (_const.SPEECH.keyword.length + 1))));
               _library.editor.submit(true);
            }
         }
      },

      divider: function()
      {
         var range = _var.editor.quill.getSelection(true);
         _var.editor.quill.insertText(range.index, "\n", Quill.sources.USER);
         _var.editor.quill.insertEmbed(range.index + 1, "divider", true, Quill.sources.USER);
         _var.editor.quill.setSelection(range.index + 2, Quill.sources.SILENT);
      }
   }
};