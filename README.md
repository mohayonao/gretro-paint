# gretro-paint

> Gretro-paint is a [gretro](https://github.com/mohayonao/gretro) plugin to fill an area.

![](https://raw.githubusercontent.com/mohayonao/gretro-paint/master/examples/example.png)

## Installation

##### browser

include [gretro-paint.js](https://raw.githubusercontent.com/mohayonao/gretro-paint/master/gretro-paint.js) after including `gretro.js`

```html
<script src="gretro.js"></script>
<script src="gretro-paint.js"></script>
```

##### node.js

`gretro-paint` is available on npm.

```sh
$ npm install gretro-paint
```

```javascript
var gretro = require("gretro");
var gretroPaint = require("gretro-paint");

gretro.use(gretroPaint);
```

## API Reference

## paint

#### Syntax

```javascript
canvas.paint(x, y);
```

#### Parameters

  - **x**: int
    - x-coordinate of the beginning point to fill
  - **y**: int
    - y-coordinate of the beginning point to fill

#### Returns

  Canvas: self for method chaining
