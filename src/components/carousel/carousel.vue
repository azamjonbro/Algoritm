<template>
  <div class="Home_Carousel">
    <swiper
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 100000000, disableOnInteraction: false }"
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
          <div class="Home_Carousel_img_wrapper" >
            <img src="./Mask group.png" alt="">
            <span>Bekzod</span> 
            <!-- <img :src="slide.img" alt="" />
            <img :src="slide.bgImg" class="bg_img" alt="" /> -->
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
@media (max-width: 1440px) {
  .Home_Carousel{
    position: relative;
  }
    .Home_Carousel_img_wrapper img:nth-child(1) {
    position: absolute !important;
    bottom:  40px !important;
    left: -60vw !important;
    width: 100vw !important;
    height: 40vh !important;
    z-index: 2 !important;

  }
}
@media (max-width: 1240px){
  .Home_Carousel_text_wrapper {
    width: 100%;
    padding: 20px;
  }
  .Home_Carousel_img_wrapper {
    width: 100%;
    height: 250px;
  }
  .Home_Carousel_img_wrapper span {
    right:-1px;
    bottom: -30px;
    font-size: 20px;
    width: auto;
  }
  .Home_Carousel_text_wrapper h1 {
    font-size: 36px;
    line-height: 40px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(1) {
    width: 100%;
    font-size: 15px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(2) {
    width: 100%;
    font-size: 15px;
  }
  .Home_Carousel_img_wrapper img:nth-child(1) {
    width: 100%;
    height: 100%;
  }
  .Home_Carousel_img_wrapper .bg_img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 768px) {
  .Home_Carousel {
    height: auto;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding: 0px 0px 30px 0px;
  }
  .mySwiper {
    height: auto;
  }
  .swiper-pagination {
    padding-left: 0px;
    margin-bottom: 20px;
  }
  .Home_Carousel_text_wrapper {
    width: 100%;
    padding: 20px;
  }
  .Home_Carousel_img_wrapper {
    width: 100%;
    height: auto;
  }
  .Home_Carousel_text_wrapper h1 {
    font-size: 36px;
    line-height: 40px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(1) {
    width: 100%;
    font-size: 15px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(2) {
    width: 100%;
    font-size: 15px;
  }
  .Home_Carousel_img_wrapper img:nth-child(1) {
    display: none;
  }
}
@media (max-width: 500px) {
  .Home_Carousel_text_wrapper h1 {
    font-size: 28px;
    line-height: 30px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(1) {
    width: 100%;
    font-size: 13px;
  }
  .Home_Carousel_text_wrapper p:nth-of-type(2) {
    width: 100%;
    font-size: 13px;
  }
  .Home_Carousel_img_wrapper span {
    font-size: 24px;
    right: 10px;
    bottom: 10px;
    width: auto;
  }
}
</style>
