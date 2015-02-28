# Simple Sass Grid

Just another Sass grid library. This one is based on [don't overthink it grids
from CSS-Tricks][1].

## Mission

This grid library is designed with a few specific goals in mind:

### Flexible Context

SSG can be added to an existing site without enforcing its requirements on
surrounding elements. Its context requires border-box sizing, for example, but
this is established only on the context that actually requires it.  This makes
it a perfect candidate for using within an embedded element, for example.

### Rigid Gutters

Some grids have a flexible gutter that changes as the container size changes.
SSG uses rigid gutters. If a gutter is 30px at one width, it will always be 30px
even if the viewport becomes really small.

### Break Rows Without Wrapping

I absolutely hate writing view login that wraps every `n` elements in a row.
It's one of the more common approaches to breaking rows, but it's not a
requirement here as long as all the elements in a grid are the same. If the
elements aren't the same you can still call the `grid-row-begin` mixin to avoid
having to wrap rows. You can also call a `row` mixin if you are wrapping your
rows.

### Use an "inner"

This grid uses padding, not margins, so you'll want to always have an inner
element. If you were set a background color or border on the column you wouldn't
get the desired result.

## Usage

### Clearfix

SSG depends on having a `clearfix` mixin. If you don't already have one, there's
one in the directory you can include.

### Bower

[Bower][4] is a great way to depend on SSG.

```
bower install -S simple-sass-grid
```

Include the library from the `bower_components` directory.

### Mixins

If you're using Sass you'll probably want to take a "mixed in" approach where
you call the core components of SSG as mixins.

Call the `grid` mixin and set your gutter. I like to use a variable because
you'll need it again.

```sass
$gutter: 1em
.grid
  +grid($gutter)
```

Set up a row if you're using rows.

```sass
.grid .row
  +grid-row
```

Set up needed columns using any pattern that you like. The idea is to say "this
column is one of three, or 1/3. You'll need to pass in the gutter you set for
the grid.

```sass
.grid .col-1-3
  +grid-column(1, 3, $gutter)
```

### CSS

If you aren't using Sass or if you want to build a grid and use classes on
elements to set up your grids old school. That's cool.

A `simple-sass-grid.css` file is also included that has all the classes for a
grid with `1em` gutters and a minimum of 2 and a maximum of 20 columns. Here's
some example markup.

```html
<div class="grid">
  <div class="row">
    <div class="col-1-4"></div>
    <div class="col-1-4"></div>
    <div class="col-2-4"></div>
  </div>
</div>
```

[1]: http://css-tricks.com/dont-overthink-it-grids 
[2]: http://codepen.io/ryanburnette/pen/dcefa07c8fa60209a647391b1276f2c7
[3]: http://css-tricks.com/snippets/css/a-guide-to-flexbox/
[4]: http://bower.io
