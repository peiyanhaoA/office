import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import beijing from '@/components/beijing'
import nanjing from '@/components/nanjing'
import console from '@/components/console'

Vue.use(Router)
Vue.directive('drag', function (el) {
  let c = el
  c.onmousedown = function (e) {
    let z = 1
    let left = e.clientX - c.offsetLeft
    let top = e.clientY - c.offsetTop
    c.style.zIndex = z
    document.onmousemove = function (e) {
      let l = e.clientX - left
      let t = e.clientY - top
      let ml = c.parentElement.offsetWidth - c.offsetWidth
      let mt = c.parentElement.offsetHeight - c.offsetHeight
      if (l <= 0) {
        c.style.left = 0 + 'px'
      } else if (ml <= l) {
        c.style.left = null
        c.style.right = 0 + 'px'
      } else {
        c.style.left = l + 'px'
      }
      if (t <= 0) {
        c.style.top = 0 + 'px'
      } else if (mt <= t) {
        c.style.top = null
        c.style.bottom = 0 + 'px'
      } else {
        c.style.top = t + 'px'
      }
    }
    document.onmouseup = function () {
      c.style.zIndex = 0
      document.onmousemove = null
    }
  }
})
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {path: '/home',
      name: 'home',
      component: Home,
      children: [
        {path: '/home', name: 'beijing', component: beijing},
        {path: 'beijing', component: beijing},
        {path: 'nanjing', component: nanjing}
      ]
    },
    {path: '/console', component: console}
  ]
})
