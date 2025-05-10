<template>
  <footer>
    <div class="footer-wrapper">
      <!-- Left Section: Logo & Page Links -->
      <div class="footer-page-links">
        <img src="@/assets/Images/home_img/Logofooter.svg" alt="Logo" />
        <div class="pages-links-wrapper">
          <ul class="links-group">
            <li>
              <router-link to="/" active-class="active-link"
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
              <router-link to="/contact" active-class="active-link"
                >{{$t("nav__contact")}}</router-link
              >
            </li>
          </ul>
          <ul class="links-group">
            <li><router-link to="/about">{{$t("nav__about")}}</router-link></li>
            <li><router-link to="/news">{{$t("nav__news")}}</router-link></li>
            <li><router-link to="/certificates">{{$t("nav__certificates")}}</router-link></li>
            <li><router-link to="/faq">{{$t("nav__faqs")}}</router-link></li>
          </ul>
          <p>©Algoritm 2024 | Privacy Policy | Certified Policy | Legal</p>
        </div>
      </div>
      <div class="footer-social-links">
        <a href="https://t.me/algoritm_edu" target="_blank"><Icons class="icons-width" name="telegramicon"/></a>
        <a href="https://twitter.com" target="_blank"><Icons class="icons-width" name="twittericon"/></a>
        <a href="https://instagram.com" target="_blank"><Icons class="icons-width" name="instagramicon"/></a>
        <a href="https://linkedin.com" target="_blank"><Icons class="icons-width" name="linkedinicon"/></a>
      </div>
    </div>
  </footer>
</template>

<script>
import Icons from '../Template/Icons.vue';

export default {
  name: "FooterComponent",
  components:{
    Icons
  }
};
</script>

<style scoped>
footer {
  /* height: 296px; */
  width: 100%;
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
}

.footer-wrapper {
  max-width: 1440px;
  width: 1440px;
  padding: 0 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons-width{
  width: 28px;
}


.links-group:nth-child(1) {
  display: flex;
  gap: 40px;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin-top: 9px;
  margin-left: -20px;
}
.links-group:nth-child(2) {
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  margin-top: 9px;
  margin-left: -20px;
}

.links-group li a {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s;
  font-family: Manrope;
}

.links-group li a:hover,
.links-group li a.active-link {
  color: white;
}

.footer-social-links {
  width: 40%;
  display: flex;
  height: 200px;
  justify-content: flex-end;
  gap: 15px;
}

.footer-social-links a {
  color: white;
  font-size: 22px;
  transition: color 0.3s;
}

.footer-social-links a:hover {
  color: #1da1f2;
}
.pages-links-wrapper {
  margin-top: 57px;
}
.pages-links-wrapper p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  margin-top: 39px;
  font-family: sans-serif;
}

@media (max-width: 768px) {
  .footer-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding:20px;
  }

  .footer-page-links,
  .footer-social-links {
    width: 100%;
    justify-content: center;
  }

  .footer-social-links {
    margin-top: 20px;
  }
  .links-group:nth-last-child(2){
    gap: 10px;
  }
}
</style>
