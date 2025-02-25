import { createApp } from "vue";
import { Quasar } from 'quasar'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from "./App.vue";
import quasarUserOptions from './quasar-user-options'
import router from './router'
import { QCalendar } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/index.sass'


const i18n = createI18n({
    legacy: false,
    locale: 'en',
    
})
const app = createApp(App)
app.use(i18n)
app.use(Quasar, quasarUserOptions)
app.use(createPinia())
app.use(router)
app.use(QCalendar)

app.mount("#app");
