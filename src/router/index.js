import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import LoginView from '@/views/LoginView'
import MainView from '@/views/MainView'
import HomeView from '@/views/HomeView'
import RegisterView from '@/views/RegisterView'
import RecordView from '@/views/RecordView'
import AdviceView from '@/views/AdviceView'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/record',
        name: 'record',
        component: RecordView
      },
      {
        path: '/advice',
        name: 'advice',
        component: AdviceView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
