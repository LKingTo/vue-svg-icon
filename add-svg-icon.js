// 向Test.vue 批量引入所有svg-icon组件
const fs = require('fs');

// 读取Test.vue
fs.readFile('./src/views/Test.vue', (err, data) => {
	if (err) throw err;
	let str = data.toString();
	let tpl = str.match(/<div class="container"><\/div>/)[0];
	let str2 = '';

	// 读取svg文件
	fs.readdir('./src/icons/svg', (err, files) => {
		if (err) throw err;

		files.forEach((file) => {
			let className = file.replace('.svg', '-svg');
			let name = file.replace('.svg', '');
			str2 += `<svg-icon class="${className}" icon-class="${name}"/>`;
		});

		str2 = `<div class="container">${str2}</div>`;
		str = str.replace(tpl, str2);

		// 写入Test.vue
		fs.writeFile('./src/views/Test.vue', str, (err) => {
			if (err) throw err;
		})
	});
});

