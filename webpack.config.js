const path = require("path");

console.log();

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			loader: "babel-loader",
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		}, {
       test: /\.(woff|woff2|eot|ttf|otf|png|jpg|jpeg|svg)$/,
       use: [
         'file-loader'
       ]
    }]
	},
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "public")
	}
};