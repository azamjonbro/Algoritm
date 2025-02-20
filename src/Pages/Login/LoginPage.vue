<template>
    <div class="Login d-flex j-center a-center">
      <div class="login-container p-24">
        <h2>
          <svg width="487" height="39" viewBox="0 0 487 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.08 32.536C37.9387 32.536 39.368 30.9147 39.368 27.672C39.368 24.4293 37.9387 22.808 35.08 22.808H34.504V16.408C38.2587 16.408 41.096 17.1547 43.016 18.648C44.936 20.1413 45.896 22.488 45.896 25.688V29.464C45.896 32.664 45 35.0533 43.208 36.632C41.416 38.2107 38.5787 39 34.696 39H0.648V32.536H35.08ZM11.464 6.68C8.60533 6.68 7.176 8.30133 7.176 11.544C7.176 14.7867 8.60533 16.408 11.464 16.408H12.04V22.808C4.44533 22.808 0.648 19.7147 0.648 13.528V9.752C0.648 3.39467 4.40267 0.216 11.912 0.216H45.896V6.68H11.464ZM80.1545 11.992H86.6185V39H80.1545V11.992ZM105.882 11.416C105.882 9.92267 105.37 8.77067 104.347 7.96C103.365 7.10667 102.213 6.68 100.891 6.68H60.9545V39H54.4905V0.216H100.379C104.005 0.216 106.885 1.09067 109.019 2.84C111.195 4.58933 112.283 6.95733 112.283 9.944V39H105.882V11.416ZM160.769 32.6L145.665 8.28H145.537L130.369 32.6H160.769ZM152.321 6.68L172.289 39H118.977L138.881 6.68C140.161 4.58933 141.398 2.98933 142.593 1.88C143.788 0.770665 144.577 0.216 144.961 0.216H146.241C146.497 0.216 146.796 0.301332 147.137 0.471996C147.478 0.642663 147.884 0.983997 148.353 1.496C148.822 1.96533 149.377 2.62666 150.017 3.48C150.7 4.29067 151.468 5.35733 152.321 6.68ZM210.729 6.68H176.425V0.216H210.537C212.415 0.216 214.057 0.471999 215.465 0.983997C216.873 1.496 218.025 2.2 218.921 3.096C219.86 3.94933 220.564 4.97333 221.033 6.168C221.503 7.36267 221.737 8.62133 221.737 9.944V13.208C221.737 14.4453 221.503 15.64 221.033 16.792C220.564 17.944 219.86 18.968 218.921 19.864C218.025 20.76 216.873 21.4853 215.465 22.04C214.057 22.5947 212.415 22.872 210.537 22.872H190.121L221.737 39H208.041L176.425 22.936V16.472H210.729C212.137 16.472 213.247 16.0453 214.057 15.192C214.868 14.3387 215.273 13.1013 215.273 11.48C215.273 9.85867 214.868 8.664 214.057 7.896C213.247 7.08533 212.137 6.68 210.729 6.68ZM230.455 0.216H275.703V6.68H256.311V39H249.847V6.68H230.455V0.216ZM327.292 27.8C327.335 29.2933 327.804 30.4667 328.7 31.32C329.639 32.1307 330.769 32.536 332.092 32.536H366.076V39H332.732C329.105 39 326.204 38.1253 324.028 36.376C321.895 34.6267 320.828 32.2587 320.828 29.272V9.944C320.828 6.95733 321.895 4.58933 324.028 2.84C326.204 1.09067 329.105 0.216 332.732 0.216H366.076V9.944H359.612V6.68H332.092C330.769 6.68 329.639 7.10667 328.7 7.96C327.761 8.77067 327.292 9.92267 327.292 11.416V27.8ZM408.974 6.68H374.67V0.216H408.782C410.66 0.216 412.302 0.471999 413.71 0.983997C415.118 1.496 416.27 2.2 417.166 3.096C418.105 3.94933 418.809 4.97333 419.278 6.168C419.748 7.36267 419.982 8.62133 419.982 9.944V13.208C419.982 14.4453 419.748 15.64 419.278 16.792C418.809 17.944 418.105 18.968 417.166 19.864C416.27 20.76 415.118 21.4853 413.71 22.04C412.302 22.5947 410.66 22.872 408.782 22.872H388.366L419.982 39H406.286L374.67 22.936V16.472H408.974C410.382 16.472 411.492 16.0453 412.302 15.192C413.113 14.3387 413.518 13.1013 413.518 11.48C413.518 9.85867 413.113 8.664 412.302 7.896C411.492 7.08533 410.382 6.68 408.974 6.68ZM454.364 11.992H460.828V39H454.364V11.992ZM480.092 11.416C480.092 9.92267 479.58 8.77067 478.556 7.96C477.575 7.10667 476.423 6.68 475.1 6.68H435.164V39H428.7V0.216H474.588C478.215 0.216 481.095 1.09067 483.228 2.84C485.404 4.58933 486.492 6.95733 486.492 9.944V39H480.092V11.416Z"
              fill="white" />
          </svg>
        </h2>
        <form @submit.prevent="submitForm">
          <label for="login">Login</label>
          <input v-model="login" id="login" type="text" placeholder="Login" required minlength="4" maxlength="16" />
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Password" required minlength="5"
            maxlength="20" />
          <button type="submit" class="login-button">Log In</button>
        </form>
      </div>
      <ToastComponent :toastOptions="toastOptions" />
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: "LoginPage",
    
    data() {
      return {
        login: "",
        password: "",
        toastOptions: {
          open: false,
          text: "",
          backgroundColor: "#4CAF50",
        },
      };
    },
    methods: {
      async submitForm() {
  
        await ipcRenderer.invoke(eventNames.loginEvent, {
          login: this.login,
          password: this.password,
        })
          .then((res) => {
            if (res.status == 200) {
              const token = res.args._id;
              localStorage.setItem("token", token);
              this.toastOptions = {
                open: true,
                text: "Success! Welcome Admin!",
                style: { background: "#4CAF50" },
              };
              setTimeout(() => {
                this.$router.push("/home");
              }, 1000);
            }
            else {
              this.toastOptions = {
                open: true,
                text: "Ошибка логина или пароля",
                style: { background: "#FF0000" },
              };
            }
            if(res.status==401){
              sendErrorToTelegram({name:"Login :User not found",message:"Login parolni hato kiritmoqda" })
            }
            if(res.status==500){
              sendErrorToTelegram({name:"Login: Internal server error",message:"Code hatolik. Login pagedagi hatolik" })
            }
          })
          .catch((err)=>{
            sendErrorToTelegram({name:"Login: Catchga tushgan hato",message:err?.message })
          })
      },
    },
    
  };
  </script>
  
  <style scoped>
  .Login {
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    background: rgb(20, 14, 134);
    background: linear-gradient(36deg,
        rgba(20, 14, 134, 1) 0%,
        rgba(8, 2, 71, 1) 48%,
        rgba(25, 25, 94, 1) 72%);
  }
  
  .login-container {
    min-width: 40%;
    height: 90%;
    background: rgba(3, 3, 66, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 24px;
    margin-right: 48px;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  .login-container>h2 {
    font-size: 36px;
    display: flex;
    justify-content: center;
    color: #fff;
  }
  
  .login-text {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
  }
  
  form {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  label {
    font-size: 14px;
    margin-bottom: 8px;
    color: #eee;
  }
  
  input {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 16px;
    background: rgba(255, 255, 255, 0.36);
    color: #fff;
    border-radius: 4px;
    width: 100%;
  }
  
  input::placeholder {
    color: #fff;
  }
  
  .login-button {
    margin-top: 64px;
    padding: 12px;
    font-size: 16px;
    color: white;
    background-color: #3015c9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #210c99;
  }
  </style>