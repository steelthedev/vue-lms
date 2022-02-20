import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Myaccount from '../views/dashboard/Myaccount.vue'
import Addcourse from '../views/dashboard/Addcourse.vue'
import Notfound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },

  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },

    {
    path: '/courses',
    name: 'Courses',
    component:Courses
  },

   {
    path: '/course/:slug',
    name: 'Course',
    component:Course
  },

  {
    path: '/myaccount',
    name: 'Myaccount',
    component:Myaccount
  },

  

  {
    path:'/:catchAll(.*)',
    name:'404',
    component:Notfound
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
