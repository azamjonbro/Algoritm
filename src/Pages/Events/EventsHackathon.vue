<template>
  <div class="Hackathon">
    <div class="Hackathon-title-wrapper">
      <div class="Hackathon-titles">
        <router-link to="/events">
          <span>
            <img src="@/assets/Images/arrow-left.svg" alt="" />
          </span>
        </router-link>
        <h2>{{ $t("hackathon.title") }}</h2>
      </div>
      <p>{{ $t("hackathon.subtitle") }}</p>
    </div>

    <div class="Hackathon-forms">
      <div class="form-grid">
        <div class="forms-wrapper">
          <input
            v-model="form.fullName"
            type="text"
            :placeholder="$t('hackathon.fullname')"
            class="input-field yellow-focus"
          />
          <input
            v-model="form.phone"
            type="tel"
            :placeholder="$t('hackathon.phone')"
            class="input-field"
          />
        </div>
        <div class="forms-wrapper">
          <input
            v-model="form.email"
            type="email"
            :placeholder="$t('hackathon.email')"
            class="input-field blue-focus"
          />
          <input
            v-model="form.teamName"
            type="text"
            :placeholder="$t('hackathon.teamname')"
            class="input-field"
          />
        </div>

        <div class="team-section">
          <h3>{{ $t("hackathon.teammembers.title") }}</h3>
          <p>{{ $t("hackathon.teammembers.subtitle") }}</p>
          <div class="team-members">
            <span v-for="(member, index) in teamMembers" :key="index" class="badge">{{
              member
            }}</span>
          </div>
          <Icons name="user_add" />
        </div>
      </div>
    </div>

    <div class="hackathon-texts-wrapper">
      <div class="hackathon-rules-title">
        <h2>{{ $t("hackathon.rules.title") }}</h2>
        <p>{{ $t("hackathon.rules.subtitle") }}</p>
      </div>

      <div class="hackathon-rules-wrapper">
        <div class="rules-card" v-for="(rule, index) in rules" :key="index">
          <h2>{{ $t(rule.title) }}</h2>
          <p>{{ $t(rule.text) }}</p>
        </div>
      </div>

      <div class="container-submits">
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="termsAccepted" class="checkbox" />
            {{ $t("hackathon.confirm.terms") }}
          </label>

          <label class="checkbox-label">
            <input type="checkbox" v-model="infoConfirmed" class="checkbox" />
            {{ $t("hackathon.confirm.info") }}
          </label>
        </div>

        <div class="send-btns">
          <button class="submit-btn" @click="handleSubmit" :disabled="isLoading">
            {{ $t("hackathon.submit") }}
          </button>
          <span v-if="isLoading" class="spinner"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showErrorSend, showSuccess } from "@/Utils/Toast";
import Icons from "@/components/Template/Icons.vue";

export default {
  components: {
    Icons,
  },
  data() {
    return {
      form: {
        fullName: "",
        phone: "",
        email: "",
        teamName: "",
      },
      teamMembers: ["A", "D", "G", "U", "T"],
      termsAccepted: false,
      infoConfirmed: false,
      isLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.termsAccepted || !this.infoConfirmed) {
        showErrorSend("Iltimos, barcha shartlarni tasdiqlang!");
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        showSuccess("Ma'lumot yuborildi!");
      }, 2000);
    },
  },
};
</script>

<style scoped>
.Hackathon {
  width: 100%;
  height: auto;
}
.Hackathon-title-wrapper {
  margin-top: 90px;
  display: flex;
  align-items: start;
  gap: 133px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.Hackathon-titles {
  display: flex;
  align-items: start;
  gap: 25px;
}
.Hackathon-title-wrapper span {
  padding: 10px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #191919;
}
.Hackathon-title-wrapper p {
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-family: Nohemi;
  font-weight: 300;
  line-height: 26px;
  max-width: 500px;
  margin-right: 0;
}
.Hackathon-title-wrapper h2 {
  color: rgba(255, 255, 255, 1);
  font-size: 36px;
  font-family: "Nohemi";
  font-weight: 500;
  max-width: 500px;
  line-height: 40px;
}

.form-grid {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 66px;
  margin-top: 35px;
}
.forms-wrapper {
  width: 400px;
}
.input-field {
  height: 54px;
  width: 100%;
  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.5px solid black;
  margin-bottom: 15px;
  font-size: 20px;
  font-family: Manrope;
  border-radius: 10px;
  padding-left: 23px;

  &:focus {
    border-color: #ffcc00;
  }
}

.team-section {
  width: 340px;
  grid-column: span 2;
  background-color: rgba(13, 13, 13, 1);
  padding: 16px;
  border-radius: 8px;
  color: white;
  position: relative;
}
.team-section img {
  position: absolute;
  top: 30px;
  right: 33px;
}
.team-members {
  margin-top: 10px;
}
.team-section h3 {
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
.team-section p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  font-family: Manrope;
}

.badge {
  background-color: rgba(23, 23, 23, 1);
  color: white;
  padding: 8px 11px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
  margin-right: 6px;
}
.hackathon-texts-wrapper {
  padding-left: 66px;
  margin-top: 35px;
}
.hackathon-rules-title {
  display: flex;
  gap: 35px;
}
.hackathon-rules-title h2 {
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
  font-family: Manrope;
  font-weight: 500;
  max-width: 208px;
}
.hackathon-rules-title p {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
  font-family: Manrope;
  font-weight: 300;
  max-width: 348px;
}
.hackathon-rules-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 25px;
  margin-top: 25px;
}
.rules-card {
  width: 350px;
  height: auto;
}
.rules-card h2 {
  color: rgba(255, 255, 255, 1);
  font-size: 17px;
  font-family: Manrope;
  font-weight: 400;
}
.rules-card p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-family: Manrope;
  font-weight: 200;
  margin-top: 10px;
}
.container-submits {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 20px;
  color: white;
  padding: 60px 0;
}

.checkbox-group {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 10px;
  font-family: Manrope;
  color: rgba(255, 255, 255, 0.7);
}

.checkbox {
  width: 30px;
  height: 30px;
  cursor: pointer;
  appearance: none;
  background-color: rgba(13, 13, 13, 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:checked {
    background-color: #ffcc00;
    border-color: #ffcc00;
  }
}

.submit-btn {
  max-width: 187px;
  height: 60px;

  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 8px;
  font-size: 29px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  position: relative;
  padding: 0;
}
.send-btns {
  width: 20%;
  display: flex;
  align-items: center;
  gap: 10px;
}
.submit-btn:hover {
      background-color: #ffcc00 !important;
      color: rgba(13, 13, 13, 1);
      transition: all 0.3s ease;
    }

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 1240px) {
  .Hackathon-title-wrapper {
    flex-direction: column;
    gap: 0px;
    padding-bottom: 0px;
  }
  .Hackathon-title-wrapper span {
    margin-bottom: 20px;
  }
  .Hackathon-title-wrapper h2 {
    font-size: 28px;
    line-height: 32px;
  }
  .Hackathon-title-wrapper p {
    font-size: 16px;
    line-height: 20px;
  }
  .form-grid {
    padding-left: 0px;
  }
  .forms-wrapper {
    width: 100%;
  }
  .team-section {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .container-submits {
    flex-direction: column;
    align-items: center;
  }
  .checkbox-group {
    flex-direction: column;
    gap: 10px;
  }
  .send-btns {
    width: 100%;
    justify-content: center;
  }
  .hackathon-rules-title{
    flex-direction: column;
    gap: 12px;
  }
  .submit-btn {
    &[data-v-22a32f70] {
      width: 100% !important;
      height: 60px;
      background-color: rgba(13, 13, 13, 1);
      color: rgba(255, 255, 255, 0.5);
      border: none;
      border-radius: 8px;
      font-size: 29px;
      cursor: pointer;
      transition: opacity 0.3s ease;
      position: relative;
      padding: 0;
    }
    
  }
  .submit-btn:hover {
      background-color: #ffcc00 !important;
      color: rgba(13, 13, 13, 1);
      transition: all 0.3s ease;
    }
  .hackathon-texts-wrapper{
    padding-left: 12px;
  }
}
</style>
