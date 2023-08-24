<template>
  <div>
    <div class="welcome">新用户</div>
    <el-form :model="form">
      <el-form-item>
        <x-input label="账号" v-model="form.account" v-bind:correct="available.account" @blur="blurAccount"></x-input>
      </el-form-item>
      <el-form-item>
        <x-input label="密码" type="password" v-model="form.password" v-bind:correct="available.password" @blur="blurPassword"></x-input>
      </el-form-item>
      <el-form-item>
        <x-input label="重复密码" type="password" v-model="form.repeat_password" v-bind:correct="available.repeat_password" @blur="blurRepPassword"></x-input>
      </el-form-item>
      <el-button color="#0FA47F" :dark="true" style="width: 100%;height: 52px;font-size: 17px;letter-spacing: 2px;margin-bottom: 5px" @click="onRegister">注册</el-button>
      <div style="width: 100%;">
        <span style="font-weight: 400;font-size: 14px;line-height: 20px;">已经注册了账户?</span>
        <span style="display: inline-block;width: 10px"></span>
        <el-link style="font-weight: 400;font-size: 14px;line-height: 20px;color: #0FA47F;" :underline="true" @click="() => {goto('/login')}">返回登录</el-link>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import XInput from '@/components/x-input'
import { reactive } from 'vue'
import { goto, register } from '@/assets/js/api'

const form = reactive({
  account: '',
  password: '',
  repeat_password: ''
})

const available = reactive({
  account: true,
  password: true,
  repeat_password: true
})

const blurAccount = () => {
  available.account = form.account.length >= 6 && form.account.length <= 20
}

const blurPassword = () => {
  available.password = form.password.length >= 6 && form.password.length <= 20
}

const blurRepPassword = () => {
  available.repeat_password = form.repeat_password.length >= 6 && form.repeat_password.length <= 20
}

const onRegister = () => {
  register(form)
}
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 27px;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #FFFFFF;
  padding-bottom: 24px;
}
</style>
