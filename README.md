# element-theme-nio

UI参考: https://lanhuapp.com/web/?code=081NRAsf0HI83v1Cb0qf0TyIsf0NRAs9&state=#/item/project/board?pid=20591aae-f770-449a-82e2-bca548b88c70

> fork自 [element-theme-chalk](https://github.com/ElementUI/theme-chalk)

由于参考UI细节不够完整，所以还有很大的优化空间，欢迎提pr补充细节

## Installation
```shell
npm i git+https://git@git.nevint.com/DO-platform-lace/element-theme-nio.git -D

# or

npm i git+ssh://git@git.nevint.com/DO-platform-lace/element-theme-nio.git -D
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
