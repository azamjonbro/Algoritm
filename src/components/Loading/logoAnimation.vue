<template>
    <div class="animation-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="126" class="pencil" height="118" viewBox="0 0 126 118" fill="none">
            <path d="M100.669 73.5788L86.7038 104.662L70.2334 117.787V98.8579L90.4525 55.2049L59.7573 0L20.4975 77.522L40.3547 77.7441L59.7573 40.8668L68.0714 54.6958L46.5161 98.8579H9.68737L0 118H69.9643H70.2334H125.37L100.669 73.5788Z" fill="white"/>
            <path d="M71.7922 106.911V114.529L77.703 109.901C77.703 109.901 73.5831 110.151 71.7922 106.911Z" fill="white"/>
            <path d="M74.892 99.3854L75.5508 99.6816C75.7994 99.8012 76.0695 99.8699 76.3451 99.8837C76.6208 99.8975 76.8964 99.8562 77.1558 99.7622C77.4152 99.6682 77.6531 99.5234 77.8555 99.3363C78.058 99.1492 78.2208 98.9235 78.3345 98.6727L94.9441 62.9432L92.0305 57.6948L73.8899 96.6363C73.6612 97.134 73.6381 97.7014 73.8257 98.2159C74.0132 98.7304 74.3963 99.1506 74.892 99.3854Z" fill="white"/>
            <path d="M81.1824 103.032L81.8319 103.338C82.0806 103.457 82.3506 103.526 82.6263 103.54C82.9019 103.554 83.1775 103.512 83.4369 103.418C83.6963 103.324 83.9342 103.18 84.1366 102.993C84.3391 102.805 84.502 102.58 84.6157 102.329L99.2859 70.7555L96.363 65.4979L80.171 100.293C80.057 100.539 79.9927 100.805 79.9819 101.076C79.971 101.347 80.0138 101.617 80.1077 101.872C80.2016 102.126 80.3449 102.359 80.5293 102.559C80.7137 102.758 80.9356 102.919 81.1824 103.032Z" fill="white"/>
            </svg>
      <div class="loading-bar">
        <div class="fill"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PencilAnimation'
  }
  </script>
  
  <style scoped>
  .animation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: black;
    position: relative;
  }
  .pencil path {
    animation: colorChange 3s forwards;
  }
  .loading-bar {
    width: 200px;
    height: 5px;
    background: grey;
    position: absolute;
    bottom: 20px;
    overflow: hidden;
  }
  .fill {
    height: 1%;
    width: 0;
    background: yellow;
    animation: fillBar 3s forwards;
  }
  @keyframes colorChange {
    from { fill: white; }
    to { fill: yellow; }
  }
  @keyframes fillBar {
    from { width: 0; }
    to { width: 100%; }
  }
  </style>
  