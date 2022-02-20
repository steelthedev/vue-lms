<template>
    <Navbar />
        <section class="courses mt-5 pt-5">
        <div class="container">
            <div v-if="loading" class="row justify-content-center align-items-center ">
                <div class="loader" >
            </div>
            </div>
            <div v-else class="row justify-content-center">
                <div class="col-md-4 col-lg-2 mt-2">
                    <div class="categories">
                        <span>Overview
                        </span>
                        <div class="u-line"></div>
                        <div class="cat-body">
                            <ul class="cat-list mt-3">
                                <li v-for=" lesson in lessons " :key="lesson">
                                    <hr my-3 class="mt-2 mb-3 ">
                                    <a @click="setActiveLesson(lesson)" class=" text-dark lead mb-3"><strong>{{lesson.title}}</strong></a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-10">
                        <div class="course-body">
                            <div class="course-img text-justify">
                                <img :src="course.get_image" alt="">
                            </div>
                            <h2>{{course.title}}</h2>

                            <div class="course-words mt-3 pt-3 ">
                                <template v-if="activeLesson" >
                                
                                <div  class="p-1" v-html="activeLesson.long_description">
                                </div>

                                    <hr class="my-4">

                                                

                                    <div class="comment" v-for=" comment in comments" :key="comment.id">
                                    <div class="card p-3 mt-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                    <div class="user d-flex flex-row align-items-center">  <span><small class="font-weight-bold text-primary">{{comment.name}}</small> <small class="font-weight-bold">{{comment.content}}</small></span> </div> <small>{{comment.created_at}}</small>
                                    </div>
                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                        <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> <span class="dots"></span> <small>Translate</small> </div>
                                        <div class="icons align-items-center"> <i class="fa fa-user-plus text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                                 </div>
            
                                <form @submit.prevent="SubmitForm">
                                    <div class="form-group mb-3">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" v-model="comment.name">
                                    </div>

                                     <div class="form-group mb-3">
                                        <label for="name">Comment</label>
                                        <input type="text" class="form-control" v-model="comment.content">
                                    </div>

                                    <button class="btn btn-success btn-outline-white" type="submit">Submit</button>
                                </form>
                                
                                </template>
                                 <template v-else>
                                  <p v-html="course.long_description"></p>
                                </template>
                               
                            </div>
                        </div>
                    </div>
                 
           
                    
                </div>
              
            </div>
       
    </section>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
    
    name:'Course',
    components:{
        Navbar
    },
    data(){
        return{
            course: {},
            lessons :[],
            comments:[],
            activeLesson:null,
            comment:{
                name:'',
                content:''
            },
            loading:false
        }
    },
    mounted(){
        this.getCourses()
    },

    methods:{
        getCourses(){
            this.loading = true
            const slug = this.$route.params.slug
        axios
        .get(`courses/course-list/${slug}`)
        .then(response => {
            this.course = response.data.course
            this.lessons = response.data.lessons
            this.loading = false
        })

        },

        SubmitForm(){


            if(this.comment.name !== '' && this.comment.content !== ''){
                axios
                .post(`courses/course-list/${this.course.slug}/${this.activeLesson.slug}`, this.comment)
                .then(response =>{
                    this.comment.name = ''
                    this.comment.content= ''
             
                    this.getComment()
                })

        }
      },

      
      setActiveLesson(lesson){
          this.activeLesson = lesson

          this.getComment()
      },

      getComment(){
           axios
                .get(`courses/course-list/${this.course.slug}/${this.activeLesson.slug}/get-comment`)
                .then(response => {
                    console.log(response.data)
                    this.comments = response.data
                })
                .catch(err => {
                    console.log(err.message)
                })
      },

    }
}

</script>
<style scoped>

*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.courses{
    padding: 60px 0;
}

:root{
    --main-color:#5e35b1;
    --color-dark:#1d2231;
    --text-grey:#8390a2;
    --secondary-color:#f3e5f5;
}




.categories{
    padding: 10px;
    position: relative;
}


.categories span{
    font-size: 1.5rem;
    color: #111;
}

.u-line{
    position:absolute;
    height: 2px;
    width: 20%;
    background: var(--main-color);
    margin-top:3px;
}


.courses .categories{
    padding:20px;
    box-shadow:0px 7px 29px 0px rgba(116, 116, 116, 0.2) ;
   
}

.courses-panel{
    padding: 20px;
}

.course-img img{
    width: 10%;
    height: 10%;
}

.card {
    border: none;
    box-shadow: 5px 6px 6px 2px #e9ecef;
    border-radius: 4px
}

.dots {
    height: 4px;
    width: 4px;
    margin-bottom: 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block
}

.badge {
    padding: 7px;
    padding-right: 9px;
    padding-left: 16px;
    box-shadow: 5px 6px 6px 2px #e9ecef
}

.user-img {
    margin-top: 4px
}

.check-icon {
    font-size: 17px;
    color: #c3bfbf;
    top: 1px;
    position: relative;
    margin-left: 3px
}

.form-check-input {
    margin-top: 6px;
    margin-left: -24px !important;
    cursor: pointer
}

.form-check-input:focus {
    box-shadow: none
}

.icons i {
    margin-left: 8px
}

.reply {
    margin-left: 12px
}

.reply small {
    color: #b7b4b4
}

.reply small:hover {
    color: green;
    cursor: pointer
}


.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 4%;
  height: 36px;
  animation: spin 2s linear infinite;
  text-align: center;
  margin-top: 170px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>