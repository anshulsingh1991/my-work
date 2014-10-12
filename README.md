This project is completely dedicated to the basic of HTML 5 and CSS 3.
===============================================================================

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Here's I have described what I know about HTML 5.
==================================================

What is HTML 5
===============
Has been come into existence around January 2008. Still under development. W3C introduced a logo on 18 January 2011. Organizations involve in development are W3C (World Wide Web Consortium) and WHATWG (Web Hypertext Application Technology Working Group). Has a broad browser support. In 1995 HTML 2.0, later after two years HTML 3.0 and after two years HTML 4.01 was announced.

New Elements
---------------------------------------
<aside> 	Defines content aside from the page content
<audio> 	Defines sound content
<bdi> 		Isolates a part of text that might be formatted in a different direction from other text outside it
<canvas> 	Used to draw graphics, on the fly, via scripting (usually JavaScript)
<command> 	Defines a command button that a user can invoke
<datalist> 	Specifies a list of predefined options for input controls
<defines> 	Article an article
<details> 	Defines additional details that the user can view or hide
<embed> 	Defines a container for an external application or interactive content (a plug-in)
<figure> 	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<figcaption>Defines a caption for a <figure> element
<footer> 	Defines a footer for a document or section
<header> 	Defines a header for a document or section
<hgroup> 	Groups a set of <h1> to <h6> elements when a heading has multiple levels
<keygen> 	Defines a key-pair generator field (for forms)
<mark> 		Defines marked/highlighted text
<meter> 	Defines a scalar measurement within a known range (a gauze)
<nav> 		Defines navigation links
<output> 	Defines the result of a calculation
<progress> 	Represents the progress of a task
<ruby> 		Defines a ruby annotation (for East Asian typography)
<rt> 		Defines an explanation/pronunciation of characters (for East Asian typography)
<rp> 		Defines what to show in browsers that do not support ruby annotations
<section> 	Defines a section in a document
<source> 	Defines multiple media resources for <video> and <audio>
<summary> 	Defines a visible heading for a <details> element
<track> 	Defines text tracks for <video> and <audio>
<time> 		Defines a date/time
<video> 	Defines a video or movie
<wbr> 		Defines a possible line-break
---------------------------------------
What is 'DOCTYPE' Tag -
Is such an element, which tells the browser about the HTML version. Is not a HTML tag, but for the Proper SEO purpose and introducing the version of HTML to the browser the tag is very useful. HTML5 is not based on SGML, so there is no need to declaration of DTD with the 'DOCTYPE' tag. Is defined at the top of the page as - <!DOCTYPE html>
In HTML previous version there was need of a DTD declaration with DOCTYPE assuming like (<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">), which was a little bit complex to remember. Development of HTML5 has enhanced this feature of HTML.
---------------------------------------

What is 'ARTICLE' Tag -
Is such an element of HTML5, which can be used to write the article. Can be used if a user wants to write a part of the website in different style and manner OR to define the independent content in a note. Is very useful when you write an article, a blog or a forum post and etc. Can contain any of element which is require to create the proper content.
---------------------------------------

What is 'ASIDE' Tag -
Mainly used in sidebar of a page. Can be used to represent some block quote content in an article.
---------------------------------------

What is 'AUDIO' Tag -
Has been introduced for playing the audio file in the browser with full user control support. Before it's development, installation of a browser plug-in as flash player or quick time was mandatory to play a audio file. Contains child element is called SOURCE,
which is used to call the exact media file. Contains it's properties for controlling the AUDIO File.
e.g.
<audio controls>
	<source src="media/simple_audio.mp3" type="audio/mpeg"/>
	<source src="media/simple_audio.ogg" type="audio/ogg"/>
	<!-- This Line Will Be Called When You Are Running An Old Browser -->
	<p>Your file doesn't support the audio element</p>
</audio>
---------------------------------------

What is 'BDI' Tag -
Stands for Bi-Directional Isolation Element. Whenever we write the aroma, Hebrew or Urdu fonts, it shows from the opposite side of the general fonts. So browser behavior directly change for that particular text. To use of BDI is exactly has been implemented for better performance of those texts.
Note : Supported by Firefox and Chrome but not by IE, Safari, Opera
---------------------------------------

What is 'CANVAS' tag -
Has been built specially for graphical representation. Incomplete without writing the JavaScript along with. Reduces use of external plug-in like Photo-shop and another Graphic Softwares. Still there is lot more can't be done with canvas but as creating the normal frame and graph it is sufficient.
---------------------------------------

What is 'COMMAND' tag -
Basically used for commanding code. To save a file, open a file or anything else that shows the command
function, will be prompted with COMMAND Element. Can be used for radio buttons, check-boxes and command button to invoke the particular function.
e.g.
<command type="command" label="click" onclick="click()">Click Me</command>
Note: Not supported by any of the browsers yet.
---------------------------------------

What is 'DATALIST' tag -
Basically use for auto completion of the form. The complete list is put in the option box, and when the user double click the input field the option is dragged down.
e.g.
<datalist>
	<option value="value">TEXT</option>
</datalist>
Note : Supported by Firefox, IE, Opera and Chrome but not by Safari
---------------------------------------

What is 'DETAILS' tag -
Used to invoke the show and hide function, doesn't require JavaScript for this. Contains it's internal element SUMMARY.
e.g.
<details>
	<summary>
		This is the default content.
	</summary>
	<p>This is the main content, which will be shown.</p>
</details>
Note : Supported by Safari and Chrome but not by Firefox, IE, Opera.
---------------------------------------

What is 'EMBED' tag - 
It's a media element. Used to call a media file in browser. A browser plug-in may be require to play the media files. Specially used for calling a flash movie.
e.g.
<embed src="<your media file name>"> </embed>
---------------------------------------

What is 'FIGURE' tag -
Used to call an image file inside the fixed container.
e.g.
<figure>
	<img src="<your img source>">
</figure>
---------------------------------------

What is 'FIGCAPTION' tag -
Used to put an additional information about the image. Child element of FIGURE. It will automatically
adjust its surrounding style according the image.
e.g.
<figure>
	<img src="<your img source>">
	<figcaption> Some descriptions here </figcaption>
</figure>
---------------------------------------

What is 'FOOTER' tag -
Used to define the footer area of the page.
e.g.
<footer>text and other element goes here..</footer>
---------------------------------------

What is 'HEADER' tag -
Used to define the header area of the page.
e.g.
<header>text and other element goes here..</header>
---------------------------------------

What is 'HGROUP' tag -
Used for wrapping the <h1> to <h6> element. The HGROUP Element is best useful when, someone wants to put a header and sub header or we can say multiple header in the document. The complete Element is wrapped inside the HGROUP Element.
e.g.
<header>
	<hgroup>
		<h1></h1>
		<h2></h2>
		<h3></h3>
	</hgroup>
	<p>remaining content..</p>
</header>
---------------------------------------

What is 'KEYGEN' tag -
Used for generating the key-pair in the form. Whenever user hit the submit button, the KEYGEN Element creates two key pair, first one is Public Key and another one is Private Key. Private key is encrypted and stored in local key database and the public key is sent with the form data to server.
e.g.
<keygen name="key">
Note : Supported by Safari, Firefox, IE, Opera and Chrome but not by IE.
---------------------------------------

What is 'MARK' tag -
Basically used for showing a marked text background. Best scenario to use it is when showing search result.
e.g.
<mark>some text here</mark>
---------------------------------------

What is 'MAIN' tag -
Used to define the main document of a website. Additional properties is used to define this element (role = main) for proper rendering in web browsers. Allowed once in an HTML5 Document and can't be used as child element.
e.g.
<main>text and other element goes here..</main>
---------------------------------------

What is 'MENU' tag -
Wrapper of command box in which we can run a particular command for performing its action. It represents a list of command. The additional attribute type and label is used.
e.g.
<button type=menu value="File" menu="filemenu">
<menu id="filemenu" type="popup">
	<menuitem onclick="fopen()" label="Open">
	<menuitem onclick="fedit()" label="Edit">
	<menuitem onclick="fclose()" label="Close()">
</menu>
Note: Not supported by any of the browsers yet.
---------------------------------------

What is 'METER' tag -
Used for scalar measurement. Can't be used if we don't have the known range. Has six attributes : 
Value, Max, Min, High, Low and Optimum
e.g.
<meter value="4" min="0" max="10">4 out of 10</meter>
Note : Supported by Safari, Firefox, IE, Opera and Chrome but not by IE.
---------------------------------------

What is 'NAV' tag - 
Used for referral and related page. Can be used for header navigation, side menu and footer links.
e.g.
<nav>
	<a href="#">Text 1</a> | <a href="#">Text 2</a> | <a href="#">Text 3</a> | <a href="#">Text 4</a> | <a href="#">Text 5</a>
</nav>
---------------------------------------

What is 'OUTPUT' tag - 
Used for resulting a calculation. One of the best feature of Form Elements, which allows user to make calculation on front end.
e.g.
<form onsubmit="return false" oninput="document.getElementById('o').
innerHTML = parseFloat(document.getElementById('a').value) +
parseFloat(document.getElementById('b').value)">
	<input name="a" id="a" type="number" step="any"> +
	<input name="b" id="b" type="number" step="any"> =
	<output name="o" id="o"></output>
</form>
---------------------------------------

What is 'PROGRESS' tag - 
Used to show the completion or progress of a specific task. Now only requires some handful code of JavaScript to show it
dynamically. Has mainly four attributes :
max, value, position and label.
e.g. <progress value="60" max="100"></progress>
Note: Not supported in Internet Explorer 9 and lower version.
---------------------------------------

What is 'RUBY' tag - 
Used to properly rendering the East Asian's languages. Used to display the text on the head of the base text, and auto rendering the base text and RUBY text in well manner to enhance the user experience in reading the document.
Has mainly three attributes : rt (ruby text), rp (ruby parenthesis) and rb (ruby base).
rb - East Asian's language text 
rt - Defines an explanation/pronunciation of characters (for East Asian typography)
rp - Defines what to show in browsers that do not support ruby annotations
e.g. 
<rudy>
	<rb>
		Ruby Base
	</rb>
	<rt>
		Ruby Text
	</rt>
	<rp>
		Ruby Parenthesis	
	</rp>
</rudy>
---------------------------------------

What is 'SECTION' tag - 
Used to define a particular section of main content. Used for providing a semantic structure of a web page content. We can just use it for chunking an article in different parts.
---------------------------------------

What is 'SOURCE' tag -
Used as a child element of AUDIO and VIDEO Element. It searches the source file and call it. Contains mainly three attributes: src (media file searching), type (media file format) and media (not supported in any browsers).
e.g.
<audio controls>
	<source src="media/simple_audio.mp3" type="audio/mpeg"/>
	<source src="media/simple_audio.ogg" type="audio/ogg"/>
	<p>Your file doesn't support the audio element</p>
</audio>
---------------------------------------

What is 'SUMMARY' tag -
Used as a child element of DETAILS Element. The SUMMARY Element contains the default text, which is shown when user see the browser and whenever user clicks this default text, the hidden text appears. The SUMMARY Element has minimize the external affords of JavaScript.
e.g.
<details>
	<summary>
		This is the default content.
	</summary>
	<p>This is the main content, which will be shown.</p>
</details>
Note : Supported by Safari and Chrome but not by Firefox, IE, Opera.
---------------------------------------

What is 'SVG' tag -
Used for graphical representation with HTML 5 and stands for Scalable Vector Graphics. Defines the Vector based graphics so there is no any chance to loose the quality even on zoomed situation. The script of SVG is in XML format. Every independent element can be animated. It is the recommendation of W3C.
e.g.
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
	<polygon points="100,10 40,180 190,60 10,60 160,180"/>
</svg>

Difference between CANVAS & SVG :

	canvas 														SVG
-------------------------------------------				  | -----------------------------------------------------------
It is created with the help of Java script	|	It is created in XML format
It is rendered pixel by pixel	|	It is in XML format, so also call external Java Script for event handling etc.
It is Resolution Dependent	|	It is Resolution Independent
It has no support for event handling	|	It has support for even handling
It has low text rendering capabilities	|	It has high text rendering capabilities
The graphics output can be saved as jpg or png format	|	The graphics output can't be saved in image format
Best suited for graphical intensive games	|	Not suited for games application
Once the graphic is drawn, it is forgotten by the Browser	|	It is always remembered by the browser
---------------------------------------

What is 'TIME' tag -
Represents either time on a 24-hour clock or a precise date in the Gregorian calendar with optional time and time zone information. TIME Element has been configured to presenting date and time in machine readable format.
Note: The TIME Element can't be used to see the front end effect on HTML5 document. It is pure machine readable element, which works in background of the script.
e.g.
<p>The school open at <time>9:00</time> in the every morning.</p>
---------------------------------------

What is 'TRACK' tag -
Used as a child element of AUDIO and VIDEO Element. Used to define subtitles, captions, descriptions, chapters, or meta-data for either an audio or video element. The TRACK Element is followed by the following attributes and values: default (specify that track is enabled), kind (specify the kind of track), label (specify the title of the text track), src (specify the url of track file) and srclang (specify the language track text).
e.g.
<video controls>
	<source src="media/simple_video.mp4" type="video/mp4"/>
	<source src="media/simple_video.ogg" type="video/ogg"/>
	<track src="media/subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
	<track src="media/subtitles_hi.vtt" kind="subtitles" srclang="hi" label="Hindi" default>
	<p>Your file doesn't support the video element</p>
</video>
Note: The TRACK Element is still not supported by any of the browsers. 
---------------------------------------

What is 'VIDEO' tag -
Used to play a movie or video clip on the website.
e.g.
<video controls>
	<source src="media/simple_video.mp4" type="video/mp4"/>
	<source src="media/simple_video.ogg" type="video/ogg"/>
	<track src="media/subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
	<track src="media/subtitles_hi.vtt" kind="subtitles" srclang="hi" label="Hindi" default>
	<p>Your file doesn't support the video element</p>
</video>
---------------------------------------

What is 'WBR' tag -
Used to change the default behavior of browser of line breaking. If the sentence is too long than the container, will be breaked for
proper displaying. If you don't want it to be happened like that, can use the WBR Element. This can be more useful for email id writing, and another long sentences.
e.g.
<p>This is my email id : <wbr>swapnilraja1212@gmail.com</wbr></p>
Note : Supported by Safari, Firefox, Opera and Chrome but not by IE.
---------------------------------------

DRAG & DROP in HTML 5 -
With the help of Drag and Drop features We can move an object from one place to another place. The all measure browsers support the dragging except of Safari 5.1.2.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Here's I have described what I know about CSS 3.
==================================================

What is CSS 3
===============

The development of style sheet was to make the markup language more impressive. It was discovered around 1980s in the beginning of the SGML. The third level of CSS was started to develop around 1998. The first working draft of CSS3 was came in 19-01-2001. And since the first introduction still it is under construction. There were some certain shortcomings in CSS2 and due to its unlikeness the developer introduced CSS3. Though the first working draft of CSS3 came on 19-01-2001, but it was initially declared early in the June 1999. It is the latest standard for CSS. Has been split into "modules". Contains the "old CSS specification" & in addition, new modules are added.

Some of the most important CSS3 modules:
---------------------------------------
Selectors
Box Model
Backgrounds and Borders
Image Values and Replaced Content
Text Effects
2D/3D Transformations
Animations
Multiple Column Layout
User Interface
---------------------------------------

What is module 'CSS3 Borders' -

a) border-radius
syntax: border-radius: length|% / length|%|initial|inherit;
e.g.: border-radius: 25px;

b) box-shadow
syntax: box-shadow: none|h-shadow v-shadow blur spread color |inset|initial|inherit;
e.g.: box-shadow: 2px 5px 10px 5px #434223;
explanation: Has 4 pixel (3rd & 4th are optional) values and 1 color value. First pixel value tells about left to right(h-shadow) movement of shadow, second value tells about top to bottom(v-shadow), third tells about blurriness, forth about spread and last to express shadow color.

c) border-image
syntax: border-image: source slice width outset repeat|initial|inherit;
e.g.: border-image: url(border.png) 15 30 30 round;
