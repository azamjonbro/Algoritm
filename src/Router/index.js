import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/Home/HomePage.vue";
import CoursesPage from "@/Pages/Courses/CoursePage.vue";
import AboutPage from "@/Pages/About/AboutPage.vue";
import NewsPage from "@/Pages/News/NewsPage.vue";
import CertificatePage from "@/Pages/Certificates/CertificatePage.vue";
import ContactPage from "@/Pages/Contact/ContactPage.vue";
import EventsPage from "@/Pages/Events/EventsPage.vue";
import EventsHackothon from "@/Pages/Events/EventsHackathon.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/courses",
    name: "Courses",
    component: CoursesPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/events",
    name: "Events",
    component: EventsPage,
 
  },
  {
    path: "/hackathon",
    name: "hackathon",
    component: EventsHackothon,
  },
  
  {
    path: "/news",
    name: "News",
    component: NewsPage,
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: CertificatePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
  scrollBehavior(to, from, savedPosition) { 
    return { top: 0 }
  }
});

export default router;
  