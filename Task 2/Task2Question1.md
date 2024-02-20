## Task 2
### Write a blog on the difference between Document and Window Objects
#### Table of Content
1. Document Object
   + Properties of document
   + Methods of Document
2. Window Object
   + Properties of Window
   + Method of Window
3. Conclusion
#### **Document Object:**
The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a **_window.document_** or just a document

_syntax:_ document.property_name

#### **Properties of Document:**
+ _activeElement:_ it returns the currently active elements in the document.
+ _body:_ It returns the contents of the body element.
+ _anchors:_ It returns all <a> elements that have a name attribute.
+ _baseURL:_ It returns a string value that represents the base URL of the document.
+ _cockie:_ It returns the cookie for the current document.
+ _charSet:_ It returns a string, representing the document's character encoding.
+ _defaultView:_ It returns the current Window Object.
+ _designMode:_ It is used to set documents as editable or read-only.
+ _domain:_ It returns the domain name of the document server.
+ _doctype:_ It returns the document's doctype.
+ _enbeds:_ It returns the complete URL of the document.
+ _URL:_ It returns the complete URL of the document.
+ _forms:_ It returns all the elements of the form.
+ _fullScreenElement:_ It returns the element that is currently present in the full-screen mode.
+ _title:_ It returns the title element of the document.
+ _head:_ It returns the head element of the document.
+ _links:_ It returns all <area> and <a> elements that have a href attribute.
+ _lastModified:_ It returns the date and time of the current document that was last modified.
+ _images:_ It returns the collection <img> elements in the document.
+ _implementation:_ It returns the DOMImplementation object associated with the current document.
+ _readyState:_ It returns the loading status of the current document.
+ _referrer:_ It returns the URL of the page that is linked to the current page.
+ _scripts:_ It returns all script elements present in the document
+ _strictErrorChecking:_ It sets or returns whether strict error checking can be enforced on a document or not.

#### **Method of Document:**

_syntax:_ documet.method_name;

The lists of most commonly used methods are listed below:
+ _addEventListener():_ It is used to attach an event handler to the specified element.
+ _adoptNode():_ It is used to adopt a node from another document and it returns a node object, representing the adopted nod.
+ _close():_ It is used to close the output stream.
+ _createAttribute():_ It is used to create a comment node with some text.
+ _createComment():_ It is used to create a comment node with some text.
+ _createDocumentFragment():_ It is used to create the document fragment to change the content of the document.
+ _createElement():_ It is used to create an HTML element.
+ _createEvent():_ It is used to create a new events object.
+ _createTextNode():_ It is used to create a text node.
+ _execCommand():_ It is used to execute a command specified by the user on the editable selected section. It returns a Boolean value.
+ _fullscrenEnabled():_ It is used  to check whether the document can be viewed in fullscreen mode or not. It returns a boolean value.
+ _getElementById():_ It returns the object of the given ID. If no object with that id exists then it returns null.
+  _getElementsByClassName():_ It returns an object containing all the elements with the specified class name in the document as objects.
+  _getElementsByName():_ It returns an object containing all the elements with the specified name in the document as objects.
+  _getElementsByTagName():_ It returns an object containing all the elements with the specified tag names in the document as objects.
+  _hasFocus():_ It returns a boolean value that indicates whether the document or elements have focus or not.
+  _importNode():_ It imports the copy  of a node from another document in the current document.
+  _normalize():_ It flushes out the empty nodes and merges the adjacent text nodes with the first text node.
+  _normalizeDocument():_ It is used to normalize an HTML document by removing any empty text nodes and joining the adjacent text nodes.
+  _open():_ It is used to open the output stream to collect the output.
+  _querySeclector():_ It returns the first element that matches specified CSS selectors in the document.
+  _removeEventListener():_ It removes the event handler from an element that has an attached event.
+  _renameNode():_ It is used to rename the node.
+  _write():_ It is used to rename the node.
+  _writeln():_ It is used to write a document with a newline character after each statement.

#### **Window Object:**
The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created.

_Syntax:_ window.property_name;

**Properties of the Window:**

+ _Closed:_ It holds a Boolean value that represents whether the window is closed or not.
+ _console:_ It returns a reference to the console object which provides access to the browser's debugging console.
+ _defultStatus:_ It is used to define the default message that will be displayed in the status bar when no activity is carried on by the browser.
+ _controllers:_ It returns the XUL controller objects for the current Chrome window.
+ _customElements:_ It returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and also get information about already registered custom elements.
+ _crypto:_ It returns the browser crypto object.
+ _devicePixelRatio:_ It returns the ratio between physical pixels and device-independent pixels in the current display.
+ _Document:_ It returns a reference to the document object of that window.
+ _DOMMatrix:_ It returns a reference to a DOMMatrix object which represents 4x4 matrices suitable for 2D and 3D operations.
+ _frames[]:_ It represents an array that contains all the frames of the given window.
+ _DOMPoint:_ It returns a reference to a DOMPoint object, which represents a 2D or 3D point in a coordinate system.
+ _History:_ It provides information on the URLs visited in the current window.
+ _Length:_ It represents the number of frames in the current window.
+ _DOMRect:_ It returns a reference to a DOMRect object, which represents a rectangle.
+ _fullScreen:_ This property indicates whether the window is displayed on the fullscreen or not.
+ _location:_ It contains the URL of the current window.
+ _innerWidth:_ It is used to get the width of the content area of the browser window.
+ _Name:_ It contains the name of the referenced window.
+ _Navigation:_ It returns a reference to the navigator object.
+ _outerHeight:_ It will get the height of the outside of the browser window.
+ _outerWidth:_ It will get the width of the outside of the browser window.
+ _Status:_ It overrides the default status and places a message in the status bar.
+ _top:_ It returns a reference to the topmost window containing a frame if many windows are opened.
+ _Toolbar:_ It will result in the toolbar object, whose visibility can be toggled in the window.
+ _Opener:_ It contains a reference to the window that opened the current window.
+ _Parent:_ It refers to the frameset in which the current frame is contained.
+ _Screen:_ It refers to the screen object.
+ _Self:_ It provides another way to refer to the current window.

#### **Methods of Window:**

_Syntax:_ window.method_name;

The methods of window objects that are commonly used are listed in the below table.

+ _alert():_ It is used to display an alert box. It displays a specified message along with an OK button and is generally used to make sure that the information comes through the user.
+ _atob():_ It is used for decoding a base-64 encoded string. It is used to decode a string of data that has been encoded using the btoa() method.
+ _blur():_ It is used to remove focus from the current window.
+ _btoa():_ It is used for encoding a string in base-64 format.
+ _clearInterval():_ It clears the interval which has been set by the setInterval() function before that.
+ _close():_ It is used for closing a certain window or tab of the browser which was previously opened.
+ _confirm():_ It is used to display a modal dialog with an optional message and two buttons i.e., OK and Cancel. It returns true if the user clicks "OK", and false otherwise.
+ _focus():_ It is used to give focus to an element in the current window.
+ _getComputedStyle():_ It is used to get all the computed CSS properties and values of the specified element.
+ _matchMedia():_ It is used to return a MediaQueryList object which represents the result of the specified  CSS media query string.
+ _open():_ It is used to open a new tab or window with the specified URL a name.
+ _moveBy():_ It is used for moving a window with a specified number of pixels relative to its current coordinates.
+ _moveTo():_ It is used in the window to move the window from the left and top coordinates.
+ _prompt():_ It is used to display a dialog with an optional message prompting the user to input some text.
+ _resizeBy():_ It is used to resize a window by the specified amount.
+ _resizeTo():_ It is used to scroll the document by the given number of pixels.
+ _scrollBy():_ It is used to scroll the document by the given number of pixels.
+ _scrollTo():_ It is used to scroll to a particular set of coordinates in the document.
+ _setTimeout():_ It executes a function, after waiting a specified number of milliseconds.
+ _stop():_ It is used to stop the window from loading resources in the current browsing context.

#### **Conclusion:**

In essence, while the Window object represents the browser window or tab and provides access to browser-specific functionalities, the Document object represents the content and structure of the web page and allows manipulation and access to its elements.






  
