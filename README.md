# Styled-Velocity with Emotion

Styled-Velocity with Emotion, a React-based styled prop and UI library to increase your velocity and help build your Design System.

## Install

```js
yarn add @emotion/react styled-velocity-emotion
```

or

```js
npm install @emotion/react styled-velocity-emotion
```

## sharedProps

Import example:

```js
import { appearanceProps, dimensionProps } from 'styled-velocity-emotion'
```

## Components

**All of the following have access to the sharedProps.**

Import example:

```js
import { Element, Flex, Main, Section } 'styled-velocity-emotion'
```

## Available sharedProps

| import            | prop            | css property              | conversionType    |
| ----------------- | --------------- | ------------------------- | ----------------- |
| `appearanceProps` | `bg`            | background                |                   |
| ""                | `bgImage`       | background-image          |                   |
| ""                | `bgSize`        | background-size           |                   |
| ""                | `border`        | border                    |                   |
| ""                | `borderLeft`    | border-left               |                   |
| ""                | `borderRight`   | border-right              |                   |
| ""                | `borderBottom`  | border-bottom             |                   |
| ""                | `borderRadius`  | border-radius             |                   |
| ""                | `boxShadow`     | box-shadow                |                   |
| `cssProps`        | `css`           | any css                   |                   |
| `dimensionProps`  | `m`             | margin                    |                   |
| ""                | `mt`            | margin-top                |                   |
| ""                | `mb`            | margin-bottom             |                   |
| ""                | `ml`            | margin-left               |                   |
| ""                | `mr`            | margin-right              |                   |
| ""                | `mx`            | `ml` and `mr`             |                   |
| ""                | `my`            | `mt` and `mb`             |                   |
| ""                | `p`             | padding                   |                   |
| ""                | `pt`            | padding-top               |                   |
| ""                | `pb`            | padding-bottom            |                   |
| ""                | `pl`            | padding-left              |                   |
| ""                | `pr`            | padding-right             |                   |
| ""                | `px`            | `pl` and `pr`             |                   |
| ""                | `py`            | `pt` and `pb`             |                   |
| ""                | `h`             | height                    |                   |
| ""                | `w`             | width, flex-basis         |                   |
| ""                | `minh`          | min-height                |                   |
| ""                | `minw`          | min-width                 |                   |
| ""                | `maxh`          | max-height                |                   |
| ""                | `maxw`          | max-width                 |                   |
| ""                | `c`             | `cw` and `ch`             | getCells          |
| ""                | `cw`            | cells wide                | getCells          |
| ""                | `ch`            | cells height (cells tall) | getCells          |
| ""                | `cm`            | cells margin              | getCells          |
| ""                | `cml`           | cells margin-left         | getCells          |
| ""                | `cmr`           | cells margin-right        | getCells          |
| ""                | `cmt`           | cells margin-top          | getCells          |
| ""                | `cmb`           | cells margin-bottom       | getCells          |
| ""                | `cmx`           | `cml` and `cmr`           | getCells          |
| ""                | `cmy`           | `cmt` and `cmb`           | getCells          |
| ""                | `cp`            | cells padding             | getCells          |
| ""                | `cpl`           | cells padding-left        | getCells          |
| ""                | `cpr`           | cells padding-right       | getCells          |
| ""                | `cpt`           | cells padding-top         | getCells          |
| ""                | `cpb`           | cells padding-bottom      | getCells          |
| ""                | `cpx`           | `cpl` and `cpr`           | getCells          |
| ""                | `cpy`           | `cpt` and `cpb`           | getCells          |
| ""                | `ctransform`    | cells transform           | getCellsTranslate |
| `flexProps`       | `direction`     | flex-direction            | getFlexProperty   |
| ""                | `wrap`          | flex-wrap                 |                   |
| ""                | `align`         | justify-content           | getFlexProperty   |
| ""                | `valign`        | align-items               | getFlexProperty   |
| ""                | `valignContent` | align-content             | getFlexProperty   |
| ""                | `grow`          | flex-grow                 |                   |
| ""                | `shrink`        | flex-shrink               |                   |
| `positionProps`   | `t`             | top                       |                   |
| ""                | `b`             | bottom                    |                   |
| ""                | `l`             | left                      |                   |
| ""                | `r`             | right                     |                   |
| ""                | `x`             | `r` and `l`               |                   |
| ""                | `y`             | `t` and `b`               |                   |
| ""                | `ct`            | cells top                 | getCells          |
| ""                | `cb`            | cells bottom              | getCells          |
| ""                | `cl`            | cells left                | getCells          |
| ""                | `cr`            | cells right               | getCells          |
| ""                | `cx`            | `cr` and `cl`             | getCells          |
| ""                | `cy`            | `ct` and `cb`             | getCells          |
| ""                | `position`      | position                  |                   |
| ""                | `z`             | z-index                   |                   |
| `textProps`       | `color`         | color                     |                   |
| ""                | `textColor`     | color                     |                   |
| ""                | `textAlign`     | text-align                |                   |
| ""                | `textTransform` | text-transform            |                   |
| ""                | `fontFamily`    | font-family               |                   |
| ""                | `fontSize`      | font-size                 |                   |
| ""                | `fontWeight`    | font-weight               |                   |
| ""                | `lineHeight`    | line-height               |                   |

## Breakpoints

### About

All of the sharedProps can take a single value, or an object of Breakpoints. You have all the choices you could possibly use for creating style within breakpoints. This system is _mobile first_, but there's several ways to mix it up.

### Example

Let's using the `width` css property for the following examples...

##### No breakpoint

```js
w={50}
```

##### Mobile: 50, Tablet: 100, Desktop: 150

If you want to create a breakpoint, supply an object, and use the key as the breakpoint. Make sure to give the lowest a `0`, if it's min-width 0, it won't wrap it in a media query.

```js
w={{ 0: 50, 768: 100, 1024: 150 }}
```

returns

```css
width: 50px;

@media (min-width: 768px) {
  width: 100px;
}
@media (min-width: 1024px) {
  width: 150px;
}
```

##### Mobile: 50, Tablet: 100, Desktop

If you want to create a breakpoint that has min and max, supply a key that is a string like so...

```js
w={{ '768-1024': 100 }}
```

returns

```css
@media (min-width: 768px) and (max-width: 1024px) {
  width: 100px;
}
```

Pretty cool, eh?

### Scaling Font Sizes

This min-max string key is how the scaling pixel values work. If you wanted to scale anything from one pixel value to another, like `font-size` for instance, you can do this...

```js
fontSize={{
  0: 12,
  '414-1023': [12, 36],
  1024: 36
}}
```

returns

```css
font-size: 12px;

@media (min-width: 414px) and (max-width: 1023px) {
  A css formula to scale the font-size from 12px to 36px based on screen width
}

@media (min-width: 1024px) {
  font-size: 36px;
}
```

## conversionType

Notice the `conversionType`? This should clue you into what is possible for the given prop.

### getCells

This takes an `int` and converts it to the cells width (or height). Thus `cw={2}` makes the element 2 cells wide (based on your grid config).

### getCellsTranslate

Similar to `getCells`, but takes an object. `ctransform={{ 0: {x: 0.5, y: 0} }}` would offset the x coords of the element by 1/2 cells width.

### getFlexProperty

Flex has some pretty unintuitive properties. For instance, `valign="top"` refers to the vertical alignment an element (assuming you staying with direction=row). You can of course pass the original css flex properties as well if you are used to them.

| input  | output     |
| ------ | ---------- |
| top    | flex-start |
| left   | flex-start |
| start  | flex-start |
| bottom | flex-end   |
| right  | flex-end   |
| end    | flex-end   |
| middle | center     |
| center | center     |

## Config in the `<head>`

You'll want to include a few things in your head tag.

```html
<script>
  !(function () {
    var rootStyle = document.documentElement.style

    function srcWidth() {
      rootStyle.setProperty(
        '--scr',
        'calc(100vw - ' + (window.innerWidth - document.documentElement.clientWidth) + 'px)',
      )
    }
    document.addEventListener('DOMContentLoaded', srcWidth)
    srcWidth()
  })()
</script>
<style>
  :root {
    --scr: 100vw;
    --sv-cells: 40;
    --sv-cell: calc(var(--scr) / var(--sv-cells));
    --sv-section-item-maxw: 2000px;
  }

  @media (min-width: 2000px) {
    :root {
      --sv-cell: 50px;
    }
  }
</style>
```
