<template>
  <div>
    <q-select v-model="selected" :options="(externalOptions!= null) ? externalOptions : options" :label="label" :color="color" :disable="disable" :option-value="optionValue" map-options
              :option-label="optionLabel">
      <template v-slot:prepend>
        <q-icon :name="icon"/>
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  name: "Selector",
  props: {
    value: {
      default: null
    },
    name: {
      default: ""
    },
    optionValue: {
      default: "id"
    },
    optionLabel: {
      default: "name"
    },
    externalOptions : {
      default: null
    },
    label: {
      default: ""
    },
    color: {
      default: "blue"
    },
    icon: {
      default: "icon"
    },
    disable: {
      default: false
    }
  },
  data: () => {
    return {
      selected: null,
      options: []
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
        if(this.value !== null){
          this.selected = this.value
        }
      }
    },
    userFormData: {
      deep: true,
      immediate: true,
      handler: function () {
        if (this.userFormData[this.name] !== undefined) {
          this.options = this.userFormData[this.name]
        }
      }
    },
    selected: function () {
      if (this.selected[this.optionValue] !== undefined ){
        this.$emit('input', this.selected[this.optionValue])
      }

    }
  },
  methods :{
      update(d){
        console.log(d)
      }
  }
}
</script>

<style scoped>

</style>
