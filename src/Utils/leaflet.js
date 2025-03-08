// Leaflet kutubxonasi uchun kerakli kodlar
const L = {
    map: function (id) {
      return new Map(id);
    },
    tileLayer: function (url, options) {
      return new TileLayer(url, options);
    },
    marker: function (latlng, options) {
      return new Marker(latlng, options);
    },
    icon: function (options) {
      return new Icon(options);
    },
  };
  
  // Harita classi
  class Map {
    constructor(id) {
      this.mapElement = document.getElementById(id);
      this.center = [0, 0];
      this.zoom = 0;
      this.layers = [];
    }
    setView(center, zoom) {
      this.center = center;
      this.zoom = zoom;
      // Haritani render qilish uchun setTimeoutdan foydalanamiz
      setTimeout(() => {
        this.render();
      }, 0);
      return this;
    }
    addLayer(layer) {
      this.layers.push(layer);
      layer.addTo(this);
      return this;
    }
    on(event, callback) {
      if (event === "click") {
        this.mapElement.addEventListener("click", (e) => {
          const rect = this.mapElement.getBoundingClientRect();
          const lat = this.center[0] + (e.clientY - rect.top) / 1000;
          const lng = this.center[1] + (e.clientX - rect.left) / 1000;
          callback({ latlng: { lat, lng } });
        });
      }
      return this;
    }
    render() {
      this.mapElement.innerHTML = `<div>Map centered at ${this.center} with zoom level ${this.zoom}</div>`;
    }
  }
  
  // TileLayer classi
  class TileLayer {
    constructor(url, options) {
      this.url = url;
      this.options = options;
    }
    addTo(map) {
      map.mapElement.innerHTML += `<div>TileLayer added with URL ${this.url}</div>`;
    }
  }
  
  // Marker classi
  class Marker {
    constructor(latlng, options) {
      this.latlng = latlng;
      this.options = options;
    }
    addTo(map) {
      map.mapElement.innerHTML += `<div>Marker added at ${this.latlng.lat}, ${this.latlng.lng}</div>`;
    }
  }
  
  // Icon classi
  class Icon {
    constructor(options) {
      this.options = options;
    }
  }
  