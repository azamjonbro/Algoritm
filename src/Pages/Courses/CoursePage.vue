<template>
  <div class="Course">
    <CoursesHomePage />
  </div>
</template>
<script>
import CoursesHomePage from "@/components/CoursesHomePage/CoursesHomePage.vue";
export default {
  components: {
    CoursesHomePage,
  },
};
</script>

<style>
/* * {
	box-sizing: border-box;
} */
.Course {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  /* padding: 33px 93px; */
}
</style>
