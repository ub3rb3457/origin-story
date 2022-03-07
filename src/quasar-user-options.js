
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
    brand: {
      primary: "#b80000",
      secondary: "#f0d551",
      accent: "#ff0303",

      dark: "#2e2e2e",

      positive: "#00a100",
      negative: "#ff0000",
      info: "#3280ed",
      warning: "#ffa629"
    },
    loading: {
      color: "primary"
    }  
  },
  plugins: ["Dialog", "Notify", "Loading", "LocalStorage", "SessionStorage"],
}