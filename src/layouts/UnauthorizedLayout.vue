<template>
  <q-layout view="hHh LpR fFf" >
    <q-header :class="`bg-${$store.getters['app/mainColor']}`">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex items-center">
            <q-img src="~assets/alaa.png" height="40px" width="40px"></q-img>
          </div>
        </q-toolbar-title>
        <div>{{ $store.getters["app/appName"] }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  mounted() {
  }
}
</script>
