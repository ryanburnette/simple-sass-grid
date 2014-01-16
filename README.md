Simple Sass Grid
================

Simple Sass Grid is a really simple Sass grid. It's based on [Don't Overthink It Grids][1] by Chris Coyier.

This grid makes use of border-box sizing and behaves itself pretty well. It's written in true Sass and has
no dependencies. Include it in your Sass before using it and don't forget to set up your variables.

Usage
-----

First, include ssgrid in your project. Make sure to adjust for the path of your install where in a
subdirectory or bower components directory.

In Sass

```sass
@include "ssgrid"
```

In SCSS

```scss
@include "ssgrid";
```

Set up your variables if you don't want to use the defaults.

`$ssgrid-padding` This value sets up your gutters.  
`$ssgrid-min-col` The minimum number of columns for a grid.  
`$ssgrid-max-col` The maximum number of columns for a grid.  

Then create your grids like so.

```html
<div class="ssgrid">
  <div class="col-1-3"><div class="inner"></div></div>
  <div class="col-1-3"><div class="inner"></div></div>
  <div class="col-1-3"><div class="inner"></div></div>
</div>
```

Note that each column must have a class that matches the grid. For example, if the grid has 3 columns then each
class will end in 3. An individual column can have 1 or 2 columns. Continuing that pattern if we have 5 columns
each column will have a class of anything through `col-1-5` to `col-4-5`. Try it out on [CodePen][2] to get the
hang of it.

Also note that you don't want to apply styling to the column element as it might interfere with the grid. I suggest
creating an inner element then applying styling and adding elements from there.

Changelog
---------

+ v1.0.0
  + Registered with Bower

+ v0.1.0
  + No longer requires Compass or Bourbon

[1]: http://css-tricks.com/dont-overthink-it-grids
[2]: http://codepen.io/ryanburnette/pen/dcefa07c8fa60209a647391b1276f2c7
