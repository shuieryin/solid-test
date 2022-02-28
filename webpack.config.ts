import { Configuration } from "webpack/types";

const path = require("path");
const { rules, plugins } = require("./webpack.shared");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx"
	},
	devtool: "inline-source-map",
	module: { rules },
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		...plugins,
		new HtmlWebpackPlugin({
			favicon: "public/favicon.ico",
			template: "public/index.html"
		})
	],
	devServer: {
		devMiddleware: {
			writeToDisk: true
		}
	}
} as Configuration;
