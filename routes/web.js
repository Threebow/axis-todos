//Create the router
const {RouteGroup} = require("axis");

//Controllers, Models
module.exports = ({PagesController, TodoController}, {Todo}) => {
	let app = new RouteGroup("/");

	app.get("/", PagesController.index);

	app.group("/todos", (group) => {
		group.get("/", TodoController.index);
		group.get("/:id", TodoController.view).bind("id", Todo);
	});

	return app;
};