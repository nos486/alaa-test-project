<template>
  <q-card style="width: 350px">
    <q-img src="~assets/alaa_card.png" height="220px">
      <div class="absolute-bottom">
        <div class="text-h4">Login</div>
        <div class="text-subtitle2">To use all the features, you must log in.</div>
      </div>
    </q-img>


    <q-card-section class="q-pt-none">
      <div class="q-pt-md">
        <q-input ref="inputMobile" v-model="loginData.mobile" label="Mobile" :rules="rules.mobile"
                 :color="$store.getters['app/mainColor']">
          <template v-slot:prepend>
            <q-icon name="phone"/>
          </template>
        </q-input>
        <q-input ref="inputPassword" v-model="loginData.password" label="Password" :rules="rules.password"
                 :type="isPasswordShow ? 'text' : 'password'"
                 :color="$store.getters['app/mainColor']">
          <template v-slot:prepend>
            <q-icon name="key"/>
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPasswordShow ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPasswordShow = !isPasswordShow"
            />
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn class="full-width" unelevated label="Login" :color="$store.getters['app/mainColor']" @click="loginBtn"/>
    </q-card-actions>
  </q-card>
</template>

<script>

export default {
  name: "Login",
  data: () => {
    return {
      loading: false,
      isPasswordShow: false,
      rules: {
        mobile: [val => !!val || 'Number is required', val => /^[0]{1}[0-9]{10}$/.test(val) || "Invalid Number (09XX YYYYYYY)"],
        password: [val => !!val || 'Password is required']
      },
      loginData: {
        mobile: "",
        password: ""
      }
    }
  },
  mounted() {
    if (this.$store.getters["userService/accessToken"] !== "") {
      this.$router.push("/profile")
    }
  },
  methods: {
    checkInputValidation() {
      return this.$refs.inputMobile.validate() && this.$refs.inputPassword.validate()
    },
    loginBtn() {
      if (this.checkInputValidation()) {
        this.login()
      } else {
        this.$q.notify('Please check the inputs.')
      }
    },
    login() {
      this.$q.loading.show()
      this.$store.dispatch("userService/login", this.loginData).then((res) => {
        this.$q.loading.hide()
        this.$router.push("/profile")
      }).catch((res) => {
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style scoped>

</style>
