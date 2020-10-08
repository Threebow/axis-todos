const mix = require("laravel-mix");

/*---------------------------------------------------------------------------
	Setup pug for vue components
---------------------------------------------------------------------------*/
mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.pug$/,
				oneOf: [
					{
						resourceQuery: /^\?vue/,
						use: ["pug-plain-loader"]
					},
					{
						use: ["raw-loader", "pug-plain-loader"]
					}
				]
			}
		]
	}
});


/*---------------------------------------------------------------------------
	Load assets
---------------------------------------------------------------------------*/
mix.js("resources/js/app.js", "public/js")
	.sass("resources/scss/app.scss", "public/css")
	.options({
		processCssUrls: false
	});