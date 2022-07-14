import Vue from 'vue'
import axios from 'axios'
import {Notify} from 'quasar'


export default ({Vue, store, route, app}) => {
  axios.defaults.withCredentials = false;
  axios.interceptors.request.use((config) => {
    config.baseURL = 'https://alaatv.com/api/v2/'
    if (store.getters["userService/accessToken"] !== "") {
      config.headers["Authorization"] = `Bearer ${store.getters["userService/accessToken"]}`
    }
    return config
  })

  axios.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if ((error.request.config === undefined || error.request.config.alert) && error.response && error.response.data) {
      if (error.response.status === 401) {
        store.dispatch("userService/logout")
        app.router.push("/login")
      } else {
        if (error.config.alert !== false || error.config.alert === undefined) {
          Object.keys(error.response.data.errors).forEach(function (key) {
            Notify.create({
              message: error.response.data.message,
              caption: error.response.data.errors[key],
              color: 'red',
            })
          });
        }
        return Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error);
  })

  Vue.prototype.$axios = axios
}

export {axios}
