<template>
  <q-btn flat @click="logout" round dense icon="logout"/>
</template>
<script>
export default {
  name: 'LogoutBtn',
  methods: {
    logout() {
      this.$store.dispatch("userService/logout")
      this.$router.push("/login")
    }
  }
}
</script>
