<template>
  <q-layout view="hHh LpR fFf">
    <q-header :class="`bg-${$store.getters['app/mainColor']}`">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex items-center">
            <q-btn flat @click="drawer = !drawer" round dense icon="menu"/>
            <div class="q-ml-sm">{{ $route.name }}</div>
          </div>

        </q-toolbar-title>
        <LogoutBtn></LogoutBtn>
      </q-toolbar>
    </q-header>

    <NavDrawer v-model="drawer"></NavDrawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>


import LogoutBtn from "components/LogoutBtn";
import NavDrawer from "components/NavDrawer";

export default {
  name: 'UnauthorizedLayout',
  components: {
    NavDrawer,
    LogoutBtn
  },
  data() {
    return {
      drawer: true,
    }
  },
  mounted() {

  },

}
</script>
