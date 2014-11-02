Simple Sass Grid
================

This is a really simple Sass grid that I use in my own projects via [Bower][4].
It's based on what I learned about grids from [here][1].

Simple Sass Grid makes use of border-box sizing and behaves reliably in IE8+.
It's written in Sass and has
no dependencies. One of these days it'll be made obsolete by [Flexbox][3], but until then
it's a great way to make grid structures painless in CSS.

Usage
-----

If you're using Sass you can ssgrid in your project. Make sure to adjust for the path of your install where in a
subdirectory or bower components directory.

```scss
@include "simple-sass-grid";
```

Create some grids using the mixin.

```sass
$padding: 1em;

.my_grid {
  @include simple-sass-grid($padding);
}
.inner {
  background-color: gray;
}
```

```html
<div class="my_grid">
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

+ v2.0.0
  + Only a mixin now
  + Output much more efficient when creating many grids
  + Default min of 2 and max of 20

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
[4]: http://bower.io
