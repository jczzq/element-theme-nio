# element-theme-nio
基于`element-ui`的个性主题。
![stars](https://img.shields.io/github/stars/jczzq/element-theme-nio.svg)
![issues](https://img.shields.io/github/issues/jczzq/element-theme-nio.svg)
![forks](https://img.shields.io/github/forks/jczzq/element-theme-nio.svg)

<a href="https://github.com/jczzq/element-theme-nio" target="_blank"> Github </a>

<a href="https://blog.jczzq.com/element-theme-nio/index.html#/" target="_blank"> 示例 </a>

## Installation
```bash
npm i element-theme-nio
```

## Usage

Use Sass import
```css
@import 'element-theme-nio';
```

Or Use webpack
```javascript
import 'element-theme-nio';
```

构建时按需引入主题需要在`babel.config.js`设置`styleLibraryName`
```
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "~node_modules/element-theme-nio/lib"
      }
    ]
  ]
};
```

Or
```html
<link rel="stylesheet" href="path/to/node_modules/element-theme-nio/lib/index.css">
```

##  Import on demand
```javascript
import 'element-theme-nio/lib/input.css';
import 'element-theme-nio/lib/select.css';
// ...
```
