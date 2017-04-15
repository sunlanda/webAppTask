import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
