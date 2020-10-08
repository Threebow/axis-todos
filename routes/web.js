//Create the router
const {RouteGroup} = require("@threebow/axis");

//Controllers, Models
module.exports = (c, m) => {
	let app = new RouteGroup("/");
	app.middleware("web");
	app.csrf();

	app.get("/", c.PagesController.index).name("index");

	app.group("/todos", (group) => {
		group.get("/", c.TodosController.index).name("index");
		group.post("/", c.TodosController.store).name("store");
		group.get("/:id", c.TodosController.show).bind("id", m.Todo).name("show");
		group.post("/:id", c.TodosController.update).bind("id", m.Todo).name("update");
		group.delete("/:id", c.TodosController.destroy).bind("id", m.Todo).name("destroy");
	}).prefix("todos.");

	return app;
};