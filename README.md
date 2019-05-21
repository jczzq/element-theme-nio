# element-theme-nio
基于`element-ui`的个性主题。

> fork自 [element-theme-chalk](https://github.com/ElementUI/theme-chalk)

由于参考UI细节不够完整，所以还有很大的优化空间，欢迎提pr补充细节

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
