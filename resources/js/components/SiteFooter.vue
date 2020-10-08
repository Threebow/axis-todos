<template lang="pug">
	footer.footer.site-footer
		.container
			h4 {{ title }}
			p Made with ❤️ by #[a(href="https://arionstudios.com") Arion Studios]
			p.has-text-grey.is-italic v{{ platformVersion }}
</template>

<script>
	export default {
		props: {
			title: String,
			platformVersion: String
		}
	}
</script>