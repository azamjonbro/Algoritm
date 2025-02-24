<template>
  <div class="consultation-form">
    <div>
      <h2 class="title">Bepul konsultatsiya</h2>
      <p class="subtitle">
        Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz va
        birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
      </p>
    </div>

    <!-- Name Input -->
    <input
      type="text"
      v-model="name"
      placeholder="Ismingiz"
      class="input name-input"
    />

    <select name="" id="" class="dropdown">
      <option>Qanday kasb egallamoqchisiz?</option>
      <option value="">samething</option>
      <option value="">samething</option>
      <option value="">samething</option>
    </select>

    <div class="Phone_Number">
      <input
        type="tel"
        v-model="phone"
        placeholder="+998 69 404 34 34"
        class="input phone-input"
      />

      <!-- Submit Button -->
      <button class="submit-btn" :disabled="!isFormValid">Yuborish</button>
    </div>

    <div class="consent">
      <input type="checkbox" v-model="consent" id="consent" />
      <label for="consent">
        Shaxsiy ma'lumotlarni <a href="#">qayta ishlanishiga</a> roziman
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
  /* max-width: 450px; */
  margin: auto;
}
.Phone_Number {
  display: flex;
  align-items: center;
  gap: 30px;
}
.consultation-form .title {
  font-size: 2rem;
  font-weight: 600;
  color: #f8d800;
}
::placeholder {
  color: rgb(191, 191, 191);
  font-size: 20px;
}
.subtitle {
  font-size: 13px;
  line-height: 16px;
  color: gray;
}

.input {
  width: 100%;
  padding: 16px 12px;
  margin: 8px 0;
  border: 0.5px solid #000;
  border-radius: 10px;
  background: #000;
  color: #fff;
  font-size: 16px;
  padding-left: 21px;
}
.input:focus {
  border: 0.5px solid #ffcc00;
}

.dropdown {
  width: 100%;
  padding: 12px 12px;
  border: #000 solid 0.5px;
  background: #000;
  color: rgb(191, 191, 191);

  padding-left: 21px;
  padding-right: 21px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
}



.submit-btn {
  background: #000000;
  color: rgb(191, 191, 191);
  padding: 16.2px 34px;
  border: none;
  flex: 1;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}

/* .submit-btn:disabled {
	background: #444;
	cursor: not-allowed;
} */
</style>
