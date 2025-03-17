<template>
  <div class="Events-container">
    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="3.5"
      :space-between="20"
      navigation
      class="events-swiper"
    >
      <swiper-slide v-for="(event, index) in events" :key="index">
        <div class="event-card">
          <img :src="event.image" alt="Event Image" class="event-image" />
          <div class="event-info-wrapper">
            <div class="event-info">
              <h3>{{ event.title1 }}</h3>
              <span class="event-info-icons">
                <img src="@/assets/Images/send-2.svg" alt="send" />
                <img src="@/assets/Images/Subtract (2).svg" alt="send" />
              </span>
            </div>
            <p>{{ event.type }}</p>
            <div class="event-info">
              <p>{{ event.date }} - {{ event.time }}</p>
              <span class="event-info-btn" @click="openModal(event)">
                <img src="@/assets/Images/info-circle.svg" alt="info" />
              </span>
              <button class="register-btn">Qatnashish</button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal"><</button>
        <div class="modal-title-wrapper">
          <h2>{{ selectedEvent.title }}</h2>
          <button>Qatnashish</button>
        </div>

        <div v-if="selectedEvent.details">
          <div class="modals-text">
            <!-- <h4>{{ detail.section }}</h4> -->
            <ol>
              <li v-for="(detail, index) in selectedEvent.details" :key="index">
                <strong>{{ detail.section }}</strong>
                <ul>
                  <li v-for="(point, i) in detail.points" :key="i">
                    {{ point }}
                  </li>
                </ul>
              </li>
            </ol>
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
          title1: "React JS ",
          title: "React Hackathon Tavsiyalar 🚀",
          type: "Tavsiyalar",
          date: "19-fevraal",
          time: "18:00",
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
          title1: "React JS ",
          type: "Hackathon",
          date: "19-fevral",
          time: "18:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "ReactJS bo‘yicha maxsus Hackathon tadbiri.",
          location: "Tashkent, IT Park",
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
          title1: "React JS ",
          type: "Hackathon",
          date: "19-fevral",
          time: "18:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "ReactJS bo‘yicha maxsus Hackathon tadbiri.",
          location: "Tashkent, IT Park",
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
          title1: "React JS ",
          type: "Hackathon",
          date: "19-fevral",
          time: "18:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "ReactJS bo‘yicha maxsus Hackathon tadbiri.",
          location: "Tashkent, IT Park",
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
          title: "Vue.js Workshop",
          title1: "React JS ",
          type: "Workshop",
          date: "25-fevral",
          time: "17:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "Vue.js bilan ishlash bo‘yicha amaliy seminar.",
          location: "Tashkent, Inha University",
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
          title: "Node.js Meetup",
          type: "Meetup",
          title1: "React JS ",
          date: "28-fevral",
          time: "19:30",
          image: require("@/assets/Images/hackathon.png"),
          description:
            "Node.js ishlash tamoyillari va yangi texnologiyalar haqida muhokama.",
          location: "Tashkent, Ground Zero",
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
          title: "JavaScript Masterclass",
          title1: "React JS ",
          type: "Masterclass",
          date: "5-mart",
          time: "16:00",
          image: require("@/assets/Images/hackathon.png"),
          description: "JS bo‘yicha professional darajadagi master-klass.",
          location: "Tashkent, Astrum Academy",
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
  height: 520px;
}
.events-swiper::after {
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

.event-card {
  max-width: 339px;
  max-height: 474px;
  background: rgba(13, 13, 13, 1);
  border-radius: 10px;
  overflow: hidden;
  /* text-align: center; */
}
.event-info > p {
  font-size: 14px;
}
.event-info > h3 {
  font-size: 32px;
}
.event-info-wrapper > p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
}
.event-image {
  width: 100%;
  height: 330px;
  border-radius: 8px;
}
.event-info-wrapper {
  padding: 21px;
}
.event-info {
  /* padding: 15px 10px 10px 10px; */
  color: white;
  display: flex;
  align-items: center;
  /* background-color: #ffffff; */
  justify-content: space-between;
}
.event-info-icons {
  display: flex;
  gap: 10px;
}
.register-btn {
  background: #ffffff;
  color: black;
  border: none;
  max-width: 102px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  /* margin-top: 10px; */
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
div.swiper-wrapper {
  padding: 50px 0;
}
.close-btn {
  background: rgb(42, 41, 41);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  /* margin-top: 10px; */
  border-radius: 5px;
  position: absolute;
  top: 35px;
  left: 50px;
}

.close-btn:hover {
  background: rgb(66, 64, 64);
}
.event-info-btn {
  max-width: 31px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(25, 25, 25, 1);
  border-radius: 8px;
}

.modal-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(133, 129, 129);
  padding-bottom: 10px;
}
.modal-title-wrapper h2 {
  font-size: 50px;
  line-height: 58px;
  max-width: 430px;
  font-weight: 500;
}
.modal-title-wrapper button {
  background: #ffffff;
  color: black;
  border: none;
  width: 168px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 10px;
}
.modals-text li {
  font-size: 22px;
  line-height: 40px;
}
</style>
