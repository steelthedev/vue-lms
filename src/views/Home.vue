<template>
   <Navbar />
        <section class="hero">  
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-5 hero-words">
                    <h2 class="mb-3">
                        Improve Eductaion With Management
                    </h2>
                    <h3>
                         Learn with ease
                    </h3>
                    <a href="" class="btn mt-3 btn-outline-white hero-btn"> Get Started </a>

                </div>

                <div class="col-lg-7 col-md-7">
                  <img src="../assets/img/hero.png" width="90%" alt="">
                </div>

            </div>

            </div>

        </section>


        <section class="about" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 mt-1 text-justify">
                        <div class="about-words mt-4">
                            <h6>
                                Process lectures with ease.
                            </h6>
                            <p>
                                Actualize a smooth running of sessions by actively monitoring your lectures with only few clicks.
                               
                            </p>
                             
                        </div>
                         <router-link to="/login" class="btn btn-outline-white l-btn shadow-none" type="button">Log In To Dashboard </router-link>
                        </div>

                    
                    
                     <div class="col-md-6 col-lg-6 ">
                    
                        <img class="img" src="../assets/img/features.png" width="90%">

                      </div>
                    </div>
                </div>
            </section>

            
        <section class="reg-slide mt-5" >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6 ">
                        <img  src="../assets/img/features-2.png" width="90%">
                    </div>
                    <div class="col-md-6 col-lg-6 mt-1 text-justify">
                
                <div class="about-words mt-4">
                            <h6>
                                Process lectures with ease.
                            </h6>
                            <p>
                                Actualize a smooth running of sessions by actively monitoring your lectures with only few clicks.
                               
                            </p>
                             
                        </div>
                        <router-link :to="{name:'Signup'}" class="btn btn-outline-white l-btn shadow-none" type="button">Register Today</router-link>
                    </div>
                
                </div>
                </div>
                </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
     
    Navbar

  }
}
</script>

<style scoped>

.l-btn{
    padding: 20px;
    border-radius:2px;
    border: none;
    background: var(--main-color);
    color: #fff;
    font-size: 1rem;
}

 img{
    width:90%;
}
</style>
