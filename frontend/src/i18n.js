import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal i18n setup to prevent runtime warnings and enable basic labels
const resources = {
  en: {
    translation: {
      About: 'About',
      Work: 'Work',
      Offices: 'Offices',
      Careers: 'Careers',
      Contact: 'Contact',
      Blog: 'Blog',
    },
  },
  de: {
    translation: {
      About: 'Über uns',
      Work: 'Arbeiten',
      Offices: 'Büros',
      Careers: 'Karriere',
      Contact: 'Kontakt',
      Blog: 'Blog',
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: typeof window !== 'undefined' ? (localStorage.getItem('lang') || 'en') : 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      returnNull: false,
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.warn('i18n init failed', err);
    });
}

export default i18n;