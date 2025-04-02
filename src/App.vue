<template>
	<div class="container">
	  <div class="main">
		  <Navbar />
		<router-view></router-view>

	  </div>
	</div>
	<Footer/>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar/Navbar.vue";
  import Footer from "@/components/Footer/Footer.vue";
  export default {
	components: {
	  Navbar,
	  Footer,
	},
  };
  </script>
  
  <style>
  .container {
	width: 100%;
	height: auto;
  }
  .main {
	margin: 0 auto;
	max-width: 1440px;
	height: auto;
	padding: 33px 93px;
  }
  </style>
  