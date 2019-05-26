//Create dummy cache
class Cache {
	constructor() {
		this.keys = {};
	}

	set(key, val) {
		this.keys[key] = val;
	}

	get(key) {
		return this.keys[key];
	}
}

module.exports = () => new Cache();