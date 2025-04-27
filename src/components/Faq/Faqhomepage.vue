<template>
  <div class="FAQ-wrapper">
    <div class="FAQ-nav">
      <span class="bar"></span>
      <h2>{{$t("max_reqs")}}</h2>
    </div>
    <div class="faq-accordion-wrapper">
      <div class="accordion-container">
        <div v-for="(item, index) in faqs" :key="index" class="accordion-item">
          <div @click="toggle(index)" class="accordion-header">
            <h2 class="accordion-title">{{ $t(item?.question) }}</h2>
            <img
              src="@/assets/Images/home_img/arrow-down.png"
              alt="Toggle Icon"
              :class="{ rotated: openIndex.includes(index) }"
            />
          </div>
          <div v-show="openIndex.includes(index)" class="accordion-content">
            <p>{{ $t(item?.answer) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      openIndex: [0, 1, 2, 3],
      selectedFeature: null,
      faqs: [
        {
          question: "kurslar__bepulmi",
          answer:"kurslarbepul_answer",
        },
        {
          question: "darslar__istagi",
          answer:"dars__description",
        },
        {
          question:"kurslar__question",
          answer:"kurslar__answer",
        },
        {
          question: "material__question",
          answer:"material__answer",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      if (this.openIndex.includes(index)) {
        this.openIndex = this.openIndex.filter((i) => i !== index);
      } else {
        this.openIndex.push(index);
      }
    },
  },
};
</script>

<style>
.FAQ-wrapper {
  height: auto;
  margin-top: 40px;
  margin-bottom: 50px;
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
  font-weight: 500;

}
.accordion-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.accordion-item {
  border-radius: 10px;
  max-width: 614px;
  background: rgba(13, 13, 13, 1);
  margin-top: 10px;
  overflow: hidden;
  align-self: baseline;
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
  transition: background 0.5s ease-in;
}
.accordion-header img {
  width: 26px;
  height: 26px;
  transition: transform 0.3s ease-in-out;
  margin-right: 40px;
}
.accordion-header h2 {
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);

}
/* .accordion-header p {
  max-width: 500px;
  line-height: 18px;
} */
.rotated {
  transform: rotate(180deg);
}

.accordion-header:hover {
  background: #292929;
}

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
  font-weight: 300;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
}
.accordion-icon {
  transition: transform 0.5s ease;
}
</style>
