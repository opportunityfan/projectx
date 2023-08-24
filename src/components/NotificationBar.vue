<template>
  <div class="notification-container">
    <transition name="fade" mode="out-in">
      <div class="notification" :key="store.state.isRecording">
        <span>{{ store.state.isRecording?'语音检测中...':'点击左下角“开始上课”按钮，即可启动语言检测程序' }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import store from '@/store'
</script>

<style scoped>
.notification-container {
  position: relative;
  background-color: #313237;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}
.notification {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  font-size: 24px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>
