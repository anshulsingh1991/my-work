Here's I have described what I know about CSS 3.
==================================================

It is the latest standard for CSS. Has been split into "modules". Contains the "old CSS specification" & in addition, new modules are added.

Some of the most important CSS3 modules are:

Selectors
Box Model
Backgrounds and Borders
Image Values and Replaced Content
Text Effects
2D/3D Transformations
Animations
Multiple Column Layout
User Interface
--------------------------------------------------

1. CSS3 Borders

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






------------------------------------------------------------------------------------------------------------------
done till : http://www.w3schools.com/css/css3_borders.asp
===============================
#myDIV {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    -webkit-animation: mymove 5s infinite; /* Chrome, Safari, Opera */
    animation: mymove 5s infinite;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes mymove {
    50% {border-radius: 5px;}
}

/* Standard syntax */
@keyframes mymove {
    50% {border-radius: 5px;}
}
===============================

