<template>
<div class="report-container">
  <div class="report-header">
    <div style="width: 100px">
      <div class="remind-point" :style="{opacity: status.isCollapse?1:0}"></div>
      <div style="font-size: 14px;position: absolute;left: 36px"><span>课堂情况</span></div>
    </div>
    <div class="button" @click="triggerCollapse" :style="{transform: status.isCollapse?'':'rotate(180deg)'}">
      <svg width="56" height="13" viewBox="0 0 56 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55 12L28 0.999999L1 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div class="report-main" :style="{height: status.isCollapse?'0':'220px'}">
    <div style="display: flex;flex-direction: row;">
      <div style="width: 150px">
        <x-description title="夸奖次数">{{ store.state.report.praise + '次' }}</x-description>
        <x-description title="不良用语">{{ store.state.report.rude + '次' }}</x-description>
        <x-description title="问答情况">{{ store.state.report.ask + '次' }}</x-description>
        <x-description title="问答对象">{{ store.state.report.target }}</x-description>
      </div>
      <div style="width: 150px">
        <x-description title="语速情况">{{ store.state.report.speedOfSpeech }}</x-description>
        <x-description title="教学风格">{{ store.state.report.style }}</x-description>
      </div>
      <div>
        <x-description title="时间">{{ store.state.report.time }}</x-description>
      </div>
    </div>
    <div class="report-advice">
      <div style="line-height: 60px;">
        <svg style="width: 24px; height: 21px;" width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1001 0C1.27167 0 0.600098 0.671572 0.600098 1.5V26.5C0.600098 27.3284 1.27167 28 2.1001 28H11.2989V25.2H3.4V2.8H20.2V11.0207H23.0001V1.5C23.0001 0.671573 22.3285 0 21.5001 0H2.1001Z" fill="white"/>
          <path d="M31.08 14.0474L19.2636 26.221L14.7764 27.4616L16.0477 22.8093L27.7893 10.6357" stroke="white" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M31.3792 14.7454L31.9027 14.2026C33.0993 12.962 33.0993 10.946 31.9027 9.70536C30.7061 8.46475 28.7616 8.46475 27.565 9.70536L27.0415 10.2481L31.3792 14.7454Z" fill="white"/>
          <path d="M16.1227 22.7319L19.4133 26.0661L15.0757 27.1516L16.1227 22.7319Z" fill="white"/>
        </svg>
      </div>
      <div style="font-size: 12px;padding: 7px 10px 0 0;width: 250px">
        <span>{{ "教学建议:" + store.state.report.advice }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import XDescription from '@/components/x-description'
import store from '@/store'

const status = reactive({
  isCollapse: true
})

const triggerCollapse = () => {
  status.isCollapse = !status.isCollapse
}
</script>

<style scoped>
.report-container {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 100%;
  left: 0;
  border-radius: 8px;
  transform: translate(0, -100%);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 3e-06) 100%), rgba(255, 255, 255, 0.05);
}
.report-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 40px;
  height: 40px;
}
svg {
  width: 45px;
  height: 11px;
  transition: all 0.1s;
}
.button {
  width: 100px;
  color: #C0C0C0;
}
.button:hover {
  color: #0FA47F;
}
.remind-point {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: #2EB358;
  position: absolute;
  top: 16px;
  left: 16px;
  transition: all 0.1s;
}
.report-main {
  transition: all 0.1s;
  overflow: hidden;
  text-align: left;
  margin-left: 36px;
  margin-right: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/*.report-main div {*/
/*  height: 100%;*/
/*}*/
.report-advice {
  width: 100%;
  height: 60px;
  border-top: #FFFFFF 1px solid;
  display: flex;
  flex-direction: row;
}
</style>
