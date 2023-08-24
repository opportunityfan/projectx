import router from '@/router'
import store from '@/store'
import API from '@/axios/index'
// const electron = window.require('electron')

const md5 = require('md5-node')

// eslint-disable-next-line no-unused-vars
const config = {
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'multipart/form-data'
  }
}

export const goto = (url) => {
  router.push(url)
}

export const login = async (form) => {
  const formData = new FormData()
  formData.append('username', form.account)
  formData.append('password', md5(form.password))
  goto('/home')
  // let out = ''
  // await API.post('/userInfo/login', formData, config).then((res) => {
  //   console.log(res)
  //   if (res.data.code === 200) {
  //     goto('/home')
  //   } else if (res.data.code === -100) {
  //     out = res.data.msg
  //   }
  // })
  // return out
}

export const register = (form) => {
  if (form.password === form.repeat_password) {
    const formData = new FormData()
    formData.append('username', form.account)
    formData.append('password', md5(form.password))
    API.post('/userInfo/register', formData, config).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        goto('/login')
      }
    })
  }
}

export const logout = () => {
  goto('/login')
}

export const startRecord = () => {
  store.state.isRecording = true
  store.state.volume = 30
  // console.log(window.electronAPI.startRecord() ? 'ok' : 'not-ok')
}

export const stopRecord = async () => {
  // window.electronAPI.endRecord()
  const formData = new FormData()
  formData.append('username', store.state.user.account)
  formData.append('txtFile', '18 9 40\n' +
    '同学们好，我们开始上课。st\n' +
    '18 9 43\n' +
    '我想请你说说看昨天的学习内容。st\n' +
    '18 9 47\n' +
    '答得很好，再接再厉。st\n' +
    '18 9 50\n' +
    '你这个蠢蛋。st\n' +
    '18 10 51\n' +
    '安怿骢我想问一下，文中的黄老爷是不是傻瓜？st\n' +
    '18 10 56\n' +
    '安怿骢，我想问问你，你是傻瓜吗？st\n' +
    '18 9 59\n')
  await API.post('/record/add', formData, config).then((res) => {
    console.log(res)
  })
  // formData.append('username', '6')
  // formData.append('startTime', '2023-04-01 23:59:50')
  // formData.append('endTime', '2023-04-15 23:59:59')
  // API.post('/record/get', formData, config).then((res) => {
  //   console.log(res)
  // })
  store.state.isRecording = false
  store.state.volume = 0
  store.state.report.praise = 1
  store.state.report.ask = 2
  store.state.report.rude = 2
  store.state.report.target = '安怿骢'
  store.state.report.speedOfSpeech = '227字/分钟,稍快'
  store.state.report.time = '1分钟前'
  store.state.report.advice = '提升课堂互动性，减少不良用语使用，授课过程中控制情绪，适当减慢语速。'
  store.state.history.push({ type: '你这个蠢蛋。', date: '2023-04-12 18:09:50' })
  store.state.history.push({ type: '你是傻瓜吗？', date: '2023-04-12 18:10:56' })
}
