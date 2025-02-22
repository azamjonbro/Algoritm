<template>
  <div class="testimonial-section">
    <h2>O'quvchilarning fikrlari</h2>

    <!-- Carousel -->
    <div class="testimonial-carousel">
      <div
        v-for="(testimonial, index) in visibleTestimonials"
        :key="index"
        class="testimonial-card"
      >
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
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="btns">
      <span @click="prevTestimonial">‹</span>
      <span @click="nextTestimonial">›</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Track the start index
      itemsPerPage: 4, // Show 4 testimonials at a time
      testimonials: [
        {
          name: "Alixon",
          role: "Frontend o'quvchisi",
          feedback:
            "Men Algorithm o'quv markazida tahsil olayotganimdan juda mamnunman...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
        {
          name: "Zafar",
          role: "Full Stack Developer",
          feedback:
            "Bu markazda o'qish orqali men yangi bilimlarga ega bo'ldim...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
        {
          name: "Gulnoza",
          role: "UX/UI Dizayner",
          feedback: "Darslar juda tushunarli va sifatli o'tiladi...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
        {
          name: "Bekzod",
          role: "Backend Engineer",
          feedback:
            "Dasturlash asoslarini mukammal o'rganishimga yordam berdi...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
        {
          name: "Aziza",
          role: "Data Scientist",
          feedback: "Bu kurs men uchun katta o'zgarish yasadi...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
        {
          name: "Rustam",
          role: "QA Engineer",
          feedback: "Testlash bo'yicha chuqur bilim oldim...",
          image: require("@/assets/Images/home_img/Mask group.svg"),
          image2: require("@/assets/Images/home_img/video-circle.png"),
        },
      ],
    };
  },
  computed: {
    visibleTestimonials() {
      return [
        ...this.testimonials,
        ...this.testimonials, // Duplicate for infinite looping
      ].slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
    },
  },
  methods: {
    nextTestimonial() {
      if (this.currentIndex < this.testimonials.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop to the start
      }
    },
    prevTestimonial() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.testimonials.length - 1; // Loop to the end
      }
    },
  },
};
</script>

<style scoped>
.testimonial-section {
  height: auto;
  text-align: start;
  background: #000;
  color: white;
  height: 700px;
  /* padding: 20px; */
  margin-top: 35px;
}

.testimonial-carousel {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-top: 20px;
}

.testimonial-card {
  height: 600px;
  min-width: 340px;
  /* width: 600px; */
  padding: 30px;
  border-radius: 20px;
  background: #111;
  display: flex;
  align-items: end;
}

.testimonial-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 10px; */
}

.testimonial-footer-text {
  margin-left: -15%;
}
.testimonial-footer-text h3 {
  font-size: 30px;
}
.testimonial-footer-text p {
  font-size: 10px;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 20px;
  gap: 10px;
}

.btns span {
  width: 30px;
  height: 30px;
  background: #fff;
  color: black;
  font-size: 20px;
  border-radius: 50%;
  text-align: center;
}
</style>
