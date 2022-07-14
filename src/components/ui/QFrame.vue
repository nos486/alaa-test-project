<template>
  <q-card style="width: 100%">
    <q-card-section>
      <div class="flex justify-between items-center">
        <div class="text-h6">{{ title }}</div>
        <q-icon :name="icon" size="28px" :color="color"></q-icon>
      </div>

    </q-card-section>

    <q-separator/>

    <q-card-section class="q-pa-lg">
      <slot></slot>
    </q-card-section>

    <q-card-actions class="text-primary">
      <slot name="action"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "QFrame",
  props: {
    title: {
      default: "Frame"
    },
    icon: {
      default: "home"
    },
    color: {
      default: "blue"
    },
    disable: {
      default: false
    }
  },
}
</script>

<style scoped>

</style>
