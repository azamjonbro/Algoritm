<template>
  <div class="Home">
    <Carousel />
    <Algorithm_Result />
    <CourseHomePage />
    <div class="features">
      <div class="features-Nav">
        <span class="bar"></span>
        <h2>Nima uchun Algoritmda o‘qish kerak?</h2>
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
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
          <div class="icon">
            <img :src="feature.image" alt="featureimage" />
          </div>
        </div>
      </div>
    </div>
    <StudentThought />
    <EnrolInCourse />
    <div class="FAQ-wrapper">
      <div class="FAQ-nav">
        <span class="bar"> </span>
        <h2>Ko‘p Beriladigan Savollar!</h2>
      </div>
      <div class="FAQ-accardion-wrapper">
        <div class="accordion-container">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="accordion-item"
          >
            <div @click="toggle(index)" class="accordion-header">
              <span class="accordion-title">{{ item.question }}</span>
              <span class="accordion-icon">{{
                openIndex === index ? "▲" : "▼"
              }}</span>
            </div>
            <div v-show="openIndex === index" class="accordion-content">
              <p>
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import Algorithm_Result from "@/components/Alg_Results/Algorithms_Result.vue";
import CourseHomePage from "@/components/CoursesHomePage/CoursesHomePage.vue";
import StudentThought from "@/components/StudentsThought/StudentThought.vue";
import EnrolInCourse from "@/components/EnrollnCourse/EnrolInCourse.vue";
export default {
  components: {
    Carousel,
    Algorithm_Result,
    CourseHomePage,
    StudentThought,
    EnrolInCourse,
  },
  data() {
    return {
      openIndex: null,
      selectedFeature: null,
      features: [
        {
          title: "Doimiy musobaqalar",
          description:
            "Dasturlash, dizayn sohalari bo‘yicha haftalik sovrinli musobaqalar.",
          image: require("@/assets/Images/home_img/course1.svg"),
        },
        {
          title: "Ish taklif qilish kafolati",
          description:
            "Algoritm kurslarini muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi.",
          image: require("@/assets/Images/home_img/course2.svg"),
        },
        {
          title: "Sifatli ta’lim",
          description:
            "Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.",
          image: require("@/assets/Images/home_img/course3.svg"),
        },
        {
          title: "Sertifikat",
          description:
            "Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning sertifikatiga ega bo‘ladi.",
          image: require("@/assets/Images/home_img/course4.svg"),
        },
      ],
      faqs: [
        {
          question: "Kurslar bepulmi?",
          answer:
            "Yo‘q, hozir barcha kurslar pullik. Narxlarni har bir kursning sahifasida ko‘rishingiz mumkin.",
        },
        {
          question: "Darslarni istalgan vaqtda ko‘rish mumkinmi?",
          answer:
            "Ha, sotib olganingizdan so‘ng darslarni istalgan vaqtda ko‘rishingiz mumkin.",
        },
        {
          question: "Kurslar bepulmi?",
          answer:
            "Yo‘q, hozir barcha kurslar pullik. Narxlarni har bir kursning sahifasida ko‘rishingiz mumkin.",
        },
        {
          question: "Darslarni istalgan vaqtda ko‘rish mumkinmi?",
          answer:
            "Ha, sotib olganingizdan so‘ng darslarni istalgan vaqtda ko‘rishingiz mumkin.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
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
  background: #0d0d0d;
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
  background: rgba(255, 255, 255, 0.1);
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

.FAQ-wrapper {
  height: auto;
  margin-top: 40px;
}

.FAQ-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.FAQ-nav .bar {
  width: 4px;
  height: 43px;
  background: yellow;
}
.FAQ-nav h2 {
  font-size: 32px;
  color: white;
}
.accordion-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.accordion-item {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-width: 650px;
  background: rgba(13, 13, 13, 1);
  margin-top: 10px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  min-width: 650px;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgba(13, 13, 13, 1);
  transition: background 0.3s ease;
}

/* .accordion-header:hover {
  background: #292929;
} */

.accordion-content {
  min-width: 650px;

  height: 81px;
  padding: 20px;
  background: rgba(13, 13, 13, 1);
  color: #cfcfcf;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.accordion-content p {
  max-width: 550px;
}
.accordion-icon {
  transition: transform 0.2s ease;
}
</style>
