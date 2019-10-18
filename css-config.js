const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let cssExports = {};

// common Configurations
const config = {
	mode: "production",
	output: {
		// ex) /dist/css/common.css
		path: __dirname + "/dist/css",
		filename: "[name].css"
	},
	devtool: "source-map",
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
							loader: "postcss-loader",
							options: {
								plugins: () => [require("autoprefixer")()]
							}
						},
						{
							loader: "sass-loader"
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].css"
		})
	],
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false
					}
				}
			})
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css", ".scss"],
		alias: {
			css: path.resolve(__dirname, "entry/css/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			abstracts: path.resolve(__dirname, "entry/css/abstracts/"),
			base: path.resolve(__dirname, "entry/css/base/"),
			components: path.resolve(__dirname, "entry/css/components/"),
			layout: path.resolve(__dirname, "entry/css/layout/"),
			pages: path.resolve(__dirname, "entry/css/pages/"),
			sprites: path.resolve(__dirname, "entry/css/sprites/")
		}
	}
};

// config list
cssExports.common = Object.assign({}, config, {
	entry: {
		common: "./entry/css/pages/common.scss"
	}
});

cssExports.guide = Object.assign({}, config, {
	entry: {
		guide: "./entry/css/pages/guide.scss"
	}
});

cssExports.page_template = Object.assign({}, config, {
	entry: {
		page_template: "./entry/css/pages/page_template.scss"
	}
});

// Return Array of Configurations
module.exports = cssExports;
