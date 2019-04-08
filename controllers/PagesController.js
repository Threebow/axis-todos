const {Controller} = require("axis");

module.exports = class PagesController extends Controller {
	async index() {
		return this.render("index");
	}
};