module.exports = {
	up: (knex) => {
		return knex.schema.createTable("todos", (bp) => {
			bp.increments();
			bp.string("name");
			bp.timestamps();
		});
	},

	down: (knex) => {
		return knex.schema.dropTable("todos");
	}
};