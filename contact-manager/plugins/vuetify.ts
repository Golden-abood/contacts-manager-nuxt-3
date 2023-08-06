// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "MAIN_THEME",
      themes: { MAIN_THEME },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    }
  });
  nuxtApp.vueApp.use(vuetify);
});
