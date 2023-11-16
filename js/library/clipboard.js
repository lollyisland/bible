var ___clipboard =
{
   clipboard:
   {
      copy: function(selection, type, manual)  // #_library.clipboard.copy  #clipboard.copy  #copy
      {
         if (!manual) // The manual parameter indicates that the user triggered the copy from the menu
         {
            const __selector = 
            {
               find: "main div.find"
            };
            var active = !($(__selector.find).hasClass("none"));
            var group = $(__selector.find).attr("data-group");

            if (active && (group == "search"))
            {
               // Don't copy verses when the blue search find bar is visible - it stuffs things up:
               // 1. Takes focus away from input which hides the virtual keyboard
               // 2. Moves the div.menu element
               return;
            }
         }

         switch (type)
         {
            case _const.CLIPBOARD.type.html:
               //selection = (new DOMParser().parseFromString(selection, "text/html")).body.textContent;
               $("#textareaClipboard").html(selection).selectText();
               break;
            case _const.CLIPBOARD.type.text:
            default:
               $("#textareaClipboard").text(selection).selectText();
               break;
         }
         document.execCommand("copy");
      }
   }
};