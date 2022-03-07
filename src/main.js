import { createApp } from "vue";
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import App from "./App.vue";
import quasarUserOptions from './quasar-user-options'
import router from './router'
import { QCalendar } from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/index.sass'

const app = createApp(App)

app.use(Quasar, quasarUserOptions)
app.use(createPinia())
app.use(router)
app.use(QCalendar)

app.mount("#app");
