module.exports.seed = async (knex) => {
	//Delete existing entries
	await knex("todos").del();

	//Create new users
	await knex("todos").insert([
		{
			id: 1,
			name: "Buy some milk"
		},
		{
			id: 2,
			name: "Do the dishes",
		}
	]);
};