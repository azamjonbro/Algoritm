<template>
  <div class="Enrol-In-Main">
    <div class="Enrol-nav">
      <span class="barside"> </span>
      <div>
        <h2>{{$t("near__course")}}</h2>
        <p>{{$t("near__description")}}</p>
      </div>
    </div>

    <div class="Enrol-In-Wrapper">
      <div class="Courses-time">
        <select v-model="selectedCourse">
          <option value="">{{$t("form__goal")}}</option>
          <option v-for="course in courses" :key="course">
            {{ $t(course) }}
          </option>
        </select>

        <div class="date-selection">
          <h3>{{$t("recently")}}</h3>
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

        <div class="time-selection">
          <h3>{{$t('time__hour')}}</h3>
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
      </div>

      <div class="Enrol-in-form">
        <h2>{{$t("kurs__uchun_title")}}</h2>
        <input type="text" />
        <input
          type="text"
          v-model="form.name"
          :placeholder="$t('form__name')"
          class="input name-input"
          @input="filterName"
          maxlength="10"
        />
        <div class="Phone_Number">
          <input
            type="tel"
            v-model="form.phone"
            placeholder="+998"
            value="+998"
            v-mask="'+998 ## ### ## ##'"
            class="input phone-input"
          />

          <!-- Submit Button -->
          <button
            class="submit-btn"
            :disabled="!isFormValid"
            :class="{ 'active-enroll': isFormValid }"
            @click="sendToTelegram"
          >
            {{$t("send__message")}}
          </button>
        </div>
        <div class="consent-wrapper">
          <input type="checkbox" v-model="form.consent" />
          <label for="consent">
        {{ $t("personal__info") }} <a href="#">{{ $t('qayta') }}</a> {{ $t('rozi') }}
      </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { showSuccess } from "@/Utils/Toast";

export default {
  directives: { mask },

  data() {
    return {
      courses: ["web_dasturlash", "kiber", "dizayn"],
      selectedCourse: "",
      dates: ["29.02.2025", "28.02.2025", "01.03.2025", "21.02.2025", "27.02.2025"],
      selectedDate: "",
      times: ["09:00", "12:00", "15:00"],
      selectedTime: "",
      form: {
        name: "",
        phone: "",
        consent: false,
      },
    };
  },

  computed: {
    isFormValid() {
      return (
        this.form.name.trim().length >= 3 && // Name kamida 3 ta harf
        /^\+998 \d{2} \d{3} \d{2} \d{2}$/.test(this.form.phone) && // Telefon raqam tekshiruvi
        this.form.consent // Rozilik belgilangan
      );
    },
  },

  mounted() {
    this.checkFormValidity();
  },

  watch: {
    form: {
      handler: "checkFormValidity",
      deep: true,
    },
    selectedCourse: "checkFormValidity",
    selectedDate: "checkFormValidity",
    selectedTime: "checkFormValidity",
  },

  methods: {
    checkFormValidity() {
      const btn = document.querySelector(".submit-btn");
      if (btn) {
        if (this.isFormValid) {
          btn.classList.add("active-enroll");
        } else {
          btn.classList.remove("active-enroll");
        }
      }
    },

    async sendToTelegram() {
      if (!this.isFormValid) {
        alert("Iltimos, barcha maydonlarni to'g'ri to'ldiring!");
        return;
      }

      const botToken = "7927115509:AAHCT7c7elCP-CqBJGB8WnlYxcQf4fXoPhk";
      const chatId = "1091223879";

      const message = `📝 Yangi so'rov:

👤 Ism: ${this.form.name}
📞 Telefon: ${this.form.phone}
📚 Kurs: ${this.selectedCourse || "Tanlanmagan"}
📅 Sana: ${this.selectedDate || "Tanlanmagan"}
⏰ Vaqt: ${this.selectedTime || "Tanlanmagan"}`;

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "Markdown",
            }),
          }
        );

        const data = await response.json();
        if (data.ok) {
          showSuccess("Ma'lumot yuborildi!");
          this.resetForm();
        } else {
          alert(`Xatolik: ${data.description}`);
        }
      } catch (error) {
        console.error("Xatolik:", error);
        alert("Xatolik yuz berdi!");
      }
    },

    filterName(event) {
      this.form.name = event.target.value.replace(
        /[^a-zA-Zа-яА-Яўқғҳʼ ]/gu,
        ""
      );
    },

    resetForm() {
      this.form = { name: "", phone: "", consent: false };
      this.selectedCourse = "";
      this.selectedDate = "";
      this.selectedTime = "";
      this.checkFormValidity();
    },
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
  font-weight: 500;
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

.active-enroll {
  background: #ffd700 !important;
  color: #000 !important;
}
.Courses-time .date-selection,
.time-selection {
  width: 100%;
  height: auto;
  padding-top: 25px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #0d0d0d;
}
.date-selection > h3 {
  margin-left: 20px;
  max-width: 172px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
  color: white;
}

.time-selection  h3 {
  margin-left: 20px;
  font-size: 16px;
  max-width: 172px;
  font-weight: 400;
  color: white;
}

.Courses-time select {
  width: 100%;
  padding: 23px 30px;
  background: #0d0d0d;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  font-family: Manrope;
  appearance: none;
  font-size: 20px;
  border-radius: 10px;
  background-image: url("@/assets/Images/home_img/arrow-down.png");
  background-repeat: no-repeat;
  background-position: right 33px center;
  /* margin-bottom: 20px; */

}

.date-options,
.time-options {
  display: flex;
  gap: 10px;
  padding: 23px 20px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.Courses-time button {
  padding: 10px 15px;
  border-radius: 10px;
  background: #222;
  color: white;
  border: none;
  cursor: pointer;
}
.Courses-time button.active {
  background: #fff;
  color: #000;
}

/* Enrol-in-form */

.Enrol-in-form {
  width: 50%;
  padding: 50px 40px;
  background-color: #0d0d0d;
  max-height: 414px;
  height: 414px;
  border-radius: 10px;
}
.Enrol-in-form h2 {
  font-size: 40px;
  color: #ffffff;
  font-weight: 500;
}
.Enrol-in-form .input {
  width: 100%;
  /* padding: 16px 12px; */
  height: 74px;
  max-height: 74px;
  margin: 8px 0;
  border: 0.5px solid #000;
  border-radius: 10px;
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-family: Manrope;

  padding-left: 28px;
}
.consent-wrapper a {
  color: rgb(198, 198, 198);
  text-decoration: underline;
  font-size: 12px;
}
.Enrol-in-form .submit-btn {
  background: #000000;
  color: rgba(255, 255, 255, 0.3);
  padding: 23px 54px;
  border: none;
  flex: 1;
  border-radius: 10px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
}
.input:focus {
  border: 0.5px solid #ffcc00;
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
.Enrol-in-form .consent-wrapper input {
  width: 24px;
  height: 24px;
  background-color: rgb(0, 0, 0);
  appearance: none;
  display: inline-block;
  cursor: pointer;
  border: none;
  position: relative;
}
.consent-wrapper input:checked {
  background-color: #ffd700;
}

.consent-wrapper input:checked::after {
  content: "";
  width: 10px;
  height: 9px;
  background-image: url("@/assets/Images/Vector (3).svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media (max-width:1180px){
  .Courses-time select{
    white-space: normal !important;
    word-break: break-word !important;
    text-align: left !important;
    overflow-wrap: break-word !important;
  }
  .Enrol-in-form{
    height: auto;
  }
  .Enrol-in-form>h2{
      font-size: 24px;
  }
  .Phone_Number{
    display: flex;
    flex-direction: column;
  }
  .Enrol-in-form .input{
    height: 48px;
  }
  .Enrol-in-form .submit-btn{
    padding: 12px 54px;
    font-size: 16px;
  }
}
@media (max-width:768px) {
  .Enrol-In-Wrapper {
    flex-direction: column;
    align-items: center;
  }
  .Courses-time {
    width: 100%;
  }
  .Enrol-in-form {
    width: 100%;
  }
  .Enrol-nav h2 {
    font-size: 24px;
  }
}
</style>
