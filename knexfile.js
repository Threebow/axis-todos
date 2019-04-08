const path = require("path"),
	  templates = require("axis/templates");

require("dotenv").config();

module.exports = {
	client: "mysql2",
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	},
	migrations: {
		directory: path.join(__dirname, "database/migrations"),
		stub: templates.migration
	},
	seeds: {
		directory: path.join(__dirname, "database/seeds"),
		stub: templates.seed
	}
};
