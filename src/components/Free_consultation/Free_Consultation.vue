<template>
  <div class="consultation-form">
    <div>
      <h2 class="title">Bepul konsultatsiya</h2>
      <p class="subtitle">
        Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz va
        birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
      </p>
    </div>

    <input
      type="text"
      v-model="form.name"
      placeholder="Ismingiz"
      class="input name-input"
      @input="filterName"
      maxlength="10"
    />
    <select v-model="form.profession" class="dropdown">
      <option disabled value="">Qanday kasb egallamoqchisiz?</option>
      <option>Web Dasturlash</option>
      <option>Grafik Dizayn</option>
      <option>Digital Marketing</option>
    </select>

    <div class="Phone_Number">
      <input
        type="tel"
        v-model="form.phone"
        placeholder="+998"
        v-mask="'+998 ## ### ## ##'"
        class="input phone-input"
      />

      <button
        class="submit-btn"
        :disabled="!isFormValid"
        @click="sendToTelegram"
      >
        Yuborish
      </button>
    </div>

    <div class="consent-wrapper">
      <input type="checkbox" v-model="form.consent" />
      <label for="consent">
        {{ t("personal__info") }} <a href="#">qayta ishlanishiga</a> roziman
      </label>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { showSuccess } from "@/Utils/Toast";
import { showError } from "@/Utils/Toast";
import { t } from "@/Utils/i18n";
export default {
  directives: { mask },
  data() {
    return {
      t,
      form: {
        name: "",
        phone: "",
        profession: "",
        consent: false,
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name &&
        this.form.phone &&
        this.form.profession &&
        this.form.consent
      );
    },
  },
  methods: {
    async sendToTelegram() {
      const botToken = "7927115509:AAHCT7c7elCP-CqBJGB8WnlYxcQf4fXoPhk";
      const chatId = "1091223879";
      const message = `📝 Yangi so'rov: 
      
      👤 Ism: ${this.form.name} 
      📞 Telefon: ${this.form.phone}
      🎯 Kasb: ${this.form.profession}`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const payload = {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (data.ok) {
          showSuccess("Ma'lumot yuborildi!");
          this.form.name = "";
          this.form.phone = "";
          this.form.profession = "";
          this.form.consent = false;
        } else {
          showError(`Xatolik: ${data.description}`);
        }
      } catch (error) {
        console.error("Xatolik:", error);
        showError("Xatolik yuz berdi");
      }
    },
    filterName(event) {
      this.form.name = event.target.value.replace(/[^a-zA-Zа-яА-Яўғқҳʼ ]/g, "");
    },
  },
};
</script>

<style>
.consultation-form {
  background: #111;
  color: #fff;
  padding: 26px 30px;
  border-radius: 10px;
  width: 100%;
  max-height: 381px;
  display: flex;
  gap: 5px;
  flex-direction: column;
}

.Phone_Number {
  display: flex;
  align-items: center;
  gap: 20px;
}

.consultation-form .title {
  font-size: 2.28rem;
  font-weight: 500;
  font-family: Nohemi;
  color: #f8d800;
}

::placeholder {
  color: rgb(191, 191, 191);
  font-size: 20px;
}

.consultation-form .subtitle {
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: Manrope;
  margin-top: 5px;
}

.consent-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.consent-wrapper label {
  color: rgb(198, 198, 198);
  font-size: 12px;
  font-family: Manrope;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.consent-wrapper input {
  width: 18.5px;
  height: 18.5px;
  border-radius: 50%;
  background-color: rgba(13, 13, 13, 1);
  appearance: none;
  display: inline-block;
  cursor: pointer;
  border: none;
  position: relative;
  /* font-family: Manrope; */
}

.consent-wrapper input:checked {
  background-color: #ffd700;
}

.consent-wrapper input:checked::after {
  content: "";
  font-size: 12px;
  color: #000;
  position: absolute;
  background-image: url("@/assets/Images/Vector (3).svg");
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}

.consent-wrapper a {
  color: rgb(198, 198, 198);
  text-decoration: underline;
  font-size: 12px;
}

.consultation-form .input {
  width: 100%;
  padding: 16px 12px;
  margin: 8px 0;
  border: 0.5px solid #000;
  border-radius: 10px;
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-family: Manrope;

  padding-left: 21px;
}
.input:focus {
  border: 0.5px solid #ffcc00;
}

.dropdown {
  width: 100%;
  padding: 12.6px 16px;
  border: #000 solid 0.5px;
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  appearance: none;
  border-radius: 10px;
  background-image: url("@/assets/Images/home_img/arrow-down.png");
  background-repeat: no-repeat;
  background-position: right 20px center;
  font-family: Manrope;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
}

.submit-btn {
  background: #000000;
  color: rgba(255, 255, 255, 0.3);
  padding: 13.4px 34px;
  border: none;
  flex: 1;
  border-radius: 10px;
  font-size: 20px;
  font-family: Manrope;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
}

.submit-btn:active {
  background-color: #fff;
  color: #000;
}

.submit-btn:disabled {
  cursor: not-allowed;
}

.submit-btn:disabled:hover,
.submit-btn:disabled:active {
  background: #000;
  color: rgb(191, 191, 191);
}
</style>
