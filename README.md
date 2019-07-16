# vue-svg-icon
> vue-cli使用svg-sprite-loader在vue中引入svg图标

## 安装插件
yarn add svg-sprite-loader -D

## svg-icon组件
- 路径：src/components/svgIcon/index.vue
- 全局注册
- 组件

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
## 插件 svg-sprite-loader 配置
### vue-cli3配置（本版本使用vue-cli3）
- vue.config.js 设置内容如下：
```
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
  	/** 设置svg的router，使svg可直接用名称调用，无需路径 **/
  	config.module.rule('svg')
  	  .exclude.add(resolve('src/icons'))	// file-loader排除处理icons文件下的svg文件
  	  .end();
  	config.module.rule('svg-sprite-loader')
  	  .test(/\.svg$/)
  	  .include.add(resolve('src/icons')) //处理svg目录
  	  .end()
  	  .use('svg-sprite-loader')
  	  .loader('svg-sprite-loader')
  	  .options({
  	  	symbolId: 'icon-[name]'
  	  });
  }
}
```
## 插件 svgo、svgo-loader 精简压缩工具
- yarn add svgo svgo-loader -D
- vue.config.js 设置内容如下：
```
config.module.rule('svgo-loader')
  .test(/\.svg$/)
  .use('svgo-loader')
  .loader('svgo-loader')
  .options({
  	 plugin: [
  	   // 还有很多配置，具体可以查看https://github.com/svg/svgo
  	   { removeViewBox: false },
  	   { removeXMLNS: true }
  	 ]
  })
```

## 参考文献
- 手摸手，带你优雅的使用 icon https://juejin.im/post/59bb864b5188257e7a427c09
- 基于vue-cli3使用svg-sprite-loader在vue中引入svg图标 https://www.jianshu.com/p/b1a16a030f72
- SVG精简压缩工具svgo简介和初体验 https://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/
- SVG在线压缩合并工具 https://www.zhangxinxu.com/sp/svgo/

- gulp-iconfont仿阿里巴巴图标库，本地打包iconfont字体图标: https://github.com/w3cui/iconfont

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
