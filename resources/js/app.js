import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import StoreWidget from "./components/StoreWidget.vue";

require('./bootstrap');
const app = createApp(App);
app.component('storewidget',StoreWidget);
app.use(router);
app.mount("#app-vue");
