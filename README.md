Simple Sass Grid
================

This is a really simple Sass grid. It's based on [Don't Overthink It Grids][1] by Chris Coyier.

Simple Sass Grid makes use of border-box sizing and behaves itself pretty well. It's written in Sass and has
no dependencies within Sass. One of these days it'll be made obsolete by [Flexbox][3], but until then
it's a great way to make grid structures painless in CSS.

Usage
-----

If you're using Sass you can ssgrid in your project. Make sure to adjust for the path of your install where in a
subdirectory or bower components directory.

```sass
@include "ssgrid"
```

Set up your variables if you don't want to use the defaults. The !default flag is being used so you
can set these before calling the snippet into your project and your value will be respected.

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

Mixin
-----

By including this library you get the `ssgrid` mixin to define additional grids. It accepts three
arguments: padding, minimum rows, and maximum rows.

```sass
.grid
  +ssgrid(1rem,2,12)
```

Customization
-------------

By default a single grid is included in your CSS output just by including the library file, but you
can get more custom if you want.

To disable the default grid set the `$ssgrid-default` variable to `false`. Now the library is only
providing you with the `ssgrid` mixin to define your own grids. Here's a common pattern you might use.

```sass
.grid
  +ssgrid(2rem,2,6)
.grid-compact
  +ssgrid(.4rem,3,12)
```

Not Using Sass?
---------------

If you aren't using Sass on your project, you can still use Simple Sass Grid. Customize the
`build.sass` file included in this repository, install the NPM dependencies, run grunt, then take
the resulting `build.css` file elsewhere.

```sh
npm i /
grunt
```

Changelog
---------

+ v1.1.0
  + Greatly reduced number of generated selectors to improve efficiency
  + Added ssgrid mixin for easier creation of multiple, custom grids

+ v1.0.4
  + Added build steps

+ v1.0.3
  + Minor margin tweaks

+ v1.0.2
  + Fixing documentation

+ v1.0.1
  + Set variables using !default flag

+ v1.0.0
  + Registered with Bower

+ v0.1.0
  + No longer requires Compass or Bourbon

[1]: http://css-tricks.com/dont-overthink-it-grids
[2]: http://codepen.io/ryanburnette/pen/dcefa07c8fa60209a647391b1276f2c7
[3]: http://css-tricks.com/snippets/css/a-guide-to-flexbox/
