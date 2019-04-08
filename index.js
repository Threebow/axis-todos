/*---------------------------------------------------------------------------
	Import modules
---------------------------------------------------------------------------*/
const {App} = require("axis"),
	  path = require("path");

require("dotenv").config();


/*---------------------------------------------------------------------------
	Set up the axis app
---------------------------------------------------------------------------*/
let app = new App({
	//View stuff
	viewEngineName: "pug",
	viewEngine: require("pug"),
	viewDir: path.join(__dirname, "views"),

	//Session stuff
	session: {
		secret: process.env.APP_SECRET,
		resave: false,
		saveUninitialized: false
	},

	//Public directory
	publicDir: path.join(__dirname, "public"),

	//Functionality
	controllers: path.join(__dirname, "./controllers"),
	database: require("./database"),
	routers: [
		require("./routes/web")
	]
});

//Start the server up
app.listen(process.env.APP_PORT, () => {
	console.log(`Listening on ${process.env.APP_PORT}`);
	app.printRoutes();
});