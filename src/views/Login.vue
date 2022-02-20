<template>
 <Navbar />
     <section class="login">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12 form-col ">
                        <form @submit.prevent="SubmitForm">
                            
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-8">

                                    <h1 class="mb-3">
                                        Login
                                    </h1>

                                    <div class="form-group mt-3">
                                        <label for="username" class="username">Username</label>
                                        <input type="text" v-model="username" class="form-control shadow-none" name="username">
                                    </div>

                                    
                                    <div class="form-group mt-3 ">
                                        <label for="password" class="username">Password</label>
                                        <input type="password" v-model="password" class="form-control shadow-none" name="password">
                                    </div>

                                    <button class="btn btn-outline-white mt-3" type="submit">
                                        Login
                                    </button>
                                    <small class="mt-3">
                                        Have an account? Sign in <a href="">here</a>
                                    </small>

                                
                                 {{errors}}
                                
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    name:'Login',
    components:{
        Navbar
    },
    data(){
        return{
            password:'',
            username:'',
            errors:[]
        }
    },
    methods:{
        SubmitForm(){
            
            axios.defaults.headers.common['Authorization'] = ""  

            localStorage.removeItem('token')

            this.errors = []
            if (this.username === ''){
                this.errors.push('The username must be provided')
            }

            if (this.password === ''){
                this.errors.push('The last name must be provided')
            }
          

            if(!this.errors.length){
                 const data = {
                     username:this.username,
                     password:this.password,
                      }     
                      
                    axios
                    .post('accounts/api/v1/token/login', data)
                    .then(response => {
                        const token = response.data.auth_token
                        this.$store.commit('setToken', token)
                        axios.defaults.headers.common['Authorization'] = "Token " + token
                        localStorage.setItem('token', token)
                        this.$router.push("/")
                        
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })

            }
    }
}
}
</script>
<style scoped>

.login{
    margin-top: 50px;
    
}

.login h1{
    font-size: 2.5rem;
}

@media screen and (min-width:1000px){
 .login .form-col{
    background-color:#fff;
    padding: 80px 0;
    height: 100%;
    box-shadow:0px 7px 29px 0px rgba(116, 116, 116, 0.2) ;
}   

}

@media screen and (max-width:900px){
.login .form-col{
    background-color:#fff;
    padding: 30px;
}
}
.login .btn , .signup .btn{
    padding: 15px 35px;
    color: #ffffff;
    background: var(--main-color);
}

</style>