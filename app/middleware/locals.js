const moment = require("moment");
const {version} = require("./../../package.json");
const _ = require("lodash");

module.exports = async (req, res, next) => {
	res.locals.moment = moment;
	res.locals.version = version;
	res.locals._ = _;

	res.locals.formatDate = (date) => moment(date).format("MMMM Do YYYY, h:mm:ss a");
	res.locals.formatDateFormal = (date) => moment(date).format("MM/DD/YYYY HH:mm:ss");
	res.locals.formatDateMinimal = (date) => moment(date).format("MMMM Do YYYY");

	next();
};