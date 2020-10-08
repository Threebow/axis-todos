const {Controller} = require("@threebow/axis");

const PER_PAGE = 30;

module.exports = class TodosController extends Controller {
	async index(req) {
		let todos = await this.models.Todo.query()
			.search(req.query.search, ["title"])
			.page(req.query.page, PER_PAGE);

		return this.render("todos/index", {todos, PER_PAGE});
	}

	async show(req, res, todo) {
		return this.render("todos/show", {todo});
	}

	async store() {
		let todo = await this.models.Todo.query()
			.insert({
				title: "New Todo"
			});

		return this.redirect
			.to("todos.show", todo)
			.withSuccess("Created new todo!");
	}

	async update(req, res, todo) {
		await todo.$query()
			.patch({
				title: req.body.title,
				description: req.body.description || null
			});

		return this.redirect
			.to("todos.show", todo)
			.withSuccess("Updated todo!");
	}

	async destroy(req, res, todo) {
		await todo.$query().delete();
		return 204;
	}
};