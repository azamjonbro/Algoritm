<template>
  <div class="News">
    <div class="news-page-top">
      <h2 class="color-white">Yangiliklar</h2>
      <customSelect placeholder="Eng so'ngi" />
    </div>
    <div class="news-swiperpage">
      <swiper :pagination="true" :autoplay="true" class="newSwip">
        <swiper-slide v-for="(item, index) in Swiperdatas" :key="index">
          <div class="swiper-card">
            <div class="imgbox">
              <img :src="item.image" alt="" />
              <p>{{ item.category }}</p>
            </div>
            <div class="contentbox">
              <h2>{{ item.title }}</h2>

              <div class="bottom">
                <p>{{ timeAgo(item?.createdAt) }}</p>
				<div class="right">
					<Icons name="SendKey"/>
					<p class="like"><Icons name="loves"/>{{ item.likes }}</p>
					<p class="show"><Icons name="show"/> Ko'rish</p>
				</div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import customSelect from "@/components/Template/customSelect.vue";
import Icons from "@/components/Template/Icons.vue";
export default {
  components: {
    customSelect,
	Icons
  },
  data() {
    return {
      Swiperdatas: [
        {
          image: "https://picsum.photos/id/120/200/300",
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
          liked: false,
          createdAt: "2025-03-01",
          likes: 0,
          category: "news",
        },
        {
          image: "https://picsum.photos/id/120/200/300",
          title: "Kod yozib charchadingizmi? Biz ham! 😆",
          des: "Shuning uchun quyidagi maslahatlar aynan siz uchun! :)",
          btn: "o'qish",
          liked: false,
          createdAt: "2023-11-01",
          likes: 0,
          category: "news",
        },
      ],
    };
  },
  methods: {
    timeAgo(date) {
      const now = new Date();
      const past = new Date(date);
      const diffMs = now - past;

      const seconds = Math.floor(diffMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);

      if (months > 0) return `${months} oy oldin`;
      if (weeks > 0) return `${weeks} hafta oldin`;
      if (days > 0) return `${days} kun oldin`;
      if (hours > 0) return `${hours} soat oldin`;
      if (minutes > 0) return `${minutes} daqiqa oldin`;
      return "hozir";
    },
  },
};
</script>

<style>
.News {
  width: 100%;
  height: 100vh;
  background-color: #000000;
  margin-top: 69px;
  color: #fff;
}
.news-page-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.color-white {
  color: #fff;
  font-size: 69px;
  position: relative;
}
.color-white::after {
  content: "*";
  margin-left: 10px;
  color: #f8da0b;
  position: absolute;
}
.news-swiperpage {
  width: 100%;
  height: 100%;
  margin-top: 30px;
}
.mySwiper {
  width: 100%;
  height: 100%;
}
.newSwip {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.swiper-card {
  width: 100%;
  background-color: #0d0d0d;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
}
.imgbox {
  position: relative;
}
.imgbox p {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #000;
  padding: 10px 40px;
  border-radius: 50px;
  font-size: 16px;
}
.swiper-card .imgbox img {
  width: 100%;
  height: 320px;
  border-radius: 10px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .news-page-top {
    align-items: start;
    flex-direction: column;
    gap: 20px;
  }
  .color-white {
    font-size: 40px;
  }
}
</style>
