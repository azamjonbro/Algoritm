<template>
  <div class="Certificate">
    <div class="certificate-topbar">
      <h2 v-if="!certificateChecked || certificateFound">
        {{ $t("certificates") }}
      </h2>
      <h2 v-else class="not-found-title">
        {{ $t("certificates__notFound") }} :(
      </h2>
      <p v-if="!certificateChecked || certificateFound">
        {{ $t("certificate__number") }}
      </p>
      <p v-else class="not-found-text">
        {{ $t("certificate__error") }}
      </p>

      <div class="certificate-search-wrapper">
        <div class="certificate-btns-groups">
          <input
            v-model="certificateId"
            type="text"
            placeholder="ID-AT021"
            class="seach-field"
            :class="{ 'error-input': certificateChecked && !certificateFound }"
          />
          <button
            @click="checkCertificate"
            class="chack-btn"
            :class="{ 'error-btn': certificateChecked && !certificateFound }"
          >
            {{ $t("certificate__check") }}
            <Icons name="mashetgaiconqoying" />
          </button>
        </div>

        <button
          v-if="certificateFound && certificateChecked"
          class="sertificate-download"
        >
          <p>{{ $t("certificate__download") }}</p>
          <img src="@/assets/Images/receive-square.svg" alt="" />
        </button>
      </div>
    </div>

    <div v-if="certificateFound" class="sertificate-container">
      <img src="@/assets/Images/Group 92.png" alt="" />
    </div>

    <div v-else-if="certificateChecked" class="not-found">
      <img src="@/assets/Images/folder-cross.png" alt="" />
    </div>
  </div>
</template>
<script>
import Icons from "@/components/Template/Icons.vue";

export default {
  components: { Icons },
  data() {
    return {
      certificateId: "",
      certificateFound: false,
      certificateChecked: false,
    };
  },
  methods: {
    checkCertificate() {
      const validCertificates = ["ID-AT021", "ID-AT022"];
      this.certificateFound = validCertificates.includes(
        this.certificateId.trim()
      );
      this.certificateChecked = true;
    },
  },
};
</script>

<style>
.Certificate {
  width: 100%;
  height: auto;
  background-color: #000000;
  padding-top: 60px;
}
.certificate-topbar {
  width: 100%;
  height: 420px;
  background-color: rgba(13, 13, 13, 1);
  border-radius: 16px;
  padding: 45px;
}
.certificate-topbar h2 {
  font-size: 60px;
  color: rgba(255, 255, 255, 1);
  line-height: 65px;
  padding-right: 15%;
  font-family: Nohemi;
  font-weight: 500;
  max-width: 1000px;
}
.certificate-topbar p {
  font-size: 23px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 100%;
  margin-top: 10px;
  max-width: 900px;
  font-family: Inter, sans-serif;
  font-weight: 300;
}
.certificate-search-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.certificate-search-wrapper .seach-field {
  background-color: #191919;
  width: 242px;
  border-radius: 10px;
  border: 1px solid rgba(248, 218, 10, 1);
  height: 62px;
  color: white;
  font-family: Manrope;
  font-weight: 400;
  font-size: 20px;
  padding-left: 26px;
}
.certificate-btns-groups {
  display: flex;
  align-items: center;
  gap: 21px;
}
.certificate-search-wrapper .chack-btn {
  padding: 17px 29.5px;
  color: rgba(0, 0, 0, 1);
  border-radius: 10px;
  font-family: Manrope;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(248, 218, 10, 1);
  font-size: 20px;
}
.sertificate-download {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.5);
  font-family: Nohemi;
  font-weight: 500;
  margin-right: 20px;
}
.sertificate-container {
  margin-top: 40px;
}
.not-found {
  width: 1255px;
  height: 886px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(13, 13, 13, 1);
  margin-top: 40px;
  border-radius: 16px;
}

.not-found-title {
  font-size: 40px;
  color: #f8da0a;
  margin-bottom: 10px;
}

.not-found-text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  margin-top: 10px;
}

.error-input {
  border-color: red !important;
  color: red !important;
}
.chack-btn svg > path {
  /* fill: #000000; */
  color: #000000;
  /* stroke: #000000; */
}
.error-btn {
  background-color: #252525 !important;
  /* color: rgba(255, 255, 255, 0.2) !important ; */
}
</style>
