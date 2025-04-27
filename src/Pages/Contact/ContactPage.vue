<template>
  <div class="ContactPage">
    <div class="Contact_top">
      <h2>{{ $t("contact__title") }} <span>*</span></h2>
      <p>
        {{ $t("contact__description") }}
      </p>
      <Icons name="contactBaunce" class="baunceicon" @click="scrollToForm" />
    </div>

    <div class="contact_form_wrapper">
      <input
        type="text"
        class="input_name"
        placeholder="To'liq ism"
        @input="filterName"
        maxlength="16"
        v-model="form.name"
      />
      <input
        type="tel"
        class="input_tell"
        placeholder="Telefon raqami"
        v-model="form.phone"
        v-mask="'+998 ## ### ## ##'"
      />
      <button
        class="contact_send_btn"
        :disabled="!isFormValid"
        @click="sendToTelegram"
      >
        Yuborish
      </button>
    </div>
    <div class="contact_map">
      <Maps />
    </div>
    <div class="contact_footer_text">
      <div class="shadow-overlay"></div>
      <Icons name="contactText" />
      <div class="popup_icon">
        <Icons name="popup_icon" />
      </div>
    </div>
  </div>
</template>
<script>
import Icons from "@/components/Template/Icons.vue";
import Maps from "@/components/Maps/MapComponent.vue";
import { showSuccess } from "@/Utils/Toast";
import { showError } from "@/Utils/Toast";
import { mask } from "vue-the-mask";

export default {
  components: {
    Maps,
    Icons,
  },
  directives: { mask },
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
    };
  },
  computed: {
    isFormValid() {
      return this.form.name && this.form.phone;
    },
  },
  methods: {
    async sendToTelegram() {
      const botToken = "7927115509:AAHCT7c7elCP-CqBJGB8WnlYxcQf4fXoPhk";
      const chatId = "1091223879";
      const message = `📝 Yangi so'rov: 
			
			👤 Ism: ${this.form.name} 
			📞 Telefon: ${this.form.phone}
			`;

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
        } else {
          showError("Xatolik yuz berdi");
        }
      } catch (error) {
        console.error("Xatolik:", error);
        showError("Xatolik yuz berdi");
      }
    },
    filterName(event) {
      this.form.name = event.target.value.replace(/[^a-zA-Zа-яА-Яўғқҳʼ ]/g, "");
    },
    scrollToForm() {
      const mapSection = document.querySelector(".contact_footer_text");
      const popup = document.querySelector(".popup_icon");
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.ContactPage {
  width: 100%;
  height: auto;
  background-color: #000000;
  padding: 70px 0 0 0;
}
.Contact_top h2 {
  font-size: 69px;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
}
.Contact_top p {
  font-family: Manrope;
  font-weight: 400;
  font-size: 21px;
  color: rgba(255, 255, 255, 1);
  padding-right: 30px;
  margin-top: 10px;
}
.Contact_top {
  position: relative;
}
.Contact_top span {
  font-size: 69px;
  color: rgba(248, 218, 11, 1);
  font-weight: 600;
  margin-left: -10px;
}

.contact_form_wrapper {
  width: 80%;
  height: 54px;
  margin-top: 35px;
  /* background: #222020; */
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
.contact_form_wrapper input {
  background-color: rgba(13, 13, 13, 1);
  &:focus {
    border-color: #ffcc00;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    font-family: Manrope;
    font-weight: 400;
  }
}
.contact_form_wrapper .input_name {
  height: 54px;
  width: 390px;
  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.5px solid black;
  margin-bottom: 15px;
  font-size: 20px;
  font-family: Manrope;
  border-radius: 10px;
  padding-left: 23px;
}
.contact_form_wrapper .input_tell {
  height: 54px;
  width: 292px;
  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.5px solid black;
  margin-bottom: 15px;
  font-size: 20px;
  font-family: Manrope;
  border-radius: 10px;
  padding-left: 23px;
}
.contact_form_wrapper .contact_send_btn {
  font-weight: 500;
  height: 55px;
  width: 171px;
  /* padding:0 28.8px; */
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 25px;
}
.ContactPage .contact_map {
  width: 100%;
  height: 381px;
  margin-top: 40px;
  position: relative;
  z-index: 1;
  /* display: flex; */
  /* align-items: center; */
}
.contact_send_btn:disabled {
  cursor: not-allowed;
}

.contact_send_btn:disabled:hover,
.contact_send_btn:disabled:active {
  background: #000;
  color: rgb(191, 191, 191);
}

.contact_footer_text {
  width: 100%;
  margin-top: 100px;
  position: relative;
}

.shadow-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* drop-shadow filterini qo'llaymiz */
  background: linear-gradient(
    0.1deg,
    #000000 8.5%,
    #000000 38.5%,
    rgba(0, 0, 0, 0) 68.57%,
    rgba(32, 30, 30, 0) 100%
  );
  opacity: 0.9;

  pointer-events: none; /* Bu qatlam interaktivlikka aralashmasligi uchun */
  z-index: 2;
}
.shadow-overlay::after {
  content: "";
  width: 100%;
  height: 100px;
  background-color: #000000;
  position: absolute;
  bottom: 0;
  z-index: 1;
  opacity: 1;
}
.baunceicon {
  position: absolute;
  top: -50px;
  right: 0;
  animation: Bounce 1s infinite alternate;
}
.popup_icon {
  position: absolute;
  width: 138px;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  bottom: 0; /* Boshlanishdagi holat */
  left: 40%;
  opacity: 0; /* Boshlanishda ko'rinmas bo'ladi */
  transition: all 0.6s ease; /* Animatsiya uchun */
}

.contact_footer_text:hover .popup_icon {
  opacity: 1; /* Ko'rinadi */
  bottom: 200px; /* Pastga tushadi */
  z-index: 2;
}

@keyframes Bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
