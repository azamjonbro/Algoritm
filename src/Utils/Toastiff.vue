<template>
    <div v-if="toastOptions.open"></div>
  </template>
  
  <script>
  import Toastify from "toastify-js";
  import "toastify-js/src/toastify.css";
  
  export default {
    name: "ToastComponent",
    props: {
      toastOptions: {
        type: Object,
        required: true,
        default: () => ({
          open: false,
          text: "Default Toast Message",
          style: {
            background: "#4CAF50",
          },
        }),
      },
    },
    watch: {
      toastOptions: {
        handler(newVal) {
          if (newVal.open) {          
            this.showToast(newVal);
          }
        },
        deep: true,
      },
    },
    methods: {
      showToast({ text, style }) {
        Toastify({
          text,
          duration: 1000,
          close: true,
          gravity: "top",
          position: "right",
          style,
        }).showToast();
      },
    },
  };
  </script>
  
  <style></style>