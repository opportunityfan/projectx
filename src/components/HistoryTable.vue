<template>
  <div class="history-container">
    <div style="height: 40px;text-align: left;font-size: 11px;"><span>不良词汇历史</span></div>
    <div v-for="(date, index) in store.state.history" :key="index">
      <history-item :data="date" :index="index"></history-item>
    </div>
    <report-bar></report-bar>
  </div>
</template>

<script setup>
import store from '@/store'
import HistoryItem from '@/components/HistoryItem'
import ReportBar from '@/components/ReportBar'
</script>

<style scoped>
.history-container {
  background-color: #313237;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
}
</style>

<style>
.el-table {
  --el-table-bg-color: rgba(0, 0, 0, 0) !important;
  --el-table-tr-bg-color: rgba(0, 0, 0, 0) !important;
  --el-table-header-bg-color: rgba(0, 0, 0, 0) !important;
  --el-table-border-color: #404040 !important;
}
</style>
