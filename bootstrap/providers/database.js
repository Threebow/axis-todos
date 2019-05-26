/*---------------------------------------------------------------------------
	Require modules
---------------------------------------------------------------------------*/
const {Database} = require("@threebow/axis"),
	  path = require("path");


/*---------------------------------------------------------------------------
	Instantiate database
---------------------------------------------------------------------------*/
module.exports = (app) => {
	let db = new Database({
		options: require(path.join(process.cwd(), "./knexfile")),
		models: path.join(process.cwd(), "./database/models")
	});

	app.setDatabase(db);

	return db;
};