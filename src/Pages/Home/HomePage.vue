<template>
	<div class="Home">
		<Carousel />
		<Algorithm_Result />
	</div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import Algorithm_Result from "@/components/Alg_Results/Algorithms_Result.vue";
export default {
	components: {
		Carousel,
		Algorithm_Result,
	},
};
</script>

<style>
.Home {
	width: 100%;
	height: auto;
	background-color: #000000;
}
</style>
