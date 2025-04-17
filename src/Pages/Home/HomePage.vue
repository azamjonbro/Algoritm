<template>
  <div class="Home">
    <Carousel />
    <Algorithm_Result />
    <CourseHomePage />
    <div class="features">
      <div class="features-Nav">
        <span class="bar"></span>
        <h2>{{ t("home__statistics-title") }}</h2>
      </div>
      <div class="feature-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
          :class="{ selected: selectedFeature === index }"
          @click="selectedFeature = index"
        >
          <div class="features-texts">
            <h3>{{ t(`${feature.title}`) }}</h3>
            <p>{{ t(`${feature.description }`)}}</p>
          </div>
          <div class="icon">
            <img :src="feature.image" alt="featureimage" />
          </div>
        </div>
      </div>
    </div>
    <StudentThought />
    <EnrolInCourse />
    <Faqhomepage />
    <OurDestination />
  </div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import Algorithm_Result from "@/components/Alg_Results/Algorithms_Result.vue";
import CourseHomePage from "@/components/CoursesHomePage/CoursesHomePage.vue";
import StudentThought from "@/components/StudentsThought/StudentThought.vue";
import EnrolInCourse from "@/components/EnrollnCourse/EnrolInCourse.vue";
import Faqhomepage from "@/components/Faq/Faqhomepage.vue";
import OurDestination from "@/components/OurDestination/OurDestination.vue";
import {t} from '@/Utils/i18n.js'

export default {
  components: {
    Carousel,
    Algorithm_Result,
    CourseHomePage,
    StudentThought,
    EnrolInCourse,
    Faqhomepage,
    OurDestination,
  },
  data() {
    return {
      t,
      features: [
        {
          title: "doimiy_musobaqalar",
          description:"doimiy_musobaqalar_desc",
          image: require("@/assets/Images/home_img/course1.svg"),
        },
        {
          title: "ish_kafolati",
          description:"ish_kafolati_desc",
          image: require("@/assets/Images/home_img/course2.svg"),
        },
        {
          title: "sifatli_talim",
          description:"sifatli_talim_desc",
          image: require("@/assets/Images/home_img/course3.svg"),
        },
        {
          title: "Sertifikat",
          description:
            "Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning sertifikatiga ega bo‘ladi.",
          image: require("@/assets/Images/home_img/course4.svg"),
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.Home {
  max-width: 1440px;
  height: auto;
  background-color: #000000;
}
.features {
  color: white;
  font-family: Arial, sans-serif;
  margin-top: 40px;
}
.features-Nav {
  display: flex;
  gap: 17px;
}
.features-Nav .bar {
  width: 4px;
  height: 43px;
  background: yellow;
}
.features-Nav h2 {
  font-size: 32px;
  color: white;
  font-weight: 500;
}
.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  max-width: 630px;
  max-height: 170px;
  background: rgba(13, 13, 13, 1);
  padding: 32px 35px;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
}

.feature-card.selected {
  border-color: blue;
}

.icon {
  width: 66px;
  height: 66px;
  background: rgba(255, 246, 0, 0.1);
  padding: 10px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.features-texts h3 {
  font-size: 36px;
  font-weight: 500;
}

.features-texts p {
  margin-top: 5px;
  max-width: 370px;
  font-weight: 400;
  font-family: Manrope;
  font-size: 16px;
  color: rgb(191, 191, 191);
}
</style>
