      <div id="divSearchHelp" class="none special">
         <h2><i>Selecting Verses</i></h2>
         <p>You can select a verse (or paragraph) by clicking on it. To select multiple verses, first select the starting verse, then Ctrl+Click the ending verse.</p>
         <h2><i>Reading Mode</i></h2>
         <p>Reading Mode allows you to read along with Alexander Scourby using the down arrow. Reading Mode can also be used in the family setting using all four arrow keys. The left and right arrow keys highlight 3 words at a time which can be used with the Little Reader web page at .../bible/littlereader. This is useful for young children who are learning to read.</p>
         <h2><i>Help on Search</i></h2>
         <p>You can search for keywords using simple search terms or search terms with regular expressions; or you can search for a verse or a range of verses within a chapter. There is also the option to select Normal Search. Searches can include the OR command between words.</p>
         <h2>Examples</h2>
         <h3>1. Simple search term</h3>
         <p><b>Search:</b> Armageddon</p>
         <p><b>Result:</b> Revelation 16:16 "Armageddon"</p>
         <h3>2. Search term with regular expression</h3>
         <p><b>Search:</b> cloud.*rainbow</p>
         <p><b>Result:</b> Revelation 10:1 "cloud: and a rainbow"</p>
         <h3>3. Bible School Newsletter unscramble the word</h3>
         <p>Given the 7 letters ZALRSUA to unscramble to make a name, we need to use a Regular Expression</p>
         <p><b>Search:</b> \b(Z|A|L|R|S|U){7}\b</p>
         <p><b>Result:</b> Luke 16:20 "Lazarus"</p>
         <h3>4. Verse</h3>
         <p><b>Search:</b> Rev 3:15</p>
         <p><b>Result:</b> Revelation 3:15</p>
         <h3>5. Verse range</h3>
         <p><b>Search:</b> Gen 12:1-3</p>
         <p><b>Result:</b> Genesis 12:1-3</p>
         <h3>6. Find study notes</h3>
         <p><b>Search:</b> S\d+</p>
         <p><b>Result:</b> S01001001</p>
         <br/>
         <h2><i>Regular Expressions</i></h2>
         <h2>Brackets</h2>
         <p>Brackets are used to find a range of characters:</p>
         <table class="reference">
           <tbody><tr>
             <th width="22%" align="left">Expression</th>
             <th width="78%" align="left">&nbsp;Description</th>
           </tr>
            <tr>
             <td>[abc]</td>
             <td>Find any character between the brackets</td>
           </tr>
            <tr>
             <td>[^abc]</td>
             <td>Find any character not between the brackets</td>
           </tr>
            <tr>
             <td>[0-9]</td>
             <td>Find any digit from 0 to 9</td>
           </tr>
            <tr>
             <td>[A-Z]</td>
             <td>Find any character from uppercase A to uppercase Z</td>
           </tr>
            <tr>
             <td>[a-z]</td>
             <td>Find any character from lowercase a to lowercase z</td>
           </tr>
            <tr>
             <td>[A-z]</td>
             <td>Find any character from uppercase A to lowercase z</td>
           </tr>
            <tr>
             <td>[adgk]</td>
             <td>Find any character in the given set</td>
           </tr>
            <tr>
             <td>[^adgk]</td>
             <td>Find any character outside the given set</td>
           </tr>
            <tr>
             <td>(red|blue|green)</td>
             <td>Find any of the alternatives specified</td>
           </tr>
            </tbody></table>
         <h2>Metacharacters</h2>
         <p>Metacharacters are characters with a special meaning:</p>
         <table class="reference">
           <tbody><tr>
             <th width="22%" align="left">Metacharacter</th>
             <th width="78%" align="left">&nbsp;Description</th>
           </tr>
            <tr>
             <td>.</td>
             <td>Find a single character, except newline or line terminator</td>
           </tr>
            <tr>
             <td>\w</td>
             <td>Find a word character</td>
           </tr>
            <tr>
             <td>\W</td>
             <td>Find a non-word character</td>
           </tr>
            <tr>
             <td>\d</td>
             <td>Find a digit</td>
           </tr>
            <tr>
             <td>\D</td>
             <td>Find a non-digit character</td>
           </tr>
            <tr>
             <td>\s</td>
             <td>Find a whitespace character</td>
           </tr>
            <tr>
             <td>\S</td>
             <td>Find a non-whitespace character</td>
           </tr>
            <tr>
             <td>\b</td>
             <td>Find a match at the beginning/end of a word</td>
           </tr>
            <tr>
             <td>\B</td>
             <td>Find a match not at the beginning/end of a word</td>
           </tr>
            <tr>
             <td>\0</td>
             <td>Find a NUL character</td>
           </tr>
            <tr>
             <td>\n</td>
             <td>Find a new line character</td>
           </tr>
            <tr>
             <td>\f</td>
             <td>Find a form feed character</td>
           </tr>
            <tr>
             <td>\r</td>
             <td>Find a carriage return character</td>
           </tr>
            <tr>
             <td>\t</td>
             <td>Find a tab character</td>
           </tr>
            <tr>
             <td>\v</td>
             <td>Find a vertical tab character</td>
           </tr>
            <tr>
             <td>\xxx</td>
             <td>Find the character specified by an octal number xxx</td>
           </tr>
            <tr>
             <td>\xdd</td>
             <td>Find the character specified by a hexadecimal number dd</td>
           </tr>
            <tr>
             <td>\uxxxx</td>
             <td>Find the Unicode character specified by a hexadecimal number xxxx</td>
           </tr>
         </tbody></table>
         <h2>Quantifiers</h2>
         <table class="reference">
           <tbody><tr>
             <th width="22%" align="left">Quantifier</th>
             <th width="78%" align="left">&nbsp;Description</th>
           </tr>
            <tr>
             <td>n+</td>
             <td>Matches any string that contains at least one n</td>
           </tr>
            <tr>
             <td>n*</td>
             <td>Matches any string that contains zero or more occurrences of n</td>
           </tr>
            <tr>
             <td>n?</td>
             <td>Matches any string that contains zero or one occurrences of n</td>
           </tr>
            <tr>
             <td>n{X}</td>
             <td>Matches any string that contains a sequence of <i>X</i> <i>n</i>'s</td>
           </tr>
            <tr>
             <td>n{X,Y}</td>
             <td>Matches any string that contains a sequence of X to Y <i>n</i>'s</td>
           </tr>
            <tr>
             <td>n{X,}</td>
             <td>Matches any string that contains a sequence of at least X <i>n</i>'s</td>
           </tr>
            <tr>
             <td>n$</td>
             <td>Matches any string with n at the end of it</td>
           </tr>
            <tr>
             <td>^n</td>
             <td>Matches any string with n at the beginning of it</td>
           </tr>
            <tr>
             <td>m(?=n)</td>
             <td>Matches any string m that is followed by a specific string n</td>
           </tr>
            <tr>
             <td>m(?!n)</td>
             <td>Matches any string m that is not followed by a specific string n</td>
           </tr>
         </tbody></table>
      </div>
