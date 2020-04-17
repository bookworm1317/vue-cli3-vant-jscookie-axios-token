module.exports = {
	/* 部署应用包的基本URL */
	/* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
	publicPath: process.env.NODE_ENV === 'production' ?'./' :'./',

	// 打包输出的文件目录 默认为dist 可不用设置
	outputDir: 'dist',

	// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的)目录
	// assetsDir: 'static',

	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
	// Default: 'index.html'
	indexPath: 'index.html',

	/*
	默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
	然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
	如果你无法使用 Vue CLI 生成的 index HTML，
	你可以通过将这个选项设为 false 来关闭文件名哈希
	*/
	filenameHashing: true,

	/*
	构建多页时使用
	在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
	其值应该是一个对象，对象的 key 是入口的名字，value 是
	一个指定了 entry, template, filename, title 和 chunks 的对象
	(除了 entry 之外都是可选的)或一个指定其 entry 的字符串
	Default: undefined
	*/
	pages: undefined,

	// eslint-loader是否在保存的时候检查
	lintOnSave: false,

	/*
	是否使用包含运行时编译器的 Vue 构建版本。
	设置为 true 后你就可以在 Vue 组件中使用 template 选项了，
	但是这会让你的应用额外增加 10kb 左右。
	*/
	runtimeCompiler: false,

	// 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
	//如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
	transpileDependencies: [],

	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	productionSourceMap: false,

	// 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
	//如果这个值是一个函数，则会接收被解析的配置作为参数。
	//该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	},
	// configureWebpack: config => {
	// 	if (process.env.NODE_ENV === 'production') {
	// 		// 为生产环境修改配置...
	// 	} else {
	// 		// 为开发环境修改配置...
	// 	}
	// },

	// 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
	//允许对内部的 webpack 配置进行更细粒度的修改。
	chainWebpack: config => {
		/*config.module
			.rule('images')
			.use('url-loader')
				.loader('url-loader')
				.tap(options => {
					// 修改它的选项...
					return options
				})*/
	},

	// css相关配置
	css: {
		//只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
		//设置为 true 后你就可以去掉文件名中的 .module
		//并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
		//Default: false
		modules: false,

		//是否使用css分离插件 ExtractTextPlugin
    //是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    //Default: 生产环境下是 true，开发环境下是 false
		extract: true,

		//是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    //Default: false
		sourceMap: false,

		//css预设器配置项 Default: {}
		loaderOptions: {
			// 给 sass-loader 传递选项
			// sass: {
			// 	// @/ 是 src/ 的别名
			// 	// 所以这里假设你有 `src/variables.scss` 这个文件
			// 	data: `@import "~@/variables.scss";`
			// }
		},
	},

	/*
	所有 webpack-dev-server 的选项都支持。
	注意：
	有些值像 host、port 和 https 可能会被命令行参数覆写。
	有些值像 publicPath 和 historyApiFallback 不应该被修改，
	因为它们需要和开发服务器的 publicPath 同步以保障正常的工作
	*/
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		https: false,

		//自动启动浏览器
		open: false,

		/**
		 * hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，
		 * 前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
		 */
		hotOnly: false,

		// 设置代理
		//proxy: {
		// 	"/api": {
		// 			//代理路径 例如 https://baidu.com
		// 			target:  "https://baidu.com",
		// 			// 将主机标头的原点更改为目标URL
		// 			//是否跨域
		// 			changeOrigin: true,
		// 			ws: true,
		// 			//pathRewrite: {
		// 				//"^/api": ""
		// 			//}
		// 		}
		//}
	},

	// PWA 插件相关配置
	pwa: {},

	// 第三方插件配置
	pluginOptions: {
		// ...
	}
}