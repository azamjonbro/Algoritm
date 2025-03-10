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
            <button class="register-btn" @click="openModal(event)">
              Qatnashish
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal"><</button>
        <h2>{{ selectedEvent.title }}</h2>
        <p><strong>Tur:</strong> {{ selectedEvent.type }}</p>
        <p><strong>Sana:</strong> {{ selectedEvent.date }}</p>
        <p><strong>Vaqt:</strong> {{ selectedEvent.time }}</p>
        <p><strong>Tavsif:</strong> {{ selectedEvent.description }}</p>
        <p><strong>Joylashuv:</strong> {{ selectedEvent.location }}</p>

        <!-- details bo‘limini chiqarish -->
        <div v-if="selectedEvent.details">
          <h3>Tafsilotlar:</h3>
          <div v-for="(detail, index) in selectedEvent.details" :key="index">
            <h4>{{ detail.section }}</h4>
            <ul>
              <li v-for="(point, i) in detail.points" :key="i">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
    return { Navigation, Pagination };
  },

  data() {
    return {
      events: [
        {
          title1: "React JS Hackathon Tavsiyalar 🚀",
          title: "React JS Hackathon Tavsiyalar 🚀",
          type: "Tavsiyalar",
          date: "Doimiy",
          time: "Har qanday vaqtda",
          image: require("@/assets/Images/hackathon.png"),
          description:
            "React hackathon uchun foydali tavsiyalar. Loyiha rejalashtirish, texnik stack tanlash, kod sifati, performance va taqdimot tayyorlash bo‘yicha maslahatlar.",
          location: "Online",
          details: [
            {
              section: "Loyiha Rejasi",
              points: ["G‘oya va UI/UX aniq bo‘lsin.", "Vazifalarni bo‘ling."],
            },
            {
              section: "Tez Stack Tanlang",
              points: [
                "Next.js, Vite, Tailwind CSS.",
                "Zustand yoki Redux Toolkit.",
              ],
            },
            {
              section: "Kod Sifati",
              points: [
                "Modular va reusable komponentlar yozing.",
                "ESLint, Prettier, Git commitlar aniq bo‘lsin.",
              ],
            },
            {
              section: "Performance",
              points: ["Lazy loading, useMemo, useCallback ishlating."],
            },
            {
              section: "Taqdimotga Tayyorlaning",
              points: [
                "Qisqa demo tayyorlang.",
                "Texnik savollarga javob tayyor bo‘lsin.",
              ],
            },
            {
              section: "Bonus",
              points: [
                "Git repo push qiling.",
                "Copilot yoki ChatGPT’dan foydalaning.",
                "Ishlaydigan mahsulot yarating!",
              ],
            },
          ],
        },
        {
          title: "React JS",
          type: "Hackathon",
          date: "19-fevral",
          time: "18:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "ReactJS bo‘yicha maxsus Hackathon tadbiri.",
          location: "Tashkent, IT Park",
        },
        {
          title: "Vue.js Workshop",
          type: "Workshop",
          date: "25-fevral",
          time: "17:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "Vue.js bilan ishlash bo‘yicha amaliy seminar.",
          location: "Tashkent, Inha University",
        },
        {
          title: "Node.js Meetup",
          type: "Meetup",
          date: "28-fevral",
          time: "19:30",
          image: require("@/assets/Images/hackathon.png"),
          description:
            "Node.js ishlash tamoyillari va yangi texnologiyalar haqida muhokama.",
          location: "Tashkent, Ground Zero",
        },
        {
          title: "JavaScript Masterclass",
          type: "Masterclass",
          date: "5-mart",
          time: "16:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "JS bo‘yicha professional darajadagi master-klass.",
          location: "Tashkent, Astrum Academy",
        },
      ],

      showModal: false,
      selectedEvent: {},
    };
  },

  methods: {
    openModal(event) {
      this.selectedEvent = event;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
}

.modal-content {
  padding: 30px 100px;
  border-radius: 10px;
  /* text-align: center; */
  width: 100%;
  height: 100vh;
  color: white;
}

.close-btn {
  background: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
}

.close-btn:hover {
  background: darkred;
}
</style>
