/*---------------------------------------------------------------------------
	Mount the database onto the app
---------------------------------------------------------------------------*/
module.exports = (app) => {
	let db = require.main.require("./database");
	app.setDatabase(db);
	return db;
};