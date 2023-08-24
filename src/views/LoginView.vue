<template>
  <div>
    <div class="welcome">欢迎</div>
    <el-form :model="form">
      <el-form-item>
        <x-input label="账号" v-model="form.account" v-bind:correct="available.account" @blur="blurAccount" :feedback="feedback.account"></x-input>
      </el-form-item>
      <el-form-item>
        <x-input label="密码" type="password" v-model="form.password" v-bind:correct="available.password" @blur="blurPassword" :feedback="feedback.password"></x-input>
      </el-form-item>
      <el-button color="#0FA47F" :dark="true" style="width: 100%;height: 52px;font-size: 17px;letter-spacing: 2px;margin-bottom: 5px" @click="onLogin">登录</el-button>
      <div style="width: 100%;">
        <span style="font-weight: 400;font-size: 14px;line-height: 20px;">还没有账户?</span>
        <span style="display: inline-block;width: 10px"></span>
        <el-link style="font-weight: 400;font-size: 14px;line-height: 20px;color: #0FA47F;" :underline="true" @click="() => {goto('/register')}">注册</el-link>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import XInput from '@/components/x-input'
import { login, goto } from '@/assets/js/api'

const form = reactive({
  account: '',
  password: ''
})

const available = reactive({
  account: true,
  password: true
})

const feedback = reactive({
  account: '用户名不存在',
  password: '密码错误'
})

const onLogin = async () => {
  const msg = await login(form)
  console.log(msg)
  if (msg !== '') {
    available.account = false
    available.password = false
    feedback.account = '用户名或密码错误'
    feedback.password = ''
  }
}

const blurAccount = () => {
  available.account = form.account.length !== 0
  if (!available.account) feedback.account = '账户名不能为空'
}

const blurPassword = () => {
  available.password = form.password.length !== 0
  if (!available.account) feedback.account = '密码不能为空'
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
