import lang from '@/lang/lang.json'; 

class I18n {
    constructor(defaultLocale = 'en') {
        this.defaultLocale = defaultLocale;
        this.locale = defaultLocale;
        this.messages = this.flattenMessages(lang);
    }

    setLocale(locale) {
        if (this.messages[locale]) {
            this.locale = locale;
        } else {
            this.locale = this.defaultLocale;
        }
        localStorage.setItem('lang', JSON.stringify(this.locale)); // set ham stringify
    }

    t(key) {
      let message = this.messages[this.locale];
      
      if (!message) {
        console.warn(`Til topilmadi: ${this.locale}, defaultga o'tiladi`);
        message = this.messages[this.defaultLocale];
      }
  
      if (message && message[key]) {
          return message[key];
      } else {
          console.warn(`Kalit topilmadi: ${key}`);
          return key; 
      }
    }

    flattenMessages(nestedMessages) {
        const result = {};

        Object.keys(nestedMessages).forEach(key => {
            Object.keys(nestedMessages[key]).forEach(locale => {
                if (!result[locale]) {
                    result[locale] = {};
                }
                result[locale][key] = nestedMessages[key][locale];
            });
        });

        return result;
    }
}

// localStorage'dan olishda parse qilish kerak
const storedLang = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : 'en';

const i18n = new I18n(storedLang);

export default i18n;
