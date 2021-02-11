import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

//mock数据
// const mock = true;
// if(mock){
//   require('./mock/api');
// }

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

axios.interceptors.response.use((response) => {
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
   render: h => h(App),
}).$mount('#app')
