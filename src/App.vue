<template>
	<v-app>
		<router-view />
		<cgi-snackbar />
		<cgi-alert />
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		//
	}),
};
</script>
