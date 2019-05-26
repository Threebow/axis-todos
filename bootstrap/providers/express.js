const path = require("path"),
	bodyParser = require("body-parser"),
	express = require("express"),
	cookieParser = require("cookie-parser"),
	flash = require("express-flash"),
	session = require("express-session");

module.exports = (app) => {
	//Configuring express
	app.use(express.static(path.join(process.cwd(), "./public")));

	app.use(bodyParser.urlencoded({extended: false, limit: "8mb"}));
	app.use(bodyParser.json());
	app.use(cookieParser());

	app.use(session({resave: false, saveUninitialized: false, secret: process.env.APP_SECRET}));

	app.use(flash());

	app.engine("pug", require("pug").__express);
	app.set("view engine", "pug");
	app.set("views", path.join(process.cwd(), "./views"));
};