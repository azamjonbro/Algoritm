<template>
	<div class="ContactPage">
		<div class="Contact_top">
			<h2>Har doim siz bilan aloqadamiz <span>*</span></h2>
			<p>Biz bilan bog‘laning, kurslarimiz haqida batafsil ma’lumot olish yoki o‘quv jarayoni bo‘yicha savollaringizga javob topish uchun.
			Har doim sizga yordam berishga va to‘g‘ri yo‘nalish tanlashda ko‘maklashishga tayyormiz!</p>
		</div>
		
		<div class="contact_form_wrapper">
			<input type="text" class="input_name" placeholder="To'liq ism" @input="filterName" maxlength="16" v-model="form.name" >
			<input type="tel"  class="input_tell" placeholder="Telefon raqami" v-model="form.phone" v-mask="'+998 ## ### ## ##'">
			<button class="contact_send_btn"   :disabled="!isFormValid"
			@click="sendToTelegram">Yuborish</button>
		</div>
		<div class="contact_map">
			<Maps/>
		</div>
	</div>
</template>
<script>
    import Maps from "@/components/Maps/MapComponent.vue"
	import { showSuccess } from "@/Utils/Toast";
	import { showError } from "@/Utils/Toast"
	import { mask } from "vue-the-mask";

	export default{
		
		components:{
			Maps,
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
		computed:{
			isFormValid() {
			return (
				this.form.name &&
				this.form.phone 
				
			);
			},
		},
		methods:{
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
		}
	}
</script>

<style scoped>

.ContactPage {
	width: 100%;
	height: auto;
	background-color: #000000;
	padding: 110px 0 0 0;
}
.Contact_top h2{
	font-size: 69px;
	color: rgba(255, 255, 255, 1);
	font-weight: 500;
}
.Contact_top p{
	font-family: Manrope;
	font-weight: 400;
	font-size: 21px;
	color: rgba(255, 255, 255, 1);
	padding-right: 30px;
	margin-top: 10px;
}
.Contact_top span{
	font-size: 69px;
	color: rgba(248, 218, 11, 1);
	font-weight: 600;
	margin-left: -10px;
}

.contact_form_wrapper{
	width: 80%;
	height: 54px;
	margin-top: 35px;
	/* background: #222020; */
	display: flex;
	flex-wrap: wrap;
	gap: 32px;
}
.contact_form_wrapper input{
	background-color: rgba(13, 13, 13, 1);
	&:focus {
    border-color: #ffcc00; 
	color: rgba(255, 255, 255, 0.7);
	font-size: 20px;
	font-family: Manrope;
	font-weight: 400;
  }
}
.contact_form_wrapper .input_name{
	height: 54px;
  width: 390px;
  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.5px solid black;
    margin-bottom: 15px;
  font-size: 20px;
  font-family: Manrope;
  border-radius:10px ;
  padding-left: 23px;
}
.contact_form_wrapper .input_tell{
	height: 54px;
  width: 292px;
  background-color: rgba(13, 13, 13, 1);
  color: rgba(255, 255, 255, 0.7);
  border: 0.5px solid black;
    margin-bottom: 15px;
  font-size: 20px;
  font-family: Manrope;
  border-radius:10px ;
  padding-left: 23px;
}
.contact_form_wrapper .contact_send_btn{
	font-weight: 500;
	height: 55px;
	width: 171px;
	/* padding:0 28.8px; */
	color: rgba(0, 0, 0, 1);
	background-color: rgba(255, 255, 255, 1);
	border-radius: 10px;
	font-size: 25px;
}
.ContactPage .contact_map{
	width: 100%;
	height: 381px;
	margin-top: 40px;
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
</style>
