<template>
  <div class="Enrol-In-Main">
    <div class="Enrol-nav">
      <span class="barside"> </span>
      <div>
        <h2>Yaqin orada ochiladigan kurslarimizga yoziling</h2>
        <p>
          Har bir kurs boshlanishdan oldin tanishtiruv dars bo‘lib o‘tadi. Unda
          siz kurs bo‘yicha barcha ma‘lumotlarga ega bo‘lasiz, o‘qituvchi bilan
          tanishib olasiz va kursga yozilishingiz mumkin.
        </p>
      </div>
    </div>

    <div class="Enrol-In-Wrapper">
      <div class="Courses-time">
        <select v-model="selectedCourse">
          <option value="">Qanday kasb egallamoqchisiz?</option>
          <option v-for="course in courses" :key="course" :value="course">
            {{ course }}
          </option>
        </select>

        <div v-if="selectedCourse" class="date-selection">
          <h3>Guruh boshlanadigan sana tanlash</h3>
          <div class="date-options">
            <button
              v-for="date in dates"
              :key="date"
              @click="selectedDate = date"
              :class="{ active: selectedDate === date }"
            >
              {{ date }}
            </button>
          </div>
        </div>

        <div v-if="selectedDate" class="time-selection">
          <h3>Guruh boshlanadigan vaqt tanlash</h3>
          <div class="time-options">
            <button
              v-for="time in times"
              :key="time"
              @click="selectedTime = time"
              :class="{ active: selectedTime === time }"
            >
              {{ time }}
            </button>
          </div>
        </div>
        <div class="Sellected-CourseTime">
          <h3>Tanlangan ma'lumotlar</h3>
          <p><strong>Kurs:</strong> {{ selectedCourse || "Tanlanmagan" }}</p>
          <p><strong>Sana:</strong> {{ selectedDate || "Tanlanmagan" }}</p>
          <p><strong>Vaqt:</strong> {{ selectedTime || "Tanlanmagan" }}</p>
        </div>
      </div>

      <div class="Enrol-in-form"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: ["Web dasturlash", "Kiber xavfsizlik", "Grafik dizayn"],
      selectedCourse: "",
      dates: ["27.02.2025", "28.02.2025", "01.03.2025"],
      selectedDate: "",
      times: ["09:00", "12:00", "15:00"],
      selectedTime: "",
    };
  },
};
</script>

<style>
.Enrol-In-Main {
  color: antiquewhite;
}
.Enrol-nav {
  display: flex;
  align-items: center;
  gap: 20px;
}
.Enrol-nav h2 {
  font-size: 32px;
  color: white;
  margin-bottom: 10px;
}
.Enrol-nav p {
  font-size: 13px;
  max-width: 700px;
  color: rgb(191, 191, 191);
}
.Enrol-nav .barside {
  width: 4px;
  height: 98px;
  border-radius: 32px;
  background-color: #f8d800;
}
.Enrol-In-Wrapper {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  margin-top: 33px;
}
.Courses-time {
  width: 50%;
  height: auto;
  /* border: 1px solid whitesmoke; */
}
.Enrol-in-form {
  width: 50%;
  padding: 20px;
  border: 1px solid whitesmoke;
  max-height: 414px;
  height: 414px;
}
.Courses-time select {
  width: 100%;
  padding: 10px;
  background: #0d0d0d;
  color: white;
  border: none;
  margin-bottom: 20px;
}
.date-options,
.time-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.Courses-time button {
  padding: 10px;
  background: #222;
  color: white;
  border: none;
  cursor: pointer;
}
.Courses-time button.active {
  background: #007bff;
}
</style>
