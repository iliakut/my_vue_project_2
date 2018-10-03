import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import AddUser from '@/views/Add.vue'
import EditUser from '@/views/EditUser'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/add',
      component: AddUser
    },
    {
      path: '/edit/:id',
      component: EditUser
    }
  ]
})
