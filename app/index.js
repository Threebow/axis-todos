const {App} = require("@threebow/axis"),
	  path = require("path");

/*---------------------------------------------------------------------------
	Set up the axis app
---------------------------------------------------------------------------*/
let app = new App({
	container: require("../bootstrap/container"),
	controllers: path.join(__dirname, "./controllers"),
	routers: [
		require("../routes/web")
	],
	middleware: {
		web: [
			require("./middleware/locals"),
			require("./middleware/formatInput"),
			require("./middleware/error")
		]
	},
	csrf: true
});


/*---------------------------------------------------------------------------
	Listen on the port
---------------------------------------------------------------------------*/
app._server = app.listen(process.env.APP_PORT, () => {
	console.log(`Listening on ${process.env.APP_IP}:${process.env.APP_PORT}`);
});


/*---------------------------------------------------------------------------
	Export the app
---------------------------------------------------------------------------*/
module.exports = app;