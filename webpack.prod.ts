import { Configuration } from "webpack/types";

const webpackConfig = require("./webpack.config");

module.exports = {
	...webpackConfig,
	mode: "production",
	output: {
		filename: "[name].js",
		path: require("path").resolve(__dirname, "dist")
	},
	devtool: undefined,
	devServer: undefined
} as Configuration;
