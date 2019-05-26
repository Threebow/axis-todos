/*---------------------------------------------------------------------------
	Import the container class
---------------------------------------------------------------------------*/
const {Container} = require("@threebow/axis");


/*---------------------------------------------------------------------------
	Create the container and register all of our dependencies
---------------------------------------------------------------------------*/
const container = new Container();
container.functionality(require("./providers/express"));
container.service("Database", require("./providers/database"));
container.service("Cache", require("./providers/cache"));

module.exports = container;