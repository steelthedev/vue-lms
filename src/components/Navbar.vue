<template>
     <nav class="navbar nav-bar navbar-expand-md navbar-dark p-3 fixed-top">
            <router-link to="/" class="navbar-brand">iLMS</router-link>
               <button class="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" 
             aria-expanded="false"
              aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
             </button>

			<div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto  ">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/courses" class="nav-link">Courses</router-link>
                    </li>
                    
                    <template v-if="$store.state.user.isAuthenticated">

                    <li class="nav-item">
                        <a @click="logout()" class="nav-link btn">Logout</a>
                    </li> 

                    <li class="nav-item">
                        <router-link :to="{name:'Myaccount'}" class="nav-link btn">My Account</router-link>
                    </li>     
                        
                    </template>

                    <template v-else>
                    
                            
                     <li class="nav-item">
                        <router-link to="/signup" class="nav-link">Sign up</router-link>
                        </li>

                     <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        
                    </template>


          
                    
                       
                     
                    
                    
                </ul>
            </div>
        </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Navbar',
  props: {
    
  },
  methods:{
        async logout() {
            console.log('logout')
            await axios
              .post('accounts/api/v1/token/logout/')
              .then(response => {
                console.log('Logged out')
              })
              .catch(error => {
                console.log(error)
              })
            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem('token')
            this.$store.commit('removeToken')
            this.$router.push('/')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
