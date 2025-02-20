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
  