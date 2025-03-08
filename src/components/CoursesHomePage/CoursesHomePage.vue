<template>
  <div class="coursesHomePage">
    <div class="courseNav">
      <span class="bar"></span>
      <h2>Kurslar</h2>
      <button>Standart - Haftada 3 kun 2 soat dars</button>
      <button>Bootcamp - Haftada 5 kun 3-4 soat dars</button>
      <select name="" id="">
        <option value="">Dasturlash</option>
        <option value="">Grafik Dizayn</option>
        <option value="">It Kids</option>
      </select>
    </div>
    <div class="coursesWrapper">
      <div
        clas
        v-for="(course, index) in courses"
        :key="index"
        class="course-card"
        :class="{ selected: selectedCourse === index }"
        @click="selectedCourse = index"
      >
        <div class="course-image">
          <img v-if="course.image" :src="course.image" alt="Course Image" />
          <span v-else class="placeholder">📷</span>
        </div>
        <div class="course-info">
          <h3>{{ course.title }}</h3>
          <p>Davomiyligi - {{ course.duration }}</p>
          <div class="course-buttons">
            <button class="btn-primary">Dasturlash</button>
            <button class="btn-secondary">O'rganish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCourse: null,
      courses: [
        { title: "Frontend – It kids", duration: "8 oy", image: "" },
        { title: "Frontend – React JS", duration: "6 oy", image: "" },
        { title: "Frontend – Vue JS", duration: "3 oy", image: "" },
        { title: "Frontend – Grafik ", duration: "8 oy", image: "" },
      ],
    };
  },
};
</script>

<style>
.coursesHomePage {
  margin-top: 45px;
  height: auto;
}

.courseNav {
  width: 100%;
  /* background-color: #fff; */
  display: flex;
  padding-left: 17px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.courseNav .bar {
  width: 4px;
  height: 43px;
  background: yellow;
  margin-right: 10px;
  border-radius: 3px;
}
.courseNav button:nth-of-type(1) {
  font-size: 21px;
  background-color: #fff;
  border-radius: 10px;
  font-weight: 500;
  padding: 9px 21px;
  max-height: 47px;
}
.courseNav button:nth-of-type(2) {
  font-size: 21px;
  color: #fff;
  border-radius: 10px;
  background-color: #0d0d0d;
  font-weight: 500;
  padding: 9px 21px;
  max-height: 47px;
}

.courseNav select {
  font-size: 21px;
  background-color: #fff;
  border-radius: 10px;
  font-weight: 500;
  padding: 8px 21px;
  max-height: 47px;
}
.courseNav h2 {
  font-size: 36px;
  color: #fff;
}

.courseNav button {
  padding: 5px;
  background: #efed40;
}

.coursesWrapper {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  /* gap: 25px; */
  row-gap: 30px;
  justify-content: space-between;
  margin-top: 30px;
}

.course-card {
  width: auto;
  max-width: 615px;
  background: black;
  color: white;
  /* padding: 15px; */
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  transition: all 0.3s;
}

.course-card.selected {
  border-color: blue;
}

.course-image {
  min-width: 285px;
  max-height: 160px;
  min-height: 160px;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.course-info {
  min-width: 320px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
}
.course-info h3 {
  font-size: 32px;
  margin-top: 10px;
  font-weight: 400;
}
.course-info p {
  font-size: 20px;
  font-weight: 400;
  margin-top: 8px;
}

.course-buttons {
  display: flex;
  gap: 10px;
  margin-top: 23px;
}

.btn-primary {
  background: #0d0d0d;
  color: white;
  padding: 5px 17px;
  max-height: 31px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
}

.btn-secondary {
  background: #fff;
  color: black;
  padding: 5px 17px;
  max-height: 31px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
}
</style>
