<template>
  <div class="login-page">
    <div class="login-header">
      <ToolBar></ToolBar>
    </div>
    <div class="login-center">
      <el-image :src="require('@/assets/svg/logo.svg')"></el-image>
      <div style="height: 30px"></div>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </div>
    <div class="software-info">言行良师 1.0版本. 我们的目标是开发出一款易于中小学教师使用、能有效监测教师对学生攻击性言论的软件。</div>
  </div>
</template>

<script setup>
import ToolBar from '@/components/ToolBar'
</script >

<style scoped>
.login-header {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  background: #121212;
  border-bottom: 1px solid #3E3E3E;
  border-radius: var(--border-radius) var(--border-radius) 0px 0px;
}
.login-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border-radius: var(--border-radius);
}
.software-info {
  position: absolute;
  bottom: 46px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: #9A9B9F;
  /* or 193% */

  text-align: center;
}
.login-center {
  position: absolute;
  /*height: 30%;*/
  min-width: 320px;
  min-height: 400px;
  transform: translate(-50%, 100px);
  left: 50%;
  padding: 20px;
}
/*.fade-enter {*/
/*  opacity: 0;*/
/*}*/
/*.fade-leave {*/
/*  opacity: 1;*/
/*}*/
/*.fade-enter-active {*/
/*  transition: opacity .5s;*/
/*}*/
/*.fade-leave-active {*/
/*  opacity: 0;*/
/*  transition: opacity .5s;*/
/*}*/
.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>
