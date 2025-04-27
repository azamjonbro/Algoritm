<template>
  <div class="map-container">
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customIconImage from "@/assets/Images/Map pin.svg";
export default {
  name: "MapComponent",
  props: {
    initialCoords: {
      type: Object,
      default: () => ({ lat: 41.003528, lon: 71.674485 }),
    },
  },
  data() {
    return {
      map: null,
      marker: null,
      selectedAddress: "",
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      try {
        const center = [this.initialCoords.lat, this.initialCoords.lon];
        const zoom = 15;

        this.map = L.map(this.$refs.map, {
          scrollWheelZoom: true,
        }).setView(center, zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        const customIcon = L.icon({
          iconUrl: customIconImage,
          iconSize: [40, 60],
          iconAnchor: [20, 60],
        });

        this.marker = L.marker(center, { icon: customIcon }).addTo(this.map);

        // this.map.on("click", this.handleMapClick);
        this.map.on("zoomend", this.handleMapZoom);
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    },
    // handleMapClick(e) {
    //   try {
    //     if (e && e.latlng) {
    //       const { lat, lng } = e.latlng;
    //       this.marker.setLatLng(e.latlng);

    //       this.fetchAddress(lat, lng);

    //       this.$emit("updateCoordinates", {
    //         lat: lat.toFixed(6),
    //         lon: lng.toFixed(6),
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Error handling map click event:", error);
    //   }
    // },
    handleMapZoom() {
      const zoomEnabled = this.map.getZoom() <= 12;
      this.map.scrollWheelZoom[zoomEnabled ? "disable" : "enable"]();
    },
    fetchAddress(lat, lng) {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.display_name) {
            const address = data.display_name;
            this.selectedAddress = address;
            this.$emit("address", address);
          } else {
            this.selectedAddress = `(${lat.toFixed(6)}, ${lng.toFixed(6)})`;
          }
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
          this.selectedAddress = `(${lat.toFixed(6)}, ${lng.toFixed(6)})`;
        });
    },
  },
  watch: {
    initialCoords: {
      handler(newCoords) {
        const newCenter = [newCoords.lat, newCoords.lon];
        this.map.setView(newCenter);
        this.marker.setLatLng(newCenter);
        this.fetchAddress(newCoords.lat, newCoords.lon);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.map-container {
  padding: 12px 0px;
}

#map {
  min-height: 381px;
  width: 100%;
  margin: 0px auto 24px;
  border-radius: 12px;
  outline: none;
  position: relative;
  z-index: 2;
}
.leaflet-marker-icon {
  background: none !important;
}
</style>
