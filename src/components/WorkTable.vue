<template>
  <div class="worktable-container">
    <div style="padding-top: 40px">
      <el-avatar :src="store.state.user.avatar" shape="square" :size="90"></el-avatar>
    </div>
    <div style="padding-top: 5px">
      <span> {{ store.state.user.account }} </span>
    </div>
    <div style="font-size: 12px;height: 16px;transition: all 0.3s" :style="{opacity: store.state.isRecording?1:0}">
      <span>上课中</span>
    </div>
    <div class="record-display" :class="store.state.isRecording?'recording':'not-recording'">
      <svg width="55" height="85" viewBox="0 0 55 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_18_10932" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="55" height="85">
          <path d="M55 0H0V85H55V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_18_10932)" fill="currentColor">
          <path d="M25.3694 80.6543V69.9682C11.0526 68.86 0 56.8814 0 42.4751C0 41.3038 0.946603 40.3541 2.11411 40.3541C3.28163 40.3541 4.22823 41.3038 4.22823 42.4751C4.22823 55.361 14.6398 65.8068 27.4835 65.8068C40.3271 65.8068 50.7387 55.361 50.7387 42.4751C50.7387 41.3038 51.6853 40.3541 52.8529 40.3541C54.0204 40.3541 54.967 41.3038 54.967 42.4751C54.967 56.8814 43.9143 68.86 29.5976 69.9682V80.6543H42.2823C43.4498 80.6543 44.3964 81.604 44.3964 82.7753C44.3964 83.9467 43.4498 84.8964 42.2823 84.8964H12.6847C11.5172 84.8964 10.5706 83.9467 10.5706 82.7753C10.5706 81.604 11.5172 80.6543 12.6847 80.6543H25.3694ZM27.4835 4.29596C24.1193 4.29596 20.8934 5.63716 18.514 8.02336C16.1346 10.4106 14.7988 13.6471 14.7988 17.0223V42.4751C14.7988 49.5032 20.4784 55.2015 27.4835 55.2015C34.4896 55.2015 40.1682 49.5043 40.1682 42.4751V17.0223C40.1682 9.99425 34.4885 4.29596 27.4835 4.29596ZM27.4835 0.053833C36.8246 0.053833 44.3964 7.65155 44.3964 17.0223V42.4751C44.3964 51.8459 36.8246 59.4436 27.4835 59.4436C18.1434 59.4436 10.5706 51.8459 10.5706 42.4751V17.0223C10.5706 7.65155 18.1424 0.053833 27.4835 0.053833Z"/>
        </g>
      </svg>
    </div>
    <div style="height: 20px;padding-top: 10px">
      <x-slider :value="store.state.volume"></x-slider>
    </div>
    <el-button :color="store.state.isRecording?'#EA4335':'#0FA47F'" @click="triggerRecording" style="width: 80%;height: 60px; margin-top: 40px; font-size: 15px;letter-spacing: 1px">
      {{ store.state.isRecording?'停止运行':'开始上课' }}
    </el-button>
  </div>
</template>

<script setup>
import { startRecord, stopRecord } from '@/assets/js/api'
import XSlider from '@/components/x-slider'
import store from '@/store'

const triggerRecording = () => {
  if (store.state.isRecording === false) {
    startRecord()
  } else {
    stopRecord()
  }
}
</script>
<style scoped>
.worktable-container {
  background-color: #313237;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  font-family: 'Readex Pro';
  font-weight: 400;
  font-size: 14px;
}
svg {
  display: block;
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.record-display {
  position: relative;
  width: 110px;
  height: 110px;
  margin: 30px auto 30px auto;
  transition: all 0.1s;
}
.not-recording {
  color: rgba(255, 255, 255, 50%);
}
</style>
