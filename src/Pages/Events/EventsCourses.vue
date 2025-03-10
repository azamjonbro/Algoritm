<template>
  <div class="Events-container">
    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="4"
      :space-between="20"
      navigation
      class="events-swiper"
    >
      <swiper-slide v-for="(event, index) in events" :key="index">
        <div class="event-card">
          <img :src="event.image" alt="Event Image" class="event-image" />
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p>{{ event.type }}</p>
            <p>{{ event.date }} - {{ event.time }}</p>
            <button class="register-btn">Qatnashish</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const events = [
      {
        title: "React JS",
        type: "Hackathon",
        date: "19-fevral",
        time: "18:00",
        image: require("@/assets/Images/hackathon.png"),
      },
      {
        title: "Vue.js Workshop",
        type: "Workshop",
        date: "25-fevral",
        time: "17:00",
        image: require("@/assets/Images/hackathon.png"),
      },
      {
        title: "Node.js Meetup",
        type: "Meetup",
        date: "28-fevral",
        time: "19:30",
        image: require("@/assets/Images/hackathon.png"),
      },
      {
        title: "JavaScript Masterclass",
        type: "Masterclass",
        date: "5-mart",
        time: "16:00",
        image: require("@/assets/Images/hackathon.png"),
      },
      {
        title: "Node.js Meetup",
        type: "Meetup",
        date: "28-fevral",
        time: "19:30",
        image: require("@/assets/Images/hackathon.png"),
      },
      {
        title: "JavaScript Masterclass",
        type: "Masterclass",
        date: "5-mart",
        time: "16:00",
        image: require("@/assets/Images/hackathon.png"),
      },
    ];

    return { events, Navigation, Pagination };
  },
};
</script>

<style>
.Events-container {
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 30px;
}

.events-swiper {
  width: 100%;
  height: 460px;
}

.event-card {
  background: rgba(13, 13, 13, 1);

  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
}

.event-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.event-info {
  padding: 10px;
  color: white;
}

.register-btn {
  background: #ffcc00;
  color: black;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.register-btn:hover {
  background: #e6b800;
}

/* Swiper tugmalar */
.swiper-button-prev,
.swiper-button-next {
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: rgba(13, 13, 13, 1);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* z-index: 1000; */
}
</style>
