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
  background-color: #000000;
  /* padding: 33px 93px; */
}
</style>
