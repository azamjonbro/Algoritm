<template>
  <header>
    <nav>
      <div class="logobox d-flex gap24">
        <Icons name="newmenuIcon" class="mobile-bar" @click="activeModal"/>
      <router-link to="/">
        <img
          class="navbar-logo-img"
          src="@/assets/Images/home_img/Logonavbar.svg"
          alt="logo"
        />
      </router-link>
      </div>

      <ul :class="showModal?'active-mobile':''" @click="activeModal">
        <li>
          <router-link to="/" exact-active-class="active-link"
            >{{$t("nav__home")}}</router-link
          >
        </li>
        
        <li>
          <router-link to="/courses" active-class="active-link"
            >{{$t("nav__courses")}}</router-link
          >
        </li>
        <li>
          <router-link to="/events" active-class="active-link"
            >{{$t("nav__events")}}</router-link
          >
        </li>
        <li>
          <router-link to="/about" active-class="active-link"
            >{{$t("nav__about")}}</router-link
          >
        </li>
        <li>
          <router-link to="/news" active-class="active-link"
            >{{$t("nav__news")}}</router-link
          >
        </li>
        <li>
          <router-link to="/certificate" active-class="active-link"
            >{{$t("nav__certificates")}}</router-link
          >
        </li>
        <li>
          <router-link to="/contact" active-class="active-link"
            >{{$t("nav__contact")}}</router-link
          >
        </li>
      </ul>
      <span class="language relative" >
        <img src="@/assets/Images/Language icon (1).svg" style="cursor:pointer;" @click="mouseEnterLang" alt="" />
      <div class="postion languages" v-show="showLang">
          <div class="uz" @click="langChange('uz')">
            <img src="../../assets/Images/🇺🇿.png" alt="Rasm" >
          </div>
          <div class="ru" @click="langChange('ru')">
            <img src="../../assets//Images/🇷🇺.png" alt="lang">
          </div>
          <div class="en" @click="langChange('en')">
            <img src="../../assets/Images/🇬🇧.png" alt="Lang">
          </div>
      </div>
      </span>

    </nav>
  </header>
</template>

<script>
import i18n from '@/Utils/i18n.js'
import Icons from '../Template/Icons.vue';
export default {
  name: "Header",
  components: {
    Icons
  },
  data() {
    return {
      showLang:false,
      defaultLang:"uz",
      showModal:false
    }
  },
  methods:{
    mouseEnterLang() {
      this.showLang = !this.showLang;
    },
    langChange(item) {
      console.log(item);
      localStorage.setItem("lang", JSON.stringify(item));
      i18n.setLocale(item);
      this.$router.go();
    },
    activeModal() {
      this.showModal = !this.showModal;
    },
    clickOutside(event) {
      const modalMenu = this.$el.querySelector("ul");
      const langBox = this.$el.querySelector(".language");

      if (modalMenu && !modalMenu.contains(event.target) && !event.target.classList.contains("mobile-bar")) {
        this.showModal = false;
      }

      if (langBox && !langBox.contains(event.target)) {
        this.showLang = false;
      }
    },

  }
};
</script>

<style >
header {
  width: 100%;
  position: sticky;
  top: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  z-index: 100;
  background-attachment: auto;
  backdrop-filter: blur(25px);
  background-color:black;
}
header::after{
  content: "";
  height:40px;
  position: absolute;
  top: 55px;
  /* background-color:gray; */
  z-index: 1;
  background: linear-gradient( rgb(0, 0, 0), rgb(0, 0, 0),transparent );
  /* background-image: linear-gradient(rgba(0, 0, 0, 1) , rgb(19, 16, 16)); */
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo-img {
  display: flex;
}
nav span {
  padding: 12px 23px;
  background-color: rgb(25, 25, 25);
  border-radius: 10px;
}
nav span img {
  display: flex;
}
.logo {
  font-weight: bold;
  text-decoration: none;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

nav ul {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li a {
  text-decoration: none;
  color: gray;
  font-weight: 500;
  font-size: 19px;
  transition: 0.3s ease-in-out;
  font-family: "Manrope";
  padding: 9px 20px;
  border-radius: 10px;
}
ul li a:hover {
  color: #fff !important;
  background-color: #0d0d0d !important;
}

ul li a.active-link,
ul li a.router-link-exact-active {
  color: #fff !important;
  background-color: #0d0d0d !important;
}
.logobox .mobile-bar{
  display: none  !important;
}
@media (max-width:1440px){
  nav  ul a {
    font-size: 14px;
  }
}
@media (max-width:1240px){
  .header{
    position: relative;
  }
  nav ul{
    position: absolute;
    /* display: flex; */
    flex-direction: column;
    gap: 40px;
    padding: 50px 36px;
    border-radius: 10px;
    background: #0d0d0d;
    top: 90px;
    display: none;
    z-index: 10010;
  }
  .logobox .mobile-bar{
    display: flex  !important;
  }
  .active-mobile{
    display: flex;
  }
}
</style>
