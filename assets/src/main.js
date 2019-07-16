import App from './components/App.js';
import store from './store/store.js';
import zdClient from './libs/ZDClient.js';
import i18n from './i18n/index.js';

const Main = {
  init() {
    zdClient.init();
    zdClient.events['ON_APP_REGISTERED'](this.initVueApp);
  },

  async initVueApp(data) {
    Vue.use(i18n);

    new Vue({
      el: '#app',
      store,
      render: (h) => h(App),
    });
  }
};

export default Main.init();