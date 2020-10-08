<template lang="pug">
	a(:class="{'delete has-background-danger': isCircle, 'button is-danger': !isCircle, 'is-fullwidth': fullwidth}", :disabled="disabled", @click="destroy")
		slot
			icon(icon="fas fa-trash")
			span Delete
</template>

<script>
	export default {
		props: {
			resource: String,
			isCircle: {
				type: Boolean,
				default: false
			},
			fullwidth: {
				type: Boolean,
				default: false
			},
			redirect: String,
			disabled: Boolean
		},
		methods: {
			async destroy() {
				if(this.disabled) return;

				if(confirm("Are you sure you want to delete this?")) {
					axios.delete(this.resource, {
						headers: {"X-CSRF-Token": this.csrfToken},
					}).then(() => {
						if(this.redirect) {
							window.location.href = this.redirect;
						} else {
							this.reload();
						}
					});
				}
			}
		}
	}
</script>