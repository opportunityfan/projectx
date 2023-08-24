<template>
  <div class="toolbar-container">
    <div class="toolbar">
      <el-row style="height: 100%;text-align: center;-webkit-app-region: no-drag;" justify="center" :gutter="3">
        <el-col :span="12" @click="handleMinimize" class="toolbar-button">
          <svg style="width: 12px;height: 100%;position: relative;top: 3px;" width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
            <rect opacity="0.75" x="1" y="1" width="16" height="2" rx="1" fill="black" stroke-width="2"/>
          </svg>
        </el-col>
        <!--          <el-col :span="8" @click="handleMaximize"><el-image :src="require('@/assets/svg/maximize.svg')" style="width: 12px;height: 100%"></el-image></el-col>-->
        <el-col :span="12" @click="handleClose" class="toolbar-button">
          <svg style="width: 12px;height: 100%" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
            <g opacity="0.75">
              <path d="M1 1L15 15" stroke-width="2" stroke-linecap="round"/>
              <path d="M15 1L1 15" stroke-width="2" stroke-linecap="round"/>
            </g>
          </svg>
        </el-col>
      </el-row>
    </div>
    <div style="display: inline-block;width: 20px"></div>
  </div>
</template>

<script setup>
// const electron = window.require('electron')

const handleClose = () => {
  // electron.ipcRenderer.send('window-close')
  window.electronAPI.close()
}

// const handleMaximize = () => {
//   electron.ipcRenderer.send('window-maximize')
// }
const handleMinimize = () => {
  // electron.ipcRenderer.send('window-minimize')
  window.electronAPI.minimize()
}
</script>

<style scoped>
.toolbar-container {
  width: 100%;
  height: 100%;
  text-align: right;
  -webkit-app-region: drag;
}
.toolbar {
  display: inline-block;
  height: 100%;
  width: 70px;
  border-right: 20px;
  color: #ffffff;
}
.toolbar-button {
  transition: all 0.1s;
}
.toolbar-button:hover{
  color: #0FA47F;
}
</style>
