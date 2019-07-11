# vue-svg-icon
> vue-cli使用svg-sprite-loader在vue中引入svg图标

## 安装插件
yarn add svg-sprite-loader -D

## svg-icon组件，
### 路径：src/components/svgIcon/index.vue
### 全局注册

```
//components/Icon-svg
<template>
  <svg :class="svgClass" aria-hidden="true">
  	<use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
  	  type: String,
  		required: true
  	},
  	className: {
  	  type: String,
  	  default: ''
  	}
  },
  computed: {
  	iconName() {
  	  return `#icon-${this.iconClass}`
  	},
  	svgClass() {
  	  if (this.className) {
  	    return 'svg-icon ' + this.className
  	  } else {
  		return 'svg-icon'
  	  }
  	}
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```
## svg图片
- svg库：阿里开源图库 https://www.iconfont.cn/
- 路径：src/icons/svg 存放svg文件
- src/icons目录下，创建index.js，用加载所有svg文件，代码如下：
```
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

```



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
