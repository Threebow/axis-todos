/*---------------------------------------------------------------------------
	Import modules
---------------------------------------------------------------------------*/
const {App} = require("../axis"),
	  path = require("path");

require("dotenv").config();


/*---------------------------------------------------------------------------
	Set up the axis app
---------------------------------------------------------------------------*/
let app = new App({
	//Functionality
	controllers: path.join(__dirname, "./controllers"),
	container: require("./bootstrap/container"),
	routers: [
		require("./routes/web")
	]
});

//Start the server up
app.listen(process.env.APP_PORT, () => {
	console.log(`Listening on ${process.env.APP_PORT}`);
	app.printRoutes();
});