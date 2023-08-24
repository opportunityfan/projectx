import { createStore } from 'vuex'
import { isAdmin } from '@/assets/js/api'

export default createStore({
  state: {
    user: {
      account: 'Lierick',
      email: '3336970253@qq.com',
      avatar: require('@/assets/img/user_avatar.jpg')
    },
    history: [
      // {
      //   type: 1,
      //   date: '2022-3-3 13:20'
      // },
      // {
      //   type: 2,
      //   date: '2022-3-3 13:24'
      // },
      // {
      //   type: 3,
      //   date: '2022-3-3 13:34'
      // },
      // {
      //   type: 3,
      //   date: '2022-3-3 13:45'
      // }
    ],
    report: {
      praise: 0,
      rude: 0,
      ask: 0,
      target: '',
      speedOfSpeech: '',
      style: '',
      time: '',
      advice: ''
    },
    isRecording: false,
    volume: 30
  },
  getters: {
    isAdmin: state => {
      return isAdmin(state.UUID)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: []
})
