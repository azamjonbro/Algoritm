import langData from "@/lang/lang.json";

let currentLang = localStorage.getItem("lang") || "uz";

export function setLang(lang) {
  if (langData["hero__title"][lang]) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
  } else {
    console.warn(`Til topilmadi: ${lang}`);
  }
}

export function t(key) {
  const item = langData[key];
  if (!item) {
    console.warn(`Kalit topilmadi: ${key}`);
    return key;
  }
  return item[currentLang] || item["uz"] || key;
}
