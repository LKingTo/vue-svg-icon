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