<template>
  <div class="testimonial-section">
    <div class="testimonial-nav">
      <span class="bar"> </span>
      <h2>{{$t("uquvchilar_fikri")}}</h2>
    </div>

    <swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="3.5"
      :space-between="25"
      :autoplay="true"
      :loop="true"
      navigation
      class="testimonial-carousel"
    >
      <swiper-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
      > 
        <playvideo name="videoplayer" class="iconplayer"/>
        <div class="testimonial-footer">
          <img :src="testimonial.image" alt="User Image" class="user-image" />
          <div class="testimonial-footer-text">
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.role }}</p>
          </div>
          <img
            :src="testimonial.image2"
            alt="User Image"
            class="user-image-play"
          />
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="2.2"
      :space-between="25"
      :loop="true"
      :slides-per-group="1"
      navigation
      class="testimonial-carousel2"
    >
      <swiper-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card2"
      >
        <p>{{ testimonial.descrioption }}</p>
        <p>{{ testimonial.descrioption2 }}</p>

        <div class="testimonial-footer2">
          <img :src="testimonial.image" alt="User Image" class="user-image" />
          <div class="testimonial-footer-text2">
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.role }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import playvideo from '@/components/Template/Icons.vue'
export default {
  components: {
    Swiper,
    SwiperSlide,
    playvideo
  },
  setup() {
    return {
      Navigation,
      Autoplay,
    };
  },
  data() {
    return {
      testimonials: [
        {
          name: "Alixon",
          role: "Frontend o'quvchisi",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
        {
          name: "Zafar",
          role: "Full Stack Developer",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
        {
          name: "Gulnoza",
          role: "UX/UI Dizayner",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
        {
          name: "Bekzod",
          role: "Backend Engineer",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
        {
          name: "Aziza",
          role: "Data Scientist",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
        {
          name: "Rustam",
          role: "QA Engineer",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
          descrioption:
            "Men Algoritm o‘quv markazida ta’lim olayotganimdan juda mamnunman. Bu yerda darslar juda tushunarli va sifatli tarzda o‘tiladi. O‘qituvchilar tajribali va har bir o‘quvchiga alohida e’tibor berishadi. Shuningdek, amaliy mashg‘ulotlar va real loyihalar ustida ishlash imkoniyati borligi menga juda yoqadi.",
          descrioption2:
            "Markazdagi muhit do‘stona va motivatsion, bu esa o‘rganish jarayonini yanada qiziqarli qiladi. Agar IT va dasturlash bo‘yicha chuqur bilim olishni istasangiz, Algoritm o‘quv markazi eng yaxshi tanlovlardan biri deb o‘ylayman! 😊",
        },
      ],
    };
  },
};
</script>

<style>
.testimonial-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.testimonial-nav .bar {
  width: 4px;
  height: 43px;
  background: yellow;
}
.testimonial-nav h2 {
  font-size: 32px;
  font-weight: 500;
}
.testimonial-section {
  position: relative;
  text-align: start;
  background: #000;
  color: white;
  margin-top: 35px;
  padding: 20px 0;
}

.testimonial-carousel {
  width: 100%;
  position: relative;
  margin-top: 40px;
  height: 670px;
  margin-bottom: 30px;
}

.testimonial-carousel2 {
  width: 100%;
  position: relative;
  margin-top: 40px;
  height: 400px;
  margin-bottom: 30px;
}

.testimonial-card {
  min-width: 339px;
  height: 600px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(13, 13, 13, 1);
  display: flex;
  align-items: end;
}
.testimonial-card .iconplayer{
  position: absolute;
  top: 45%;
  left: 45%;
}

.testimonial-card2 {
  max-width: 478px;
  max-height: 330px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(13, 13, 13, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.testimonial-card2 > p {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  margin-top: 10px;
  font-family: Manrope;
  font-weight: 300;
}
.user-image-play{
  cursor: pointer;
}
/* Footer */
.testimonial-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.testimonial-footer2 {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
  margin-top: 20px;
}

.testimonial-footer-text h3 {
  font-size: 30px;
  font-family: Nohemi;
  font-weight: 500;
}
.testimonial-footer-text2 h3 {
  font-size: 30px;
  font-family: Nohemi;
  font-weight: 500;
}

.testimonial-footer-text,
.testimonial-footer-text2 p {
  font-size: 10px;
  font-family: Manrope;
  font-weight: 400;
}
.testimonial-footer-text {
  margin-left: -10%;
}

.user-image {
  width: 67px;
  height: 67px;
  border-radius: 50%;
}

.testimonial-carousel::after,
.testimonial-carousel2::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
  pointer-events: none;
}

.swiper-button-prev {
  box-sizing: content-box;
  position: absolute;
  z-index: 2;
  top: 97%;
  left: 94.5%;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 5px;
  background-color: #1f1c1c;

  color: #fff;
}

.swiper-button-next {
  box-sizing: content-box;
  /* z-index: 10; */
  position: absolute;
  top: 97%;
  right: 1px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 5px;
  background-color: #fff;
  transition: all 0.3s ease;

  color: #000;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 14px;
  font-weight: 900;
}
.swiper-button-prev:hover,
.swiper-button-prev:active {
  background-color: #ffffff;
  color: #000;
}

.swiper-button-next:hover,
.swiper-button-next:active {
  background-color: #fff;
  color: #000;
}

/* Tugmalar joylashuvini tuzatish */
</style>
