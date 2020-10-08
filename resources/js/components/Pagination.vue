<template lang="pug">
	.is-clearfix(v-if="pages")
		nav.pagination.is-pulled-right(role="navigation" aria-label="pagination")
			ul.pagination-list
				li(v-for="i in pages")
					a.pagination-ellipsis(v-if="!shouldShowPage(i) && ((i - 1) === 1 || (i + 1) === pages)") &hellip;
					a.pagination-link(v-else-if="shouldShowPage(i)" :class="{'is-current': i === page + 1}" @click="goto(i)") {{ i }}
</template>

<script>
	export default {
		props: {
			total: Number,
			page: Number,
			perPage: Number
		},
		computed: {
			pages() {
				return Math.ceil(this.total / this.perPage);
			}
		},
		methods: {
			goto(page) {
				let url = new URL(window.location.href);
				url.searchParams.set("page", page);
				document.location.href = url;
			},
			shouldShowPage(page) {
				//Allow the first or the last page regardless
				if(page === 1 || page === this.pages) return true;

				//Otherwise, only allow pages within a certain amount of pages of the current page
				return Math.abs(page - (this.page + 1)) < 4;
			}
		}
	}
</script>