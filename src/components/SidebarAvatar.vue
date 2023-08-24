<template>
  <div class="avatar-container" :class="props.isCollapse?'collapse':'not-collapse'">
    <div style="display: flex;flex-direction: row;align-items: flex-start;">
      <div class="avatar" :style="{marginLeft: props.isCollapse? '0': '7px'}">
        <div class="online-status online"></div>
        <el-avatar :src="store.state.user.avatar" :size="36"></el-avatar>
      </div>
      <div class="user-info" :style="{opacity: props.isCollapse? 0: 1}">
        <div style="font-size: 14px;"><span> {{ store.state.user.account }} </span></div>
        <div style="color: #808080; font-size: 10px"><span> {{ store.state.user.email }} </span></div>
      </div>
    </div>
    <div style="" class="logout-container" @click="onLogout()">
      <div class="icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 13H2.08333C1.72971 13 1.39057 12.8595 1.14052 12.6095C0.890476 12.3594 0.75 12.0203 0.75 11.6667V2.33333C0.75 1.97971 0.890476 1.64057 1.14052 1.39052C1.39057 1.14048 1.72971 1 2.08333 1H4.75" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.41675 10.3333L12.7501 6.99999L9.41675 3.66666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.75 7H4.75" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="logout">
        <span>登出</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { logout } from '@/assets/js/api'
import store from '@/store'
// eslint-disable-next-line no-undef
const props = defineProps({
  isCollapse: Boolean
})

const onLogout = () => {
  logout()
}
</script>

<style scoped>
.avatar-container {
  transition: all 0.1s;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 10px;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
}
.avatar {
  width: 50px;
  min-width: 50px;
  margin-right: 10px;
  transition: all 0.1s;
  position: relative;
  text-align: center;
}
.user-info {
  width: 150px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  transition: all 0.5s;
}
.online-status {
  border-radius: 999px;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0px;
  left: 40px;
}
.online {
  background-color: #B5FFC1;
}
.collapse {
  width: 50px;
  height: 42px;
}
.not-collapse {
  width: 210px;
  height: 80px;
  background-color: #333333;
}
.icon {
  text-align: center;
  display: inline-block;
  width: 15px;
}
svg {
  width: 13px;
  height: 13px;
}
.logout-container {
  text-align: left;
  padding-left: 15px;
  padding-top: 8px;
  transition: all 0.1s;
}
.logout-container:hover {
  color: #0FA47F;
}
.logout {
  display: inline-block;
  font-size: 12px;
  vertical-align: top;
  line-height: 20px;
  padding-left: 10px;
  font-weight: 600;
}
</style>
