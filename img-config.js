const path = require("path");
const SpritesmithPlugin = require("webpack-spritesmith");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let imgExports = {};

// common Configurations
const config = {
	entry: "./entry/img/dummy.js",
	output: {
		filename: "dummy.js",
		path: path.resolve(__dirname, "dist/img")
	},
	mode: "none",
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				})
			},
			{ test: /\.png$/, use: ["file-loader?name=i/[hash].[ext]"] }
		]
	},
	resolve: {
		modules: ["node_modules"]
	}
};

// config list
imgExports.common = Object.assign({}, config, {
	plugins: [
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, "entry/img/common"),
				glob: "*.png"
			},
			target: {
				image: path.resolve(__dirname, "dist/img/common-sprite.png"),
				css: path.resolve(__dirname, "entry/css/sprites/common-sprite.scss")
			},
			apiOptions: {
				cssImageRef: "/content/images/common-sprite.png?v=2019101701"
			},
			spritesmithOptions: {
				padding: 10
			}
		})
	]
});

// Return Array of Configurations
module.exports = imgExports;
