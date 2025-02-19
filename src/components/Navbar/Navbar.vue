<template>
	<header>
		<nav>
			<router-link to="/">
				<a class="logo">
					<img src="@/assets/Images/Vector.svg" alt="" />
					ALGORITM
				</a>
			</router-link>

			<ul>
				<li>
					<router-link to="/" exact-active-class="active-link">Bosh sahifa</router-link>
				</li>
				<li>
					<router-link to="/courses" active-class="active-link">Kurslar</router-link>
				</li>
				<li>
					<router-link to="/about" active-class="active-link">Biz haqimizda</router-link>
				</li>
				<li>
					<router-link to="/news" active-class="active-link">Yangiliklar</router-link>
				</li>
				<li>
					<router-link to="/certificate" active-class="active-link">Sertifikatlar</router-link>
				</li>
				<li>
					<router-link to="/contact" active-class="active-link">Aloqa markazi</router-link>
				</li>
			</ul>
			<span>
				<img src="@/assets/Images/Language icon.svg" alt="" />
			</span>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style>
/* Header */
header {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 0;
}

/* Navbar */
nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* Logo */
.logo {
	font-weight: bold;
	text-decoration: none;
	color: white;
	font-size: 18px;
	display: flex;
	align-items: center;
	gap: 10px;
}

/* Menu */
ul {
	display: flex;
	justify-content: space-between;
	gap: 30px;
	list-style: none;
	padding: 0;
	margin: 0;
}

ul li a {
	text-decoration: none;
	color: gray;
	font-weight: 400;
	font-size: 19px;
	transition: 0.3s ease-in-out;
	font-family: "Noto Sans";
	padding: 9px 20px;
	border-radius: 10px;
}
ul li a:hover {
	color: #fff !important;
	background-color: #0d0d0d !important;
}

/* **Active (faol) linklar** */
ul li a.active-link,
ul li a.router-link-exact-active {
	color: #fff !important;
	background-color: #0d0d0d !important;
}
</style>
