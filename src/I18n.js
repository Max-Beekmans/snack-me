import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locale/en_us_locale';
import nl from '@/locale/nl_nl_locale';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'nl',
    fallbackLocale: 'en',
    messages: {
        en, nl
    }
});