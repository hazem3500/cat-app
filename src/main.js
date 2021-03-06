import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "./registerServiceWorker";
import MugenScroll from "vue-mugen-scroll";
import vSelect from "vue-select";
import Toasted from "vue-toasted";
const VueUploadComponent = require("vue-upload-component");

Vue.config.productionTip = false;

Vue.component("vue-mugen-scroll", MugenScroll);
Vue.component("v-select", vSelect);
Vue.use(Toasted);
Vue.component("file-upload", VueUploadComponent);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
