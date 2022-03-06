import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'

const myApp = createApp(App)
myApp.use(router)
myApp.use(Quasar, quasarUserOptions).mount("#app");
