<template>
  <div class="Events-carusel-wrapper">
    <swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="events-corusel"
    >
      <swiper-slide v-for="(Swiperdata, index) in Swiperdatas">
        <div class="Events-carusel-card">
          <h1 class="uppercase-text">{{ t("event__title") }}</h1>
          <p>{{ t("event__des") }}</p>
          <button>{{ Swiperdata.btn }}</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { Pagination, Autoplay };
  },
  data() {
    return {
      Swiperdatas: [
        {
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
        },
        {
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
        },
        {
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
        },
        {
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Events-carusel-wrapper {
  width: 100%;

  margin-top: 30px;
}

.Events-carusel-card {
  width: 100%;
  height: 411px;
  background-color: rgba(13, 13, 13, 1);
  border-radius: 10px;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
}
.Events-carusel-card h1 {
  color: white;
  font-size: 56px;
  text-transform: uppercase;
  max-width: 550px;
  font-weight: 500;
}
.Events-carusel-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  margin-top: 15px;
  max-width: 350px;
}
.Events-carusel-card button {
  background-color: #fff;
  font-size: 21px;
  padding: 10px 26px;
  border-radius: 10px;
  font-weight: 500;
  align-self: flex-end;
}
</style>
