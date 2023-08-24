<template>
  <el-container style="width: 100%; height: 100%">
    <el-header height="100px">
      <notification-bar></notification-bar>
    </el-header>
    <el-container>
      <el-aside width="40%" style="padding-top: 20px;padding-left: 20px;padding-bottom: 20px">
        <work-table></work-table>
      </el-aside>
      <el-main>
        <history-table></history-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import NotificationBar from '@/components/NotificationBar'
import WorkTable from '@/components/WorkTable'
import HistoryTable from '@/components/HistoryTable'
</script>

<style scoped>

</style>
