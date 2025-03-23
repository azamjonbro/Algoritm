<template>
  <div class="Home_Carousel">
    <swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="Home_Carousel">
          <div class="Home_Carousel_text_wrapper">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description1 }}</p>
            <p>{{ slide.description2 }}</p>
          </div>
          <div class="Home_Carousel_img_wrapper">
            <img :src="slide.img" alt="" />
            <img :src="slide.bgImg" class="bg_img" alt="" />
            <span>Bekzod</span>
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
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      {
        title: "USTOZIDAN O'ZIB KETGAN SHOGIRD",
        description1:
          "Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda Node.js (Express), PostgreSQL, va React PWA bilan ishlayman. Asosan authentication va authorization (JWT, access token, refresh token) kabi xavfsizlik tizimlari ustida ishlayman.",
        description2:
          "Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni takomillashtirishga harakat qilaman.",
        img: require("@/assets/Images/home_img/img1.svg"),
        bgImg: require("@/assets/Images/home_img/Group 2.svg"),
      },
      {
        title: "USTOZIDAN O'ZIB KETGAN SHOGIRD",
        description1:
          "Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda Node.js (Express), PostgreSQL, va React PWA bilan ishlayman. Asosan authentication va authorization (JWT, access token, refresh token) kabi xavfsizlik tizimlari ustida ishlayman.",
        description2:
          "Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni takomillashtirishga harakat qilaman.",
        img: require("@/assets/Images/home_img/img1.svg"),
        bgImg: require("@/assets/Images/home_img/Group 2.svg"),
      },
      {
        title: "USTOZIDAN O'ZIB KETGAN SHOGIRD",
        description1:
          "Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda Node.js (Express), PostgreSQL, va React PWA bilan ishlayman. Asosan authentication va authorization (JWT, access token, refresh token) kabi xavfsizlik tizimlari ustida ishlayman.",
        description2:
          "Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni takomillashtirishga harakat qilaman.",
        img: require("@/assets/Images/home_img/img1.svg"),
        bgImg: require("@/assets/Images/home_img/Group 2.svg"),
      },
    ];

    return {
      modules: [Pagination, Autoplay],
      slides,
    };
  },
};
</script>

<style>
.Home_Carousel {
  width: 100%;
  height: 411px;
  background-color: #0b0b0b;
  border-radius: 10px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 20px;
}
.mySwiper {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}
.Home_Carousel_text_wrapper {
  width: 55%;
  height: auto;
  padding: 35px 50px;
  box-sizing: border-box;
  align-self: flex-start;
}
.Home_Carousel_text_wrapper h1 {
  color: white;
  font-size: 56px;
  line-height: 58px;
  font-weight: 700;
  font-family: Nohemi;
  letter-spacing: 2px;
}
/* .Home_Carousel_text_wrapper > p {
  font-size: 15px;
} */
.Home_Carousel_text_wrapper p:nth-of-type(1) {
  width: 586px;
  line-height: 100%;
  font-size: 17px;
  font-family: Nohemi;
  font-weight: 300;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.Home_Carousel_text_wrapper p:nth-of-type(2) {
  width: 586px;
  line-height: 100%;
  font-size: 17px;
  font-weight: 300;
  font-family: Nohemi;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.7);
}
.Home_Carousel_img_wrapper {
  display: flex;
  align-items: end;
  width: 42%;
  height: 330px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}
.Home_Carousel_img_wrapper span {
  width: 138px;
  height: 41px;
  color: white;
  /* font-family: SF Mono; */
  backdrop-filter: blur(10px);
  bottom: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  left: 215px;
  font-size: 25px;
  position: absolute;
  z-index: 4;
}
.Home_Carousel_img_wrapper img:nth-child(1) {
  position: absolute;
  right: 0px;
  bottom: 20px;
  z-index: 2;
}
.Home_Carousel_img_wrapper .bg_img {
  position: absolute;
  right: 5px;
  bottom: 20px;
  z-index: 1;
}

.swiper-pagination-bullet {
  background-color: rgb(45, 44, 44); /* Default color */
  width: 45px;
  height: 4px;
  opacity: 1;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.swiper-pagination-bullet-active {
  background-color: rgb(45, 44, 44); /* Default color */
  position: relative;
}

.swiper-pagination-bullet-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0%;
  height: 100%;
  background-color: rgb(255, 255, 255); /* Active fill color */
  border-radius: 5px;
  animation: fillProgress 3s linear forwards; /* 3s animation */
}

/* Animation keyframes */
@keyframes fillProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.swiper-pagination {
  display: flex;
  justify-content: flex-start;
  padding-left: 50px;
  margin-bottom: 40px;
  /* transform: translateX(10%) translateY(-70%); */
}
</style>
