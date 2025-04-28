<template>
  <div class="events-section">
    <EventCarousel />

    <MainCarousel />
  </div>
</template>

<script>
import MainCarousel from "./EventsCourses.vue";
import EventCarousel from "./EventsSlider.vue";

export default {
  components: {
    MainCarousel,
    EventCarousel,
  },
};
</script>

<style scoped>
.events-section {
  width: 100%;
  height: auto;
  /* background-color: #0b0b0b; */
  position: relative;
  margin-bottom: 30px;
  z-index: 100;
}
</style>
