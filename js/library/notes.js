var ___notes =
{
   notes:
   {
      change: function(__event) // #_library.notes.change  #notes.change  #change
      {
         _library.verse.select(__event.target.value);
         window.setTimeout(
            function()
            {
               _library.notes.write();
            }, _const.TIMEOUT.notes.select);
      },

      update: function(__verse) // #_library.notes.update  #notes.update  #update
      {
         function __appendOption(value, label)
         {
            var option = _library.common.__option(
               {
                  value: value,
                  label: ((label === undefined) ? value : label)
               });
            _var.select.notesHistory.appendChild(option);
         }

         $(_var.select.notesHistory).empty();
         //__appendOption(_const.LABEL.clear, _library.common.__spaced(_const.LABEL.clear, true));
         if (_var.notes.history.length)
         {
            for (var index = 0; index < _var.notes.history.length; index++)
            {
               __appendOption(_var.notes.history[index]);
            }
            $(_var.select.notesHistory).val(__verse);
         }
      },

      read: function(path, div, index, heading)
      {
         var __data = 
         {
            path: path
         };
         $.post("php/quillLoad.php",
            __data,
            function(data)
            {
               if (data)
               {
                  _var.editor.inline[index] = new Quill(div,
                     {
                        readOnly: true
                     });
                  _var.editor.inline[index].setContents(JSON.parse(data));
                  //$("<div class='inlineHeading'>" + heading + "<hr/></div>").prependTo(div);
                  $("<div class='inlineHeading'>" + heading + "</div>").prependTo(div);

                  $(_var.editor.inline[index].root).addClass("special");

                  _event.assignDynamic();
               }
            });
      },

      active: function(toggle)  // #_library.notes.active  #notes.active  #active
      {
         if (toggle)
         {
            $("body").toggleClass("note-active");
            $("section.editor").toggleClass("none");
         }
         return $("body").hasClass("note-active");
      },

      write: function()  // #_library.notes.write  #notes.write  #write
      {
         if (_var.bible.verse.selection)
         {
            if (_library.notes.active())
            {
               //_library.editor.save(_library.notes.list);
               _library.editor.save(_library.notes.refresh);
            }
            else
            {
               _library.editor.setPlaceholder("Loading Note for " + _var.bible.verse.selection);
            }
            if (_library.notes.active(true))
            {
               _var.editor.path = _library.notes.path();
               $("#tdEditorHeading").text(_var.bible.verse.selection);
               _library.editor.clear();
               _library.editor.load();
               _library.editor.focus();
            }
            else
            {
               //_library.notes.list();
            }
         }
         else
         {
            _library.notes.instruction();
         }
      },

      close: function(force)  // #_library.notes.close  #notes.close  #close
      {
         if (force)
         {
            if (_library.notes.active())
            {
               _library.notes.active(true);
            }
         }
         else
         {
            if (_library.editor.changed())
            {
               _var.zebraDialog = new $.Zebra_Dialog(
                  "<div style='text-align: center'>Do you want to Save the Note?</div>",
                  {
                     "type": "confirmation",
                     "title": _var.bible.verse.selection,
                     "position": _const.ZEBRA.position,
                     "buttons": 
                        [
                           {
                              caption: "Yes", 
                              callback: 
                                 function() 
                                 {
                                    _library.notes.write();
                                 }
                           },
                           {
                              caption: "No", 
                              callback: 
                                 function() 
                                 {
                                    _library.notes.close(_const.PARAMETER.force);
                                 }
                           }
                        ],
                     "custom_class": "blueberry storm noicon"
                  }
               );
            }
            else
            {
               _library.notes.close(_const.PARAMETER.force);
            }
         }
      },

      folder: function(__strongs, __language)
      {
         var subpath;
         if (__language)
         {
            subpath = __language;
         }
         else
         {
            var book = _library.common.__book(_var.bible.chapter);
            var indexBook = _var.bible.__books.indexOf(book);
            var bookNo = indexBook + 1;
            var chapterNo = _library.common.__chapterNo();
            subpath = bookNo.pad(2) + "/" + chapterNo.pad(3);
         }
         return ((__strongs ? "strongs" : "notes") + "/" + subpath + "/");
      },

      file: function(__strongs, __number)
      {
         var __file =
         {
            name: "",
            extension: (__strongs ? "strong" : "note")
         };
         if (__number !== undefined)
         {
            __file.name = __number;
         }
         else
         {
            var verses = _var.bible.verse.selection.substr(_var.bible.verse.selection.indexOf(":") + 1);
            var range = verses.split("-");
            $.each(range,
               function(index, verse)
               {
                  range[index] = parseInt(verse).pad(3);
               });
            __file.name = range.join("_");
         }
         return (__file.name + "." + __file.extension);
      },

      path: function(__strongs, __language, __number)  // _library.notes.path  #notes.path  #path
      {
         return (_library.notes.folder(__strongs, __language) + _library.notes.file(__strongs, __number));
      },

      create: function(chat, voice, insert)
      {
         var selector = "#td" + chat.member;
         var gender = _library.team.gender(selector);
         var typing = (voice ? "voice" : "keyboard");
         //var typing = (voice ? "voice" : "voice"); // For testing purposes
         var divChat = ["<div class='chat " + gender + " " + typing + "' data-member='" + chat.member + "' data-timestamp='" + chat.timestamp + "'>"];
         var divChatChildren =
            [
               "<div class='container'>" +
                  "<img class='chat' src='" + $(selector + " img.half").attr("src") + "' onclick='_event.clickMember(event, this)' draggable='false'/>" +
                  "<span class='member none'></span>" +
               "</div>",

               "<img class='speech' src='images/speech" + gender + ".png' draggable='false'/>",

               "<div class='speech' onclick='_event.clickSpeech(event, this, undefined, undefined, true)'>" +
                  "<table><tr><td>" + chat.text + "</td></tr></table>" +
                  "<img class='edit none' src='images/edit2.svg' draggable='false'/>" +
                  "<img class='copy none' src='images/copy.svg' draggable='false'/>" +
                  "<img class='delete none' src='images/delete.svg' draggable='false'/>" +
               "</div>",

               "<div class='timestamp none'></div>"
            ];
         if (gender == "girl")
         {
            divChatChildren.reverse();
         }
         divChat.push.apply(divChat, divChatChildren);
         divChat.push("</div>");

         _library.notes.datestamp();

         selector = "#tdChat";
         if (insert)
         {
            selector = insert;
            $(divChat.join("")).insertBefore(selector);
            //$(selector)[0].scrollIntoView(_const.CHAT.scrollIntoViewOptions);
            _library.notes.highlight($(selector)[0]);
         }
         else
         {
            $(selector).prepend(divChat.join(""));
         }

         if (_var.showLabels)
         {
            var element = $("#tdChat").find("div.chat:first-child")[0];
            _event.clickMember(undefined, null, element, !(_var.showLabels));
            _event.clickSpeech(undefined, null, element, !(_var.showLabels));
         }
      },

      datestamp: function(__date)
      {
         var today = new Date();
         var isToday = (!__date || (__date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)));
         var datestamp = ((__date === undefined) ? today : __date).format("dddd, d mmmm yyyy");
         if (__date || (_var.chat.datestamp != datestamp))
         {
            _var.chat.datestamp = datestamp;
            var classes = "datestamp" + (isToday ? (" " + _const.CHAT.__class) : "");
            $("#tdChat").prepend(
               "<div class='" + classes + "' onclick='_event.clickDatestamp(event)' data-datestamp='" + (__date || today).getTime() + "'>" +
                  "<img src='images/date.png' class='invert' draggable='false'/> &nbsp; " + datestamp + 
               "</div>");
         }
      },

      add: function(chat, log, voice, insert)
      {
         _library.notes.create(chat, voice, insert);
         if (log)
         {
            $.post("php/note.php",
               {
                  path: _library.notes.path(),
                  method: "add",
                  data: JSON.stringify(chat)
               });
         }
      },

      /*update: function(__text)
      {
         if (_var.chat.div.speech)
         {
            $(_var.chat.div.speech).find("td").text(__text.replace(/\n/g, "") + "\n\n");
            _library.notes.save();
         }
      },*/

      refresh: function()  // #_library.notes.refresh  #notes.refresh  #refresh
      {
         function __refresh()
         {
            if (_var.notes.list.indexOf(_var.editor.path) != -1)
            {
               if (_var.notes.action == _const.NOTES.action.none)
               {
                  _var.notes.action = _const.NOTES.action.add;
               }
            }
            else
            {
               _var.notes.action = _const.NOTES.action.delete;
            }

            switch (_var.notes.action)
            {
               case _const.NOTES.action.add:
                  $("p.selected").eq(0).addClass("note");
               case _const.NOTES.action.edit:
                  var file = _var.editor.path.substr(_var.editor.path.lastIndexOf("/") + 1);
                  var verse = parseInt(file.replace(/(_.*)?\.note/, ""));
                  if (_php.options.inline)
                  {
                     var element = $("div.verses > p:nth-of-type(" + verse + ")");
                     var div = ((_var.notes.action == _const.NOTES.action.add) ? 
                        $("<div class='note' data-selection='" + _var.bible.verse.selection + "'></div>").insertBefore(element)[0] :
                        $("div.note[data-selection='" + _var.bible.verse.selection + "']")[0]);
                     _library.notes.read(_var.editor.path, div, verse - 1, _var.bible.verse.selection);
                  }
                  break;
               case _const.NOTES.action.delete:
                  $("p.selected").eq(0).removeClass("note");
                  if (_php.options.inline)
                  {
                     $("div.note[data-selection='" + _var.bible.verse.selection + "']").remove();
                  }
                  break;
            }
         }

         if (_var.notes.list.indexOf(_var.editor.path) != -1)
         {
            _var.notes.action = _const.NOTES.action.edit;
         }
         else
         {
            _var.notes.action = _const.NOTES.action.none;
         }

         _library.notes.list(__refresh);
      },

      list: function(callback)  // #_library.notes.list  #notes.list  #list
      {
         callback = (callback ? callback : _library.bible.note);

         $.post("php/note.php",
            {
               path: _library.notes.folder(),
               method: "list"
            },
            function(data)
            {
               if (data)
               {
                  _var.notes.list = JSON.parse(data);
                  callback();
               }
            });
      },

      load: function(__date, insert)
      {
         $.post("php/note.php",
            {
               path: _library.notes.path(), // __date),
               method: "load"
            },
            function(data)
            {
               if (data)
               {
                  _var.chat.chats = (JSON.parse(data))["chats"];
                  if (insert)
                  {
                     _var.chat.chats.reverse();
                  }
                  $.each(_var.chat.chats,
                     function(index, chat)
                     {
                        _library.notes.add(chat, false, undefined, insert);
                     });
               }
               _library.team.next();
            });
      },

      save: function()
      {
         var data = [];
         $("div.chat").each(
            function(index, element)
            {
               var member = _library.team.member(element);
               var __text = _library.notes.text(element);
               var __timestamp = _library.notes.timestamp(element);
               data.unshift(
                  JSON.stringify(
                     {
                        member: member, 
                        text: __text,
                        timestamp: __timestamp
                     }));
            });
         $.post("php/note.php",
            {
               path: _library.notes.path(),
               method: "save",
               data: data.join("")
            });
      },

      delete: function(selector)
      {
         if ((selector === undefined) || !($(selector).is("div.chat")))
         {
            return false;
         }
         $(selector).remove();
         return true;
      },

      text: function(selector)
      {
         selector = ((selector === undefined) ? "div.chat:first-child" : selector);
         if (!($(selector).is("div.chat")))
         {
            return "";
         }
         return $(selector).find("div.speech").text();
      },

      timestamp: function(selector)
      {
         selector = ((selector === undefined) ? "div.chat:first-child" : selector);
         return parseInt($(selector).attr("data-timestamp"));
      },

      scroll: function(top, isOffset)
      {
         var element = $("main")[0];
         var options = 
         {
            left: 0, 
            top: top, 
            behavior: "smooth"
         };
         if (isOffset)
         {
            element.scrollBy(options); // The element has to have "position: relative" for this to work
         }
         else
         {
            element.scrollTo(options);
         }
      },

      highlight: function(element)
      {
         $(element).addClass("invert");
         window.setTimeout(function() { $(element).removeClass("invert"); }, _const.TIMEOUT.notes.highlight);
         element.scrollIntoView(_const.CHAT.scrollIntoViewOptions);
      },

      quick: function(text)
      {
         if (_var.bible.verse.selection)
         {
            _var.editor.path = _library.notes.path();
            $.post("php/quillSave.php",
               {
                  path: _var.editor.path,
                  data:
                     JSON.stringify(
                        {
                           ops:
                              [
                                 {
                                    insert: text.trim() + "\n"
                                 }
                              ]
                        })
                  //data: '{"ops":[{"insert":"' + text.trim() + '\n"}]}')
               },
               _library.notes.refresh);

         }
         else
         {
            _library.notes.instruction();
         }
      },

      instruction: function()
      {
         _var.zebraDialog = new $.Zebra_Dialog(
            "<div style='text-align: center'>Select one or more verses to<br>Write a Note</div>",
            {
               "type": "information",
               "title": "Select A Quote",
               "position": _const.ZEBRA.position,
               "auto_close": _const.ZEBRA.auto_close,
               "buttons": 
                  [
                     {
                        caption: "OK",
                        callback: function() { }
                     }
                  ],
               "custom_class": "blueberry storm noicon"
            }
         );
      },

      strongs:
      {
         stripWarnings: function(response)  // #_library.notes.stripWarnings  #notes.stripWarnings  #stripWarnings
         {
            const DELIMITER =
            {
               left: "MQLEFT",
               right: "MQRIGHT"
            };

            // Remove any unwanted warning messages from the file_get_contents PHP method
            if (response.indexOf(DELIMITER.left) != -1)
            {
               response = response.substr(response.indexOf(DELIMITER.left) + DELIMITER.left.length);
            }
            if (response.indexOf(DELIMITER.right) != -1)
            {
               response = response.substr(0, response.indexOf(DELIMITER.right));
            }
            return response;
         },

         strongs: function(callback)  // #_library.notes.strongs.strongs  #notes.strongs.strongs  #strongs
         {
            var verse = _library.common.__verse();
            if (verse)
            {
               var selector = "div.strongs";
               var index = verse - 1;
               var p = $("div.verses > p")[index];
               if ($(p).next().is(selector))
               {
                  if (callback)
                  {
                     callback();
                  }
                  else
                  {
                     $(p).nextUntil(":not(" + selector + ")").remove();
                  }
               }
               else
               {
                  _library.notes.strongs.update(undefined, undefined, callback);
               }
            }
            else
            {
               window.setTimeout(
                  function()
                  {
   //                  _library.common.__error("Select a Verse to Show Strong's", _const.ZEBRA.auto_close);
                     _var.zebraDialog = new $.Zebra_Dialog(
                        "<div style='text-align: center'>Do you want to View Strong's for the Whole Chapter?</div>",
                        {
                           "type": "confirmation",
                           "title": "View Strong's",
                           "position": _const.ZEBRA.position,
                           "buttons": 
                              [
                                 {
                                    caption: "Yes", 
                                    callback: 
                                       function() 
                                       {
                                          _var.zebraDialog = null;
                                          _var.study.all = true;
                                          _library.notes.strongs.macro();
                                       }
                                 },
                                 {
                                    caption: "No", 
                                    callback: 
                                       function() 
                                       {
                                          _var.zebraDialog = null;
                                       }
                                 }
                              ],
                           "custom_class": "blueberry storm noicon"
                        }
                     );

                  }, 0);
            }
         },

         update: function(__url, a, callback)  // #_library.notes.strongs.update  #notes.strongs.update  #strongs.update
         {
            function __insert(__entry)
            {
               var div = $(
                  "<div class='strongs'>" +
                     "<div class='inlineHeading'>" + 
                        (_var.study.title ? _var.study.title : "Strong's") + 
                     "</div>" +
                     "<div class='entry'>" +
                        __entry +
                     "</div>" +
                     ((_var.study.title.substr(0, 8) != "Strong's") ? 
                        "<hr><div class='thayers'><span class='temp' onclick='_library.notes.lexicon(event, \"" + __url + "\")'><br>Lexicon</span><br></div>" : "") +
                  "</div>"
               ).insertAfter($("p.selected").first());

               return (div.length ? div[0] : null);
            }

            function __title()
            {
               return ("Strong's - " + _var.bible.verse.selection.replace(/\-.*/, ""));
            }

            const __strongs = true;

            __url = (__url ? __url : _var.study.url.strongs);
            _var.study.title = 
               (a ? 
                  ($(a).text().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ") + " - " + a.title) : 
                  __title()
               );
            var __language, __number;
            if (a)
            {
               __language = ((__url.indexOf("hebrew") != -1) ? "hebrew" : "greek");
               __number = __url.match(/\d+/)[0];

               try
               {
                  let __verse = _library.notes.strongs.verse(a);
                  _library.verse.select(_var.bible.chapter + ":" + __verse);
               }
               catch (__exception)
               {
                  console.log([__exception.name, __exception.message, __exception.stack]);
               }
            }
            var data =
            {
               url: __url,
               verse: _library.common.__verse(),
               method: "load",
               path: _library.notes.path(__strongs, __language, __number),
               all: (_var.study.all ? "true" : "false")
            };
            $.ajax({
               type    : "POST",
               url     : "php/strongs.php",
               data    : data,
               success : 
                  function(response) 
                  {
                     response = _library.notes.strongs.stripWarnings(response);
                     response = response.replace(/_library.notes.updateStrongs/g, "_library.notes.strongs.update"); // Old function name

                     if (response == "")
                     {
                        if (_library.app.localhost())
                        {
                           _library.common.__error("Unable to get Strong's in localhost mode unless it's stored offline", 
                              _const.ZEBRA.auto_close);
                        }
                        return;
                     }
                     if (response.substr(0, 5) == "Error")
                     { 
                        console.log(response);
                     }
                     else
                     {
                        if (response.indexOf("<dummy") != -1)
                        {
                           // Assume we've already loaded the Strong's verse and we're going to display it directly from file
                           response = response.split(_php.delimiter);
                           response = response.filter(n => n);
                           //console.log(response);
                           if (response.length >= (_var.bible.verseCount * 2))
                           {
console.log(4);
                              for (var index = 0; index < response.length; index += 2)
                              {
                                 let __verse = parseInt(response[index]);
                                 let __entry = JSON.parse(response[index + 1]).entry;
                                 _library.verse.select(_var.bible.chapter + ":" + __verse);
                                 _var.study.title = __title();
                                 __insert(__entry);
                              }
                              _library.notes.strongs.cleanup();
                              return;
                           }
                           else
                           {
console.log(5);
                              response = JSON.parse(response[0]).entry;
                           }
                        }
                        // New code 20220903
                        /*
                           *  - zero or more
                           *? - zero or more (non-greedy)
                           +  - one or more
                           +? - one or more (non-greedy)
                           ?  - zero or one
                           ?? - zero or one (non-greedy)
                        */
                        else
                        {
                           if (response.indexOf("tophdg") == -1)
                           {
console.log(8);
                              response = response.replace(/#.+?stm\d{4}<\/span>/g, "");
                              response = response.replace(/<\/span><span/g, "</span> <span"); // This ensures the asterisk (*) has a gap
                              response = response.replace(/<a /g, "<dummy ").replace(/<\/a>/g, "</dummy>");
                              response = response.replace(/<span /g, "<a ").replace(/<\/span>/g, "</a>");

                              response = response.replace(/data\-strongs\-number\=\"0*(\d+)\"/g, 
                                 "onclick=\"_library.notes.strongs.update('https://biblehub.com/" +
                                 (_library.common.__isNewTestament() ? "greek" : "hebrew") + "/$1.htm', this)\"");
                           }
                           else
                           {
console.log(9);
                              response = "<dummy></dummy>" + response;
                           }

                           var entry = [];
                           entry.unshift(
                              JSON.stringify(
                                 {
                                    entry: response
                                 }));
                           $.post("php/strongs.php",
                              {
                                 path: _library.notes.path(__strongs, __language, __number),
                                 method: "save",
                                 data: entry.join("")
                              });
                        }

                        let div = __insert(response);

                        if (callback)
                        {
                           callback(); // Strong's macro callback
                        }

                        if (a)
                        {
                           _library.notes.strongs.find($(a).attr("title").match(/\d+/)[0], div);
                        }
                     }
                  }
            });
            return false;
         },

         macro: function(verse)
         {
            function __callback(__verse)
            {
               if (__verse <= _var.bible.verseCount)
               {
                  _library.notes.strongs.macro(__verse);
               }
               else
               {
                  _library.notes.strongs.cleanup();
               }
            }

            verse = ((verse === undefined) ? 1 : verse);
            var quote = _var.bible.chapter + ":" + verse;
            _library.verse.select(quote);
            _library.notes.strongs.strongs(
               function()
               {
                  __callback(verse + 1);
               });
         },

         cleanup: function()
         {
            _library.verse.select(_var.bible.chapter + ":1");
            _var.study.all = false;
         },

         find: function(__number, div)
         {
            // When you select a strong's word meaning
            //    Display the meaning
            //    List the other verses in the current chapter that the word occurs
            //    Highlight each occurrence of the word
            $("a.strongs.selected").removeClass("selected");
            var a = $("a[title~='" + __number + "']").addClass("selected"); // ~= means we're searching for a space-separated word
            var verses = [];
            $.each(a,
               function(index, __a)
               {
                  let __verse = _library.notes.strongs.verse(__a);
                  if (verses.indexOf(__verse) == -1)
                  {
                     verses.push(__verse);
                  }
               });
            let selector = "div.inlineHeading";
            var __html = $(div).children(selector).html();
            $(div).children(selector).html(__html + "<br>Verse" + ((verses.length > 1) ? "s" : "") + " " + verses.join(", "));
         },

         verse: function(__a)
         {
            return parseInt($(__a).parents("div.strongs").prevAll("p").eq(0).children("span.number").text());
         }
      },

      lexicon: function(__event, __url)
      {
         var data =
         {
            url: __url,
            verse: _library.common.__verse()
         };
         $.ajax({
            type    : "POST",
            url     : "php/lexicon.php",
            data    : data,
            success : 
               function(response) 
               {
                  response = _library.notes.strongs.stripWarnings(response);

                  if (response == "")
                  {
                     if (_library.app.localhost())
                     {
                        _library.common.__error("Unable to get Lexicon in localhost mode", _const.ZEBRA.auto_close);
                     }
                     return;
                  }
                  if (response.substr(0, 5) == "Error")
                  { 
                     console.log(response);
                  }
                  else
                  {
                     response = response.replace(/<a /g, "<dummy ").replace(/<\/a>/g, "</dummy>");
                     response = response.replace(/<img /g, "<dummy ").replace(/<\/img>/g, "</dummy>");
                     $(__event.target).replaceWith(response);
                  }
               }
         });
      },

      commentary:
      {
         const:
         {
            class: "commentary"
         },

         init: function()
         {
            function __initSelect(select, attributes)
            {
               var optgroup = _library.common.__optgroup(
                  {
                     label: attributes.label,
                     bold: false,
                     uppercase: true
                  });
               select.appendChild(optgroup);
               for (var index = 0; index < attributes.options.length; index++)
               {
                  if (attributes.options[index].group)
                  {
                     var __optgroup = _library.common.__optgroup(
                        {
                           label: attributes.options[index].group,
                           bold: false,
                           uppercase: true
                        });
                     for (var __index = 0; __index < attributes.options[index].options.length; __index++)
                     {
                        var option = _library.common.__option(
                           {
                              value: attributes.options[index].options[__index].value,
                              id: "option" + attributes.id + attributes.options[index].options[__index].id,
                              label: attributes.options[index].options[__index].label
                           });
                        __optgroup.appendChild(option);
                     }
                     select.appendChild(__optgroup);
                  }
                  else
                  {
                     var option = _library.common.__option(
                        {
                           value: attributes.options[index].value,
                           id: "option" + attributes.id + attributes.options[index].id,
                           label: attributes.options[index].label
                        });
                     optgroup.appendChild(option);
                  }
               }
            }

            __initSelect(_var.select.commentary, _const.NOTES.commentary);
         },

         toggle: function(state)
         {
            $("body").toggleClass(_library.notes.commentary.const.class, state);
            _library.notes.commentary.update();
         },

         update: function()
         {
            if (_var.commentary.lock)
            {
               return;
            }

            if ($("body").hasClass(_library.notes.commentary.const.class))
            {
               var book = _var.bible.books[_library.common.__book()].toLowerCase().replace(/\s/g, "_");
               switch (book)
               {
                  case "psalm":
                     book = "psalms";
                     break;
                  case "song_of_solomon":
                     book = "songs";
                     break;
               }
               var chapter = _library.common.__chapterNo();
               // https://biblehub.com/commentaries/
               var commentary = $("select.commentary").val();
               if (commentary != "tsk")
               {
                  commentary = "commentaries/" + commentary;
               }
               var __url = "https://biblehub.com/" + commentary + "/" + book + "/" + chapter + ".htm";
               console.log(__url);

               $("#divCommentaryContainer div.commentary").html("");

               var data =
               {
                  url: __url
               };
               $.ajax({
                  type    : "POST",
                  url     : "php/commentary.php",
                  data    : data,
                  success : 
                     function(response) 
                     {
                        response = _library.notes.strongs.stripWarnings(response);

                        if (response == "")
                        {
                           if (_library.app.localhost())
                           {
                              _library.common.__error("Unable to get Commentary in localhost mode", _const.ZEBRA.auto_close);
                           }
                           return;
                        }
                        if (response.substr(0, 5) == "Error")
                        { 
                           console.log(response);
                        }
                        else
                        {
                           response = response.replace(/<a /g, "<dummy ").replace(/<\/a>/g, "</dummy>");
                           response = response.replace(/<img /g, "<dummy ").replace(/<\/img>/g, "</dummy>");
                           if (commentary == "tsk")
                           {
                              response = response.replace(/TSK/, "Treasury of Scripture Knowledge");
                           }
                           $("#divCommentaryContainer div.commentary").html(response);
                        }
                     }
               });
            }
         },

         change: function(__event)
         {
            _library.notes.commentary.update();
         },

         scroll: function()
         {
            var versenum = $("div.commentary div.versenum")[_library.common.__verse(_var.bible.verse.selection) - 1];
            if (versenum)
            {
               versenum.scrollIntoView();
            }
         },

         lock: function()
         {
            _var.commentary.lock = !(_var.commentary.lock);
            $("div.menuitem.commentary-lock").toggleClass("off", !(_var.commentary.lock));
         }
      }
   }
};