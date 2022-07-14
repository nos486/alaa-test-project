<template>
  <q-drawer v-model="drawer" show-if-above :width="260" :breakpoint="500">
    <q-scroll-area class="fit" :class="`bg-grey-3`" >
      <q-list padding>
        <q-item v-for="(item,index) in drawerItems" :key="index" clickable v-ripple :active="$route.name === item.title" :active-class="`text-${$store.getters['app/mainColor']}`" @click="$router.push(item.path).catch(()=>{})">
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>
            {{ item.title }}
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>

export default {
  name: "NavDrawer",
  props: {
    value : {
      default : true
    }
  },
  data() {
    return {
      drawer : true,
      drawerItems : [
        {
          title : "Home",
          icon : "home",
          path : "/home",
          isEnable : false
        },
        {
          title : "Profile",
          icon : "account_circle",
          path : "/profile"
        }
      ]
    }
  },
  watch : {
    value : {
      handler : function () {
        this.drawer = this.value
      }
    },
    drawer : {
      handler : function (newValue) {
        this.$emit("input",newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>
