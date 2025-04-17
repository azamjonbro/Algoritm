<template>
	<div class="News">
		<div class="news-page-top">
			<h2 class="color-white">Yangiliklar</h2>
			<customSelect placeholder="Eng so'ngi"/>
		</div>

	</div>
</template>
<script>
	import customSelect from '@/components/Template/customSelect.vue';
	export default {
		components:{
			customSelect
		}
	}
</script>

<style>

.News {
	width: 100%;
	height: 100vh;
	background-color: #000000;
	margin-top: 69px;

}
.news-page-top{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.color-white{
	color: #fff;
	font-size: 69px;
	position: relative;
}
.color-white::after{
	content: "*";
	margin-left: 10px;
	color: #F8DA0B;
	position: absolute;

}
</style>
