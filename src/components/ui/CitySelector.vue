<template>
  <div>
    <Selector v-model="selectedProvince" label="Province" icon="flag" :color="color" name="provinces"
              option-label="title"></Selector>
    <Selector v-if="selectedProvince !== null" v-model="selectedCity" label="City" icon="maps_home_work" :color="color"
              name="cities" option-label="title" :external-options="cities"></Selector>

  </div>
</template>

<script>
import Selector from "components/ui/Selector";

export default {
  name: "CitySelector",
  components: {Selector},
  props: {
    value: {
      default: null
    },
    color: {
      default: "blue"
    },
    disable: {
      default: false
    }
  },
  data: () => {
    return {
      selectedProvince: null,
      selectedCity: null,
      cities: []
    }
  },
  computed: {
    userFormData: function () {
      return this.$store.getters['userService/userFormData']
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function () {
        if (this.value !== null) {
          this.selectedCity = this.value
        }
      }
    },
    userFormData: {
      deep: true,
      handler: function () {
        if(this.selectedCity !== null && this.selectedProvince === null){
          this.getProvince()
        }
      }
    },
    selectedProvince: {
      deep:true,
      handler: function (newProvince,oldProvince) {
        if(oldProvince !== null) this.selectedCity = ""
        this.cities = this.$store.getters["userService/userFormData"]["cities"].filter((city)=>{
          return city.province.id === this.selectedProvince
        })
      }
    },
    selectedCity: function () {
        this.$emit('input', this.selectedCity)
    }
  },
  methods: {
    getProvince() {
      let city = this.$store.getters["userService/userFormData"]["cities"].filter((city)=>{
        return city.id === this.selectedCity
      })

      this.selectedProvince = city[0].province.id
    }
  }
}
</script>

<style scoped>

</style>
