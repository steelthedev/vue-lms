import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Myaccount from '../views/dashboard/Myaccount.vue'
import Addcourse from '../views/dashboard/Addcourse.vue'
import ManageCourse from '../views/dashboard/ManageCourse.vue'
import EditProfile from '../views/dashboard/EditProfile.vue'
import Billing from '../views/dashboard/Billing.vue'
import Mycourses from '../views/dashboard/Mycourses.vue'
import Notfound from '../views/404.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

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
    path: '/cart',
    name: 'Cart',
    component:Cart
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component:Checkout
  },

  {
    path: '/my-courses',
    name: 'Mycourses',
    component:Mycourses
  },



  {
    path: '/search',
    name: 'Search',
    component:Search
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
    path: '/billing',
    name: 'Billing',
    component:Billing
  },

  {
    path: '/myaccount',
    name: 'Myaccount',
    component:Myaccount
  },

  {
    path: '/manage-course',
    name: 'ManageCourse',
    component:ManageCourse
  },

  {
    path: '/edit-profile',
    name: 'EditProfile',
    component:EditProfile
  },

  {
    path: '/instructor/addcourse',
    name: 'Addcourse',
    component:Addcourse
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
