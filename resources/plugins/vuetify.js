// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const opts ={
    theme: {
        themes: {
            light: {
                primary: colors.green,
                secondary: colors.red,
                tertiary: colors.purple
            },
            dark: {
                primary: colors.green.darken2,
                secondary: colors.red.darken2,
                tertiary: colors.amber
            }
        }
    }
};

export default new Vuetify(opts);
