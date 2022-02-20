<template>
 
  <router-view/>
</template>
<script>
import axios from 'axios'
export default {
    name:'App',
    beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.user.token
    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
  mounted(){
      document.title = "iLMS"
  }
  
  }


</script>
<style>

:root{
    --main-color:#5e35b1;
    --color-dark:#1d2231;
    --text-grey:#8390a2;
    --secondary-color:#f3e5f5;
}
 

.l-btn{
    padding: 20px;
    border-radius:2px;
    border: none;
    background: var(--main-color);
    color: #fff;
    font-size: 1rem;
}

.l-btn:hover{
    color: #fff;
    transform: scale(1.05);
}

body{
    background:#fff;
}

*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.nav-bar{
    background: var(--main-color);
    color: #fff;
}

.hero{
    height: 100%;
    padding:30px;
}
.hero .hero-words{
    margin-top:170px;
    color: var(--main-color);
}


@media screen and (max-width:900px) {
    .hero .hero-words{
        margin-top:100px;
        font-size: 2.5rem;
        color: var(--main-color);
    }
}

.hero .hero-words h2{
    color: var(--main-color);
    font-size:3rem;
}

.hero-words p{
    color: var(--color-dark);
}

.hero .hero-btn{
    padding:20px;
    border:0;
    color: #fff;
    background:var(--main-color);
}

.hero .hero-btn:hover{
    transform: scale(1.1);
}

.about, .services , .packages , .reg-slide , .team , .footer-body , .contact , .login , .services , .signup{
    padding: 60px 0;

}

.about{
    background-color: var(--secondary-color);
}

.about h2,   .services h2, .packages h2 , .team h2 , .contact h2 , .login h1 , .services h2 , .signup h1{
    color: var(--main-color); 
    font-size:1.9rem;
}


.about-words{
    color: var(--color-dark);
    font-size:1rem;
}

.about h6, .reg-slide h6{
    font-size: 3rem;
    color: var(--main-color);
    padding: 2px;
}

.about p, .reg-slide p{
    font-size: 1.2rem;
}

.services .services-single{
    height:100%;
    background:#fff;
    box-shadow:0px 7px 29px 0px rgba(116, 116, 116, 0.2) ;
    padding: 30px;
}

.services .services-single i{
    color: #5e35b1;
    font-size: 2.5rem;
    margin-bottom:10px;
}

.packages .package-single , .services .package-single{

    color: var(--color-dark);
    background: #fff;
    box-shadow:0px 7px 29px 0px rgba(116, 116, 116, 0.2) ;
    padding: 30px;
}

.packages .package-single .package-price span , .services .package-single .package-price span{
    font-size: 3rem;
    color: var(--main-color);
}

.packages .package-single ul li , .services .package-single ul li { 
    color: var(--color-dark);
    font-size: 1.1rem;
}

.team .overlay{
    background: var(--main-color);
    position:absolute;
    width:100%;
    height:70%;
    opacity:.1;
}

.team .team-single, .team .team-details{
    padding: 25px;
    
}

.team .team-single{
    background: #fff;
    z-index: 1000;
    border-radius:7px;
}

.team .team-details{
    background: var(--secondary-color);
    width:100%;
}

.footer{
    padding: 60px;
    background: var(--main-color);
    color:#ffffff;
}

.footer a{
    color: #ffffff;
    font-size:1.2rem;
}

.contact .contact-intro p{
    color: var(--color-dark);
    font-size: 1.1rem;
}

.contact .contact-address span{
    color:var(--color-dark);
    font-size: 1.2rem;
    margin-top:10px;
    margin-bottom:20px;

}

.contact .contact-address  .fa{

    font-size: 2.5rem;
    color: var(--main-color);
}

.contact .contact-address span:last-child{

    padding-left:2px;
  
}

.contact .contact-address span:first-child{

    padding-right: 2px;
}

.contact .btn{

    padding: 25px;
    background: var(--main-color);
    color: #ffffff;
}

.contact .btn:hover{
    transform: scale(1.03);
}

.contact .form-page{
    box-shadow: rgba(116, 116, 116, 0.2) 0px 7px 29px 0px ;
    padding: 30px;
}


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

.services .btn{
    padding: 25px;
    color: #ffffff;
    background: var(--main-color);
}

.services .s-btn{
    padding: 20px;
    
}

.services p{
    color: var(--color-dark);
    font-size: 1rem;
}
</style>
