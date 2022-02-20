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
                                        Create Account
                                    </h1>

                                    <div class="form-group mt-3">
                                        <label for="username" class="username">Username</label>
                                        <input type="text" v-model="username" class="form-control shadow-none" name="username">
                                    </div>

                                    <div class="form-group mt-3">
                                        <label for="first name" class="username">First Name</label>
                                        <input type="text" v-model="first_name" class="form-control shadow-none" name="f_name">
                                    </div>

                                    <div class="form-group mt-3">
                                        <label for="Last Name" class="username">Last Name</label>
                                        <input type="text" v-model="last_name" class="form-control shadow-none" name="l_name">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="password" class="username">Password</label>
                                        <input type="password" v-model="password1" class="form-control shadow-none" name="password">
                                    </div>

                                    <div class="form-group">
                                        <label for="password2" class="username">Repeat Password</label>
                                        <input type="password" v-model="password2" class="form-control shadow-none" name="password2">
                                    </div>
                                    
                                    <button class="btn btn-outline-white mt-3" type="submit">
                                        Create Account
                                    </button>


                                </div>
                            </div>
                            <span v-for=" error in errors" :key="error">
                                {{error}}
                            </span>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>


</template>

<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
    name:'Signup',
     components:{
        Navbar
    },
    data() {
        return{
            username:'',
            last_name:'',
            first_name:'',
            password1:'',
            password2:'',
            errors:[]
        }
    },



    methods:{
        SubmitForm(){
            this.errors = []
            if (this.username === ''){
                this.errors.push('The username must be provided')
            }

            if (this.last_name === ''){
                this.errors.push('The last name must be provided')
            }

            if (this.first_name === ''){
                this.errors.push('The last name must be provided')
            }

            if(!this.errors.length){
                 const data = {
                     username:this.username,
                     password:this.password1,
                     first_name:this.first_name, 
                     last_name: this.last_name
                 }
                axios
                    .post('accounts/signup', data)
                    .then(response => {
                        const token = response.data.token
                        this.$store.commit('setToken', token)
                        axios.defaults.headers.common['Authorization'] = "Token " + token
                        localStorage.setItem('token', token)
                        this.$router.push('/login')
                    })

                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                         
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                      
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