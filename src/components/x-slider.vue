<template>
  <div class="slider-div">
    <div class="slider-button" :style="{left: props.value+'%'}">
      <div class="slider-outer-button"></div>
      <div class="slider-inner-button"></div>
      <div class="slider-tooltip">
        <div class="bubble">{{ props.value }}</div>
        <div class="tip">
          <svg width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.7442 5.98267L0.351562 0L9.00195 3L17.6516 0L10.2607 5.98254C9.527 6.57642 8.47796 6.57648 7.7442 5.98267Z" fill="#1E293B"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="slider-background">
      <div class="covered" :style="{width: props.value+'%'}"></div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  value: Number
})
</script>

<style scoped>
.slider-div {
  position: relative;
  box-sizing: border-box;
  margin: auto;
  width: 70%;
  height: 100%
}
.slider-background {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #334155;
  top: 50%;
  transform: translate(0, -50%);
}
.covered {
  height: 100%;
  background-color: #34D399;
}
.slider-button {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.slider-outer-button {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background-color: #34D399;
  opacity: 0.12;
}
.slider-inner-button {
  border-radius: 999px;
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #34D399;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.slider-tooltip {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 26px;
  left: 50%;
  transform: translate(-50%, -100%);
}
.bubble {
  width: 20px;
  height: 22px;
  background: #1E293B;
  border-radius: 20px;
  font-size: 10px;
  line-height: 22px;
}
.tip {
  transform: translate(0, -11px);
}
</style>
