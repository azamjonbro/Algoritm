<template>
	<div class="container">
		<Navbar />
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
	components: {
		Navbar,
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}
.container {
	width: 100%;
	height: auto;
	background-color: #000000;
	padding: 33px 93px;
}
</style>
