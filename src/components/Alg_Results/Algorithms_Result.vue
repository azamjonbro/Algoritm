<template>
  <div class="Algorithms_result_wrapper">
    <div class="Algorithms_result">
      <div class="Statistic_In_Number">
        <h2>{{$t('results__title')}}</h2>
        <div class="Statistic_In_Number_items_wrapper">
          <div class="Statistic_In_Number_item">
            <img
              src="@/assets/Images/home_img/Bookmark.png"
              alt="bookmark"
            />
            <div class="Statistic_In_Number_itemText">
              <h2>1300+</h2>
              <p style="width:80%">
               {{$t('results__graduates')}}
              </p>
            </div>
          </div>
          <div class="Statistic_In_Number_item1">
            <img
              src="@/assets/Images/home_img/Asset.svg"
              width="137"
              height="116"
              alt=""
            />
            <div class="Statistic_In_Number_itemText">
              <h2>400 dona</h2>
              <p>
                {{$t('results__hired')}}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="Statistic_about_salary">
        <div class="info">
          <span class="bar"></span>
          <p>
           {{$t('monthbirnima')}}
          </p>
        </div>
        <div class="salary-details">
          <p class="category">Dasturlash <span>$321</span></p>
          <p class="category">Dizayn <span>$400</span></p>
        </div>
        <span class="dot"></span>
      </div>

      <div class="Algorithms_result_Latest_News">
        <button class="per-month">
          <img src="@/assets/Images/home_img/Subtract.svg" alt="" />Per month
          Hackathon’s
        </button>
        <div class="marquee_main_wrapper">
          <div class="marque_wrapper">
            <div class="Algorithms_result_Latest_News_marque">
              <button><span>Hackatonga ro‘yxatdan o‘ting!</span></button>
              <button>
                <img src="@/assets/Images/home_img/Subtract (1).svg" alt="" />
                <span>Chegirmalar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Get_in_touch">
      <!-- <CustomSelect /> -->
      <ContactForm />
    </div>
  </div>
</template>

<script>
import CustomSelect from "../Template/customSelect.vue";
import ContactForm from "../Free_consultation/Free_Consultation.vue";
export default {
  components: {
    CustomSelect,
    ContactForm,
  },
};
</script>

<style >
* {
  box-sizing: border-box;
}
.Algorithms_result_wrapper {
  width: 100%;
  height: auto;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
}
.Algorithms_result {
  width: 63%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  gap: 20px;
}
.Get_in_touch {
  width: 35%;
  height: 381px;
  background-color: #0d0d0d;
  border-radius: 10px;
}
.Statistic_In_Number {
  width: auto;
  height: 223px;
  background-color: #0d0d0d;
  border-radius: 10px;
  padding: 37px 49px;
}
.Statistic_In_Number_items_wrapper {
  display: flex;
  /* align-items: center; */
  gap: 50px;
  margin-top: 20px;
}

.Statistic_In_Number_item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}
.Statistic_In_Number_item img{
 
}
.Statistic_In_Number_item1 {
  display: flex;
}
.Statistic_In_Number_item1 .Statistic_In_Number_itemText:nth-child(2) {
  margin-top: 15px;
}

.Statistic_In_Number_itemText h2 {
  color: white;
  font-size: 36px;
  font-weight: 500;
}

.Statistic_In_Number_itemText p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-top: 5px;
}

.Statistic_In_Number > h2 {
  color: white;
  font-size: 36px;
  font-weight: 500;
}
.Statistic_In_Number span {
  color: #f8d800;
  font-size: 36px;
}
.Statistic_about_salary {
  width: auto;
  height: 70px;
  background-color: #0d0d0d;
  border-radius: 10px;
  display: flex;
  padding: 14px;
  align-items: center;
  position: relative;
  gap: 39px;
}

.Statistic_about_salary .dot {
  width: 9px;
  height: 9px;
  background-color: #ffe738;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  box-shadow: 0 0 5px #ffe738;
  animation: shining 1.5s infinite alternate;
}

@keyframes shining {
  0% {
    box-shadow: 0 0 5px #ffe738;
    opacity: 1;
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 5px #ffe738, 0 0 5px #ffe738;
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    box-shadow: 0 0 5px #ffe100, 0 0 5px #ffe738;
    opacity: 1;
    transform: scale(1.1);
  }
}
.info {
  display: flex;
  align-items: center;
}

.info p {
  font-size: 17px;
  color: white;
  font-weight: 400;
  margin-left: 31px;
}

.bar {
  width: 4px;
  height: 43px;
  background: yellow;
  margin-right: 10px;
  border-radius: 3px;
}

.salary-details {
  display: flex;
  gap: 15px;
}

.salary-details .category {
  font-size: 20px;
  color: #aaa;
}

.salary-details .category span {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

.Algorithms_result_Latest_News {
  width: auto;
  height: 47px;
  /* background-color: #0d0d0d; */
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans";
  align-items: center;
}
.marquee_main_wrapper {
  width: 65%;
  overflow: hidden;
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;
}
.marque_wrapper {
  width: 100%;
  overflow: hidden;

  background-color: rgb(0, 0, 0);
}
.Algorithms_result_Latest_News .per-month{
  font-size: 18px;
  padding: 14.5px 16px;
  background-color: #f8d800;
  border-radius: 10px;
  font-family: Nohemi;
  font-weight: 500 ;
  display: flex;
  gap: 5px;
  align-items: center;
}
.Algorithms_result_Latest_News_marque button:nth-child(2) {
  font-size: 18px;
  padding: 14.5px 16px;
  border-radius: 10px;
  background-color: #0d0d0d;
  font-weight: 500;
  display: flex;
  color: white;
  gap: 10px;
  align-items: center;
  font-family: "Nohemi";
}

.Algorithms_result_Latest_News_marque button:nth-child(1) {
  font-size: 18px;
  padding: 14.5px 16px;
  font-family: Nohemi;
  font-weight: 500;
  border-radius: 10px;
  background-color: #0d0d0d;
  display: flex;
  color: white;
  gap: 10px;
  align-items: center;
}


.Algorithms_result_Latest_News_marque {
  display: flex;
  gap: 20px;
  animation: marqueeScroll 5s linear infinite;
}

/* Fading effect on left and right sides */
.marquee_main_wrapper::before,
.marquee_main_wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.marquee_main_wrapper::before {
  left: -40px;
  background: linear-gradient(
    to right,
    rgb(0, 0, 0),
    rgb(0, 0, 0),
    rgb(0, 0, 0),
    transparent
  );
}

.marquee_main_wrapper::after {
  right: -30px;
  background: linear-gradient(to left, black, black, transparent);
}

@keyframes marqueeScroll {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(-90%);
  }
}

.Algorithms_result_Latest_News_marque {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 1324px) {
  .Algorithms_result {
    width: 100%;
  }

  .Get_in_touch {
    width: 100%;
    height: auto;
  }

  .Statistic_In_Number {
    padding: 30px;
  }

  .Statistic_In_Number_items_wrapper {
    flex-wrap: wrap;
    gap: 30px;
  }

  .Statistic_about_salary {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    height: auto;
    padding: 20px;
  }

  .salary-details {
    flex-direction: column;
    gap: 10px;
  }

  .Algorithms_result_Latest_News {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: stretch;
  }

  .Algorithms_result_Latest_News button {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}

@media (max-width: 1024px) {
  .Algorithms_result {
    width: 100%;
  }

  .Get_in_touch {
    width: 100%;
    height: auto;
  }

  .Statistic_In_Number {
    padding: 30px;
  }

  .Statistic_In_Number_items_wrapper {
    flex-wrap: wrap;
    gap: 30px;
  }

  .Statistic_about_salary {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    height: auto;
    padding: 20px;
  }

  .salary-details {
    flex-direction: column;
    gap: 10px;
  }

  .Algorithms_result_Latest_News {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: stretch;
  }

  .Algorithms_result_Latest_News button {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}

@media (max-width: 768px) {
  .Statistic_In_Number {
    padding: 20px;
  }

  .Statistic_In_Number_item,
  .Statistic_In_Number_item1 {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .Statistic_In_Number_item img,
  .Statistic_In_Number_item1 img {
    width: 50px;
    height: auto;
  }

  .Statistic_In_Number_itemText h2 {
    font-size: 30px;
  }

  .Statistic_In_Number_itemText p {
    font-size: 15px;
  }

  .Statistic_about_salary .info p {
    font-size: 15px;
  }

  .salary-details .category {
    font-size: 18px;
  }

  .Algorithms_result_Latest_News {
    gap: 5px;
  }

  .Algorithms_result_Latest_News button {
    font-size: 16px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .Statistic_In_Number {
    padding: 15px;
  }

  .Statistic_In_Number > h2 {
    font-size: 24px;
  }

  .Statistic_In_Number span {
    font-size: 24px;
  }

  .Statistic_In_Number_itemText h2 {
    font-size: 24px;
  }

  .Statistic_In_Number_itemText p {
    font-size: 14px;
  }

  .Statistic_about_salary {
    padding: 10px;
  }

  .Statistic_about_salary .info p {
    font-size: 14px;
  }

  .salary-details .category {
    font-size: 16px;
  }

  .Algorithms_result_Latest_News button {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
