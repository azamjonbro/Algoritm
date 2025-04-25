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
                >Bosh sahifa</router-link
              >
            </li> 
            <li>
              <router-link to="/courses" active-class="active-link"
                >Kurslar</router-link
              >
            </li>
            <li>
              <router-link to="/events" active-class="active-link"
                >Eventlar</router-link
              >
            </li>
            <li>
              <router-link to="/contact" active-class="active-link"
                >Aloqa markazi</router-link
              >
            </li>
          </ul>
          <ul class="links-group">
            <li><router-link to="/about">Biz haqimizda</router-link></li>
            <li><router-link to="/news">Yangiliklar</router-link></li>
            <li><router-link to="/certificates">Sertifikatlar</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
          <p>©Algoritm 2024 | Privacy Policy | Certified Policy | Legal</p>
        </div>
      </div>

      <!-- Right Section: Social Media Links -->
      <div class="footer-social-links">
        <a href="https://facebook.com" target="_blank"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="https://twitter.com" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a href="https://instagram.com" target="_blank"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://linkedin.com" target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
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
  /* background-color: #1da1f2; */
}

/* Page Links */


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
  /* gap: 10px; */
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

/* Social Media Icons */
.footer-social-links {
  width: 40%;
  display: flex;
  height: 200px;
  justify-content: flex-end;
  /* background-color: antiquewhite; */
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

/* Responsive Design */
@media (max-width: 768px) {
  .footer-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-page-links,
  .footer-social-links {
    width: 100%;
    justify-content: center;
  }

  .footer-social-links {
    margin-top: 20px;
  }
}
</style>
