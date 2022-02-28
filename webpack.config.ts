import { Configuration } from "webpack/types";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babelConfig = require("./babel.config.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx"
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},

			{
				test: /\.[j|t]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: babelConfig
					}
				]
			},

			{
				test: /\.(less|css)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
			},

			{
				test: /\.(jpg|png|woff|woff2|eot|ttf|ttc|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:8].css",
			chunkFilename: "[id].[name].[contenthash:8].css"
		}),
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
