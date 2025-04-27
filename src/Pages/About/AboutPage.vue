<template>
  <div class="About">
    <h2>{{ t("about__title") }}<span>*</span></h2>
    <p>
      {{ t("about__description") }}
    </p>
    <p>
      {{ t("about__description2") }}
    </p>
    <div class="features">
      <div class="features-nav">
        <span class="bar"></span>
        <h2>{{ t("about__question") }}</h2>
      </div>
      <div class="feature-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="about_card"
          :class="{ selected: selectedFeature === index }"
          @click="selectedFeature = index"
        >
          <div class="features-texts">
            <h3>{{ t(feature.description) }}</h3>
          </div>
          <div class="about_icon">
            <img :src="feature.image" alt="featureimage" />
          </div>
        </div>
      </div>
    </div>
    <div class="About_gradient">
      <div class="inner_gradient"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      features: [
        {
          title: "Amaliyotga yo‘naltirilgan darslar",
          description: "about__practice",
          image: require("@/assets/Images/home_img/course1.svg"),
        },
        {
          title: "Tajribali va amaliy bilimga ega ustozlar ",
          description: "about__teachers",
          image: require("@/assets/Images/home_img/course2.svg"),
        },
        {
          title: "To‘liq qo‘llab-quvvatlash va maslahatlar ",
          description: "about__support",
          image: require("@/assets/Images/home_img/course3.svg"),
        },
        {
          title: "O‘quvchilarni ish topishga tayyorlash ",
          description: "about__student__job",
          image: require("@/assets/Images/home_img/course4.svg"),
        },
      ],
    };
  },
};
</script>

<style>
.About {
  width: 100%;
  height: auto;
  background-color: #000000;
}
.About > h2 {
  font-size: 69px;
  color: white;
  font-weight: 500;
  line-height: 70px;
  font-family: Nohemi;
  margin-top: 69px;
}
.About > h2 > span {
  color: rgba(248, 218, 11, 1);
  font-size: 69px;
  font-weight: 500;
  margin-left: -15px;
  line-height: 70px;
}

.features-nav {
  display: flex;
  align-items: center;
  background-color: rgba(13, 13, 13, 1);
  gap: 17px;
  width: max-content;
  padding: 15px 40px 15px 15px;
  border-radius: 10px;
}
.features-nav .bar {
  width: 4px;
  height: 33px;
  background: yellow;
}
.features-nav h2 {
  font-size: 30px;
  color: white;
  font-family: Manrope;
  font-weight: 600;
}

.About > p {
  background-color: rgba(13, 13, 13, 1);
  padding: 27px 40px;
  color: rgba(255, 255, 255, 1);
  font-family: Manrope;
  font-weight: 400;
  font-size: 25px;
  line-height: 100%;
  margin-top: 20px;
  border-radius: 10px;
}

.about_icon {
  width: 74px;
  height: 74px;
  background: rgba(255, 246, 0, 0.1);
  padding: 10px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.about_card {
  max-width: 630px;
  max-height: 127px;
  background: #191919;
  padding: 32px 35px;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.About_gradient {
  width: 100%;
  height: 675px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  bottom: -40px;
}
.inner_gradient {
  width: 600px;
  height: 600px;
  transform: rotate(45deg);
  position: absolute;
  border-radius: 100px;
  filter: blur(25px);
  background-color: yellow;
  box-shadow: 0px 0px 100px 150px rgba(255, 215, 0, 0.6);
  top: 70%;
  z-index: 1;
  outline: none;
  animation: sunShineEffect 3s infinite ease-in-out;
}

@keyframes sunShineEffect {
  0% {
    transform: rotate(45deg);
    background-color: rgba(194, 167, 9, 0.6);
    box-shadow: 0px 0px 100px 150px rgba(154, 132, 6, 0.6);
  }
  50% {
    transform: rotate(45deg);
    background-color: rgba(183, 156, 7, 0.6);
    box-shadow: 0px 0px 100px 220px rgba(154, 132, 6, 0.6);
  }
  100% {
    transform: rotate(45deg);
    background-color: rgba(184, 157, 8, 0.6);
    box-shadow: 0px 0px 100px 150px rgba(154, 132, 6, 0.6);
  }
}
</style>
