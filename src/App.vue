<template>

  <router-view/>
</template>
<script>

import axios from 'axios'
import Navbar from './components/Navbar.vue'
export default {
    name:'App',
    components:{
      Navbar
    },
data(){
  return{
    cart:{
    items:[]
  }
  }
},
  beforeCreate(){
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
  
  mounted(){
      document.title = "iLMS"
   
  },

  
 

  
  }


</script>
<style>
@import "assets/style.css";
</style>