<template>
  <div class="main-page">
    <el-container style="width: 100%; height: 100%">
      <el-aside class="sidebar">
        <side-bar></side-bar>
      </el-aside>
      <el-container>
        <el-header height="60px" style="padding: 0;">
          <tool-bar></tool-bar>
        </el-header>
        <el-main>
          <div style="padding: 0px 15px 30px 15px; width: 100%; height: 100%; box-sizing: border-box">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import ToolBar from '@/components/ToolBar'
import SideBar from '@/components/SideBar'
</script>

<style scoped>
.main-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border-radius: var(--border-radius);
}
.sidebar {
  width: auto;
}
</style>
