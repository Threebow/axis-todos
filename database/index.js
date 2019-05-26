/*---------------------------------------------------------------------------
	Require modules
---------------------------------------------------------------------------*/
const {Database} = require("@threebow/axis"),
	  path = require("path");


/*---------------------------------------------------------------------------
	Instantiate database
---------------------------------------------------------------------------*/
module.exports = new Database({
	options: require("../knexfile"),
	models: path.join(__dirname, "./models")
});