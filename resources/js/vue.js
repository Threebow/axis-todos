const Vue = require("vue");

/*---------------------------------------------------------------------------
	Importing our components
---------------------------------------------------------------------------*/
const COMPONENTS = {
	"pagination":		"Pagination",
	"search-bar":		"SearchBar",
	"delete-button":	"DeleteButton",
	"icon":				"Icon",
	"site-footer":		"SiteFooter",
	"csrf":				"CSRFTokenInput"
}

for(let i in COMPONENTS) {
	Vue.component(i, require(`./components/${COMPONENTS[i]}`).default);
}


/*---------------------------------------------------------------------------
	Mixins
---------------------------------------------------------------------------*/
Vue.mixin({
	methods: {
		route,
		reload() {
			window.location.reload(true);
		},
		formatDate(str) {
			return moment(str).format("MMM Do YYYY, h:mm:ss a");
		},
		fromNow(str) {
			return moment(str).fromNow();
		}
	},
	filters: {
		truncate(str) {
			return str.length > 18 ? str.substring(0, 18) + "..." : str;
		}
	},
	computed: {
		user() {
			return window.User;
		},
		csrfToken() {
			return document.querySelector("meta[name='csrf-token']").content;
		}
	}
});


/*---------------------------------------------------------------------------
	Register error handler in development
---------------------------------------------------------------------------*/
if(process.env.NODE_ENV === "development") {
	Vue.config.errorHandler = (err) => {
		alert(`Vue Error: ${err.message}`);
		console.error(err);
	};
}


/*---------------------------------------------------------------------------
	Create Vue app
---------------------------------------------------------------------------*/
window.App = new Vue({
	el: "#app"
});