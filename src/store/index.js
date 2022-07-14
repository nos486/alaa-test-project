import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './app'
import userServiceModule from './services/user'

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      app: appModule,
      userService: userServiceModule
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
