/*---------------------------------------------------------------------------
	Mock cache implementation
---------------------------------------------------------------------------*/
function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

class Cache {
	constructor() {
		this.keys = {};
	}

	async set(key, val) {
		await delay(200);
		this.keys[key] = val;
	}

	async get(key) {
		await delay(200);
		return this.keys[key];
	}
}

module.exports = () => {
	return new Cache();
}