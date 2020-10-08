/*---------------------------------------------------------------------------
	Require modules
---------------------------------------------------------------------------*/
const {Database} = require("@threebow/axis"),
	  {Model} = require("objection"),
	  path = require("path");


/*---------------------------------------------------------------------------
	Add functions to model prototype
---------------------------------------------------------------------------*/
Model.updateOrder = async function (ids) {
	for(let i = 0; i < ids.length; i++) {
		await this.query().where({id: ids[i]}).patch({sort_order: i + 1});
	}
};


/*---------------------------------------------------------------------------
	Instantiate database
---------------------------------------------------------------------------*/
module.exports = new Database({
	options: require("../knexfile"),
	models: path.join(__dirname, "./models")
});