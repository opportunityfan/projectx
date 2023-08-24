<template>
<div style="width: 100%; height: auto;text-align: left">
  <div style="color: #C0C0C0; font-size: 10px">{{ props.title }}</div>
  <div style="color: #FFFFFF; font-size: 12px;margin-bottom: 12px">
    <slot></slot>
  </div>
</div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  title: String
})
</script>

<style scoped>

</style>
