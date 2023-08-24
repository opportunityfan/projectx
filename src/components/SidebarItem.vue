<template>
  <div class="sidebar-item" :style="{width: props.isCollapse?'40px':'200px'}">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="appendix">
      <slot name="appendix"></slot>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  isCollapse: Boolean
})
</script>

<style scoped>
.sidebar-item {
  text-align: center;
  color: #ffffff;
  transition: all 0.1s;
  overflow: hidden;
  white-space: nowrap;
}
.sidebar-item:hover {
  color: #0FA47F;
}
.icon {
  text-align: center;
  display: inline-block;
  width: 40px;
}
.appendix {
  width: 160px;
  transition: all 0.1s;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  color: #9E9E9E;
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  padding-left: 20px;
}
.sidebar-item:hover .appendix {
  color: #0FA47F;
}
</style>
