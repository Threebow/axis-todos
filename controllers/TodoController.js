const {Controller} = require("axis");

module.exports = class TodoController extends Controller {
	async index() {
		let todos = await this.models.Todo.query();
		return this.render("todos/index", {todos});
	}

	async view(todo) {
		return this.render("todos/view", {todo});
	}
};