import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from  'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n

    // Charger les traductions en utilisant http pour consulter /public/locales
    .use(Backend)
    //dtetecte le langage par défaut de l'appareil
    .use(LanguageDetector)
    //passer i18n  element to react-i18next
    .use(initReactI18next)
    //Initialiser i18next
    .init({
        fallbackLng: 'fr',
        debug: true,

        interpolation:{
            escapeValue:false
        }
    })

    export  default i18n