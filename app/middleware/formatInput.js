module.exports = (req, res, next) => {
	for(let i in req.body) {
		//If this is a raw input just leave it as is
		let raw = i.endsWith(":raw");
		if(raw) {
			req.body[i.slice(0, -4)] = req.body[i];
			delete req.body[i];
			continue;
		}

		//Let existing numbers through
		if(typeof req.body[i] === "number") continue;

		//Let arrays through
		if(Array.isArray(req.body[i])) continue;

		//Trim the input
		if(typeof req.body[i] === "string") {
			req.body[i] = req.body[i].trim();
		}

		//Check for empty strings
		if(req.body[i] === "") {
			delete req.body[i];
			continue;
		}

		//Check for "on" from checkboxes
		if(req.body[i] === "on") {
			req.body[i] = true;
			continue;
		}

		//Turn it into a number if it is a number
		let num = Number(req.body[i]);
		if(!isNaN(num)) {
			req.body[i] = num;
		}
	}

	//Pagination
	if(req.query.page) {
		let int = parseInt(req.query.page);
		req.query.page = isNaN(int) ? 0 : Math.max(0, int - 1);
	} else {
		req.query.page = 0;
	}

	res.locals.pageNumber = req.query.page;

	next();
};