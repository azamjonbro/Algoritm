<template>
  <div class="container">
    <div class="main">
      <Navbar />
      <router-view></router-view>
    </div>
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
.container {
  width: 100%;
  height: auto;
  /* align-items: center; */
  /* padding: 33px 93px; */
  /* margin: 0 auto; */
  /* display: flex; */
  /* justify-content: center; */
  /* background-color: hsl(0, 0%, 0%); */
}
.main {
  margin: 0 auto;
  max-width: 1560px;
  /* margin-right: auto; */
  height: auto;

  /* background-color: hsl(0, 0%, 0%); */
  padding: 33px 93px;
}
</style>
