import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// import { FirebaseApp } from './firebaseConfing'

const app = createApp(App)
app.use(router)
app.mount('#app')

import "./assets/sccs/main.scss"
 