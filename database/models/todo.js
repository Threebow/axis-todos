const {BaseModel} = require("@threebow/axis");

module.exports = class Todo extends BaseModel {
	static get tableName() {
		return "todos";
	}

	static get timestamps() {
		return true;
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["title", "sort_order"],

			properties: {
				id: {type: "integer", minimum: 0},
				title: {type: "string", minLength: 2, maxLength: 255},
				description: {type: ["string", "null"], minLength: 2, maxLength: 2000, default: null},
				sort_order: {type: "integer", minimum: 0, default: 0}
			}
		};
	}
};