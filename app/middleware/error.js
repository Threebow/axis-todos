const Ouch = require("ouch"),
	  Sentry = require("@sentry/node");

module.exports = (err, req, res, next) => {
	//Handle validation errors
	if(err.name === "ValidationError") {
		let errors = [];

		for(let i in err.data) {
			if(!err.data.hasOwnProperty(i)) continue;

			err.data[i].forEach(obj => {
				errors.push(`${i} ${obj.message}`);
			});
		}

		if(process.env.NODE_ENV === "development") {
			console.log(err);
		}

		let header = req.get("Accept") || req.get("Content-Type");
		if(header && header.includes("application/json")) {
			return res.status(400).json({
				err: true,
				errors
			});
		} else {
			errors.forEach(e => req.flash("error", e));
			return res.redirect("back");
		}
	}

	//Handle model 404s
	if(err.name === "NotFoundError") {
		return res.status(404)
			.render("error", {code: 404});
	}

	//Handle all other errors
	if(process.env.NODE_ENV === "development") {
		if(req.get("Accept").includes("application/json")) {
			res.status(500)
				.json({
					err: true,
					message: err.message
				});
		} else {
			let ouch = new Ouch();
			ouch.pushHandler(new Ouch.handlers.PrettyPageHandler("blue", null, "sublime"));
			ouch.handleException(err, req, res);
		}
	} else {
		res.status(500)
			.render("error", {
				code: 500,
				// eventId: Sentry.captureException(err)
			});
	}
};

module.exports.delayed = true;