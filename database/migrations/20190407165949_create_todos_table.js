module.exports = {
	up: (knex) => {
		return knex.schema.createTable("todos", (bp) => {
			bp.increments();
			bp.string("title").notNullable();
			bp.string("description", 2000).nullable().default(null);
			bp.integer("sort_order").unsigned().notNullable().default(0);
			bp.timestamps();
		});
	},

	down: (knex) => {
		return knex.schema.dropTable("todos");
	}
};