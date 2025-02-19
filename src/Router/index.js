import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/Pages/Home/HomePage.vue";
import CoursesPage from "@/Pages/Courses/CoursePage.vue";
import AboutPage from "@/Pages/About/AboutPage.vue";
import NewsPage from "@/Pages/News/NewsPage.vue";
import CertificatePage from "@/Pages/Certificates/CertificatePage.vue";
import ContactPage from "@/Pages/Contact/ContactPage.vue";

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
	linkActiveClass: "active-link", // 🚀 Faol sahifa uchun class
	linkExactActiveClass: "exact-active-link", // 🚀 Faqat bosh sahifa uchun class
});

export default router;
