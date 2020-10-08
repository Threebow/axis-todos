<template lang="pug">
	span.icon
		i(:class="icon")
</template>

<script>
	export default {
		props: {
			icon: String
		}
	}
</script>