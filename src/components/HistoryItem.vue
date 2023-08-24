<template>
<div class="history-item">
  <div style="min-width: 30px;color: #4C4C4C">{{ '#'+props.index }}</div>
  <div style="min-width: 150px;color: #FF7A7A">{{ getTypeName(props.data.type) }}</div>
  <div style="min-width: 150px">{{ props.data.date }}</div>
  <div style="width: 60px;max-width: 60px;display: flex">
    <div class="history">
      <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 0.671573 0.671573 0 1.5 0H14.5C15.3284 0 16 0.671573 16 1.5V7.87195H14V2H2V18H7.64209V20H1.5C0.671573 20 0 19.3284 0 18.5V1.5ZM12 4.61536H4V6.61536H12V4.61536ZM4 13.8461H9V15.8461H4V13.8461ZM12 9.23077H4V11.2308H12V9.23077Z" fill="currentColor"/>
        <path d="M21.7714 10.0336L13.3311 18.729L10.126 19.6151L11.0341 16.2921L19.4209 7.59668" stroke="currentColor" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.985 10.5322L22.359 10.1445C23.2137 9.25835 23.2137 7.81835 22.359 6.93219C21.5043 6.04604 20.1154 6.04604 19.2607 6.93219L18.8867 7.31989L21.985 10.5322Z" fill="currentColor"/>
        <path d="M11.0877 16.2368L13.4382 18.6184L10.3398 19.3937L11.0877 16.2368Z" fill="currentColor"/>
      </svg>
    </div>
    <div class="history">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 9.63397C16.1667 10.0189 16.1667 10.9811 15.5 11.366L8.75 15.2631C8.08333 15.648 7.25 15.1669 7.25 14.3971L7.25 6.60289C7.25 5.83308 8.08333 5.35196 8.75 5.73686L15.5 9.63397Z" fill="currentColor"/>
        <circle cx="10.5" cy="10.5" r="10" stroke="currentColor"/>
      </svg>
    </div>
  </div>
</div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  index: Number,
  data: Object
})
const getTypeName = (id) => {
  // if (id === 1) {
  //   return '疑似不良用语'
  // } else if (id === 2) {
  //   return '疑似迷惑发言'
  // } else {
  //   return '疑似地方方言'
  // }
  return id
}
</script>

<style scoped>
.history-item {
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  font-size: 11px;
  text-align: left;
  border-top: #404040 1px solid;
  line-height: 35px;
  justify-content: space-between;
}
svg {
  width: 15px;
  height: 15px;
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.history {
  color: rgb(216, 216, 216);
  position: relative;
  min-width: 30px;
  transition: all 0.1s;
}
.history:hover {
  color: #0FA47F;
}
</style>
