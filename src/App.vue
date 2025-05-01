<template>
	<div class="container">
	  <div class="main">
		<Navbar />
		<div class="main-wrapper">
			<router-view></router-view>
			
		</div>

	  </div>
	</div>
	<Footer v-if="!isAboutPage && !isContactPage"/>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  import Navbar from "@/components/Navbar/Navbar.vue";
  import Footer from "@/components/Footer/Footer.vue";
  export default {
	components: {
	  Navbar,
	  Footer,
	},
	computed:{
		isAboutPage() {
      return this.$route.name === "About";
    },
    isContactPage() {
      return this.$route.name === "Contact";
    }
    }
	
  };
  </script>
  
  <style>
  .container {
	width: 100%;
	height: auto;
  }
  .main-wrapper{
	margin-top: 20px;
  }
  .main {
	margin: 0 auto;
	max-width: 1440px;
	height: auto;
	padding: 33px 93px;
  }

  @media (max-width: 768px) {
  .main {
    padding: 0 20px;  
    margin: 0 auto;

  }
  }
  </style>
  