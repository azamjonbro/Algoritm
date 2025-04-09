import langData from "@/lang.json";

// Joriy til (localStorage yoki default: 'uz')
let currentLang = localStorage.getItem("lang") || "uz";

// Tilni o'zgartirish funksiyasi
export function setLang(lang) {
  if (langData["hero__title"][lang]) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
  } else {
    console.warn(`Til topilmadi: ${lang}`);
  }
}

// Tarjima olish funksiyasi
export function t(key) {
  const item = langData[key];
  if (!item) {
    console.warn(`Kalit topilmadi: ${key}`);
    return key;
  }
  return item[currentLang] || item["uz"] || key;
}
