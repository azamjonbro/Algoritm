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

          <div class="icon">{{ feature.icon }}</div>
        </div>
      </div>
    </div>
    <StudentThought />
  </div>
</template>

<script>
import Carousel from "@/components/carousel/carousel.vue";
import Algorithm_Result from "@/components/Alg_Results/Algorithms_Result.vue";
import CourseHomePage from "@/components/CoursesHomePage/CoursesHomePage.vue";
import StudentThought from "@/components/StudentsThought/StudentThought.vue";
export default {
  components: {
    Carousel,
    Algorithm_Result,
    CourseHomePage,
    StudentThought,
  },
  data() {
    return {
      selectedFeature: null,
      features: [
        {
          title: "Doimiy musobaqalar",
          description:
            "Dasturlash, dizayn sohalari bo‘yicha haftalik sovrinli musobaqalar.",
          icon: "⚡",
        },
        {
          title: "Ish taklif qilish kafolati",
          description:
            "Algoritm kurslarini muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi.",
          icon: "🌵",
        },
        {
          title: "Sifatli ta’lim",
          description:
            "Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.",
          icon: "⭐",
        },
        {
          title: "Sertifikat",
          description:
            "Kursni muvaffaqiyatli tamomlagan o‘quvchilar Algoritmning sertifikatiga ega bo‘ladi.",
          icon: "🖥️",
        },
      ],
    };
  },
};
</script>

<style>
.Home {
  width: 100%;
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
  font-size: 24px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 50%;
  display: inline-block;
}

.features-texts h3 {
  /* margin-top: 10px; */
  font-size: 36px;
  /* font-weight: 600; */
}

.features-texts p {
  margin-top: 5px;
  max-width: 370px;

  font-size: 16px;
  color: rgb(191, 191, 191);
}
</style>
