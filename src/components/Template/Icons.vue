<template>
    <div v-html="getIcon(name)" style="cursor: pointer; display:flex; align-items:center" v-if="iconExists"></div>
  </template>
  
  <script>
  export default {
    name: "IconComponent",
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        icons: {
            mashetgaiconqoying:`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M17.3706 2.41284H9.51165C5.58216 2.41284 4.60498 3.46279 4.60498 7.65216V19.3575C4.60498 22.1227 6.12272 22.7776 7.96272 20.8024L7.97312 20.7921C8.82555 19.8876 10.125 19.9604 10.8631 20.948L11.913 22.3514C12.755 23.4637 14.1168 23.4637 14.9589 22.3514L16.0088 20.948C16.7573 19.95 18.0567 19.8772 18.9092 20.7921C20.7596 22.7672 22.2669 22.1123 22.2669 19.3471V7.65216C22.2773 3.46279 21.3001 2.41284 17.3706 2.41284ZM17.2459 15.4384C17.09 15.5943 16.8924 15.6671 16.6949 15.6671C16.4974 15.6671 16.2999 15.5943 16.144 15.4384L15.3747 14.6691C14.7718 15.0641 14.0441 15.3032 13.2644 15.3032C11.1437 15.3032 9.41809 13.5776 9.41809 11.4569C9.41809 9.33623 11.1333 7.61058 13.2644 7.61058C15.3955 7.61058 17.1107 9.33623 17.1107 11.4569C17.1107 12.2366 16.8716 12.9643 16.4766 13.5672L17.2459 14.3365C17.5474 14.6379 17.5474 15.1369 17.2459 15.4384Z" fill="white" fill-opacity="0.2"/>
            </svg>`,
            videoplayer:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6667 25V15C36.6667 6.66671 33.3333 3.33337 25 3.33337H15C6.66666 3.33337 3.33333 6.66671 3.33333 15V25C3.33333 33.3334 6.66666 36.6667 15 36.6667H25C33.3333 36.6667 36.6667 33.3334 36.6667 25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.2 11.85H35.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.2 3.51672V11.6167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.8 3.51672V10.8667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.25 24.0833V22.0833C16.25 19.5167 18.0667 18.4667 20.2833 19.75L22.0167 20.75L23.75 21.75C25.9667 23.0333 25.9667 25.1333 23.75 26.4167L22.0167 27.4167L20.2833 28.4167C18.0667 29.7 16.25 28.65 16.25 26.0833V24.0833V24.0833Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            coursedefimg:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
          },
      };
    },
    computed: {
      iconExists() {
        return !!this.icons[this.name];
      },
    },
    methods: {
      getIcon(name) {
        return this.icons[name] || `<span>Icon not found</span>`;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  