const { Model } = require("objection");

module.exports = class Todo extends Model {
	static get tableName() {
		return "todos";
	}

	static get bindingColumnName() {
		return "id";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["name"],

			properties: {
				id: {type: "integer", "minimum": 0},
				name: {type: "string", minLength: 1, maxLength: 255}
			}
		};
	}
};