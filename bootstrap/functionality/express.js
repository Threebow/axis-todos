const path = require("path"),
	  bodyParser = require("body-parser"),
	  express = require("express"),
	  flash = require("express-flash"),
	  session = require("express-session"),
	  pug = require("pug"),
	  morgan = require("morgan");

module.exports = (app, {Cache}) => {
	//Expose IPs from nginx
	app.enable("trust proxy");

	//Public directory
	app.use(express.static(path.join(process.cwd(), "./public")));

	//Body and cookie parser
	app.use(bodyParser.urlencoded({extended: false, limit: "8mb"}));
	app.use(bodyParser.json());

	//Sessions
	app.use(session({
		secret: process.env.APP_SECRET,
		saveUninitialized: false,
		resave: false
	}));

	//Flash messaging
	app.use(flash());

	//View engine and settings
	app.engine("pug", pug.__express);
	app.set("view engine", "pug");
	app.set("views", path.join(process.cwd(), "./resources/views"));

	//Morgan logging
	app.use(morgan("tiny"));

	//Set basedir for views
	app.locals.basedir = app.get("views");
};