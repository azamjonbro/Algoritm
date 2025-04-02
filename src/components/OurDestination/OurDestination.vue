<template>
  <div class="FAQ-nav">
    <span class="bar"></span>
    <h2>Bizning manzillar</h2>
  </div>
  <div class="Our-Destination-wrapper">
    <div class="Our-map">
      <Leaflet/>
    </div>
    <div class="Our-destination-form">
      <Free_Consultation />
    </div>
  </div>
  <div class="Our-destination-footer">
    <h2>Namangan shahar,DXA 2-qavat</h2>
    <p><span>Ish vaqti</span>09:00 dan 19:00 gacha</p>
    <p><span>Aloqa uchun</span>90-694-87-17</p>
  </div>
</template>

<script>
import Free_Consultation from "../Free_consultation/Free_Consultation.vue";
import Leaflet from "@/components/Maps/MapComponent.vue"
export default {
  components: {
    Free_Consultation,
    Leaflet
  },
};
</script>

<style>
.Our-Destination-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
}
.Our-map {
  width: 770px;
  max-height: 380px;
  color: white;
  border-radius: 15px; /* 🔥 Border radius qo'shildi */
  overflow: hidden; /* Ichki elementlar uchun border-radius ishlashi uchun */
}
.Our-destination-form {
  max-width: 458px;
  max-height: 380px;
  margin-top: 10px;
}
.Our-destination-footer {
  width: 100%;
  height: 67px;
  background-color: rgba(13, 13, 13, 1);
  margin-top: 22px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 33px;
}
.Our-destination-footer h2 {
  font-size: 24px;
  font-weight: 500;

  color: rgba(255, 255, 255, 1);
}
.Our-destination-footer span {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
  font-family: Manrope;
}
.Our-destination-footer p {
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  font-family: Manrope;
}
</style>
