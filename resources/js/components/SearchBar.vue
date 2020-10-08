<template lang="pug">
	.field.has-addons
		p.control.is-expanded
			input.input(type="text" v-model="content" :placeholder="placeholder" @keyup.enter="search")

		p.control(v-if="content.length > 0")
			button.button.is-darker(@click="reset")
				span.icon.is-small
					i.fas.fa-times

		p.control
			button.button.is-primary(@click="search")
				icon(icon="fas fa-search")
</template>

<script>
	export default {
		data() {
			return {
				content: ""
			}
		},
		props: {
			placeholder: String,
			queryParam: String,
			redirectUrl: {
				type: String,
				default: window.location.href
			}
		},
		methods: {
			search() {
				let url = new URL(this.redirectUrl, window.location.origin);
				url.searchParams.delete("page");
				url.searchParams.set(this.queryParam, this.content);
				document.location.href = url;
			},
			reset() {
				this.content = "";
			}
		},
		mounted() {
			let url = new URL(window.location.href);
			this.content = url.searchParams.get(this.queryParam) || "";
		}
	}
</script>