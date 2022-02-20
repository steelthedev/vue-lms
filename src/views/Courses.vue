<template>
    <Navbar />
        <section class="courses mt-5 pt-5">
        <div class="container-fluid ">
            <div v-if="loading" class="row justify-content-center align-items-center ">
                <div class="loader" >
            </div>
            </div>
            
            <div v-else class="row justify-content-center">
                <div class="col-md-4 col-lg-2 mt-2">
                    <div class="categories">
                        <span>Categories</span>
                        <div class="u-line"></div>
                        <div class="cat-body" >
                            <ul class="cat-list mt-3">
                                  <li><a type="btn" class=" nav-link btn text-dark lead mb-3"
                                v-bind:class="{'isActive': !activeCategory}"
                                @click="setActiveCategory(null)"
                                >All courses</a></li>

                                <li  
                                v-for=" category in categories " :key="category.id"
                                @click="setActiveCategory(category)">
                                <a type="btn" class=" nav-link btn text-dark lead mb-3" >{{category.title}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-10 text-center">
                    <div class="courses-panel">
                        <div class="row justify-content-center" v-if="courses">
                            <Courses v-for="course in courses " :key="course.id" :course="course" />
                         </div>
                     
                    </div>
                 
                    <nav aria-label="Page navigation mb-4">
                    <ul class="pagination mb-4">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                    </nav>
           
                    
                </div>
              
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Courses from '../components/Courses.vue'
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
     
    Navbar, Courses

  },

  data(){
      return{
          courses:[],
          categories:[],
          activeCategory:null,
          loading:false
      }
  },

  mounted(){
        this.getCourses()

        this.getCategories()
  },
  methods:{
      getCourses(){
          this.loading = true
         axios
        .get('courses/course-list')
        .then(response => {
            console.log(response.data)
            this.courses = response.data
            this.loading = false
        })
      },

     getCategories(){
         this.loading = true
              axios
        .get('courses/category')
        .then(response => {
            console.log(response.data)
            this.categories = response.data
            this.loading = false
        })
      },

      setActiveCategory(category){
          this.activeCategory = category
          
        if(this.activeCategory){
            this.filterCategory()
        }
        else if(!this.activeCategory){
            this.getCourses()
        }
          
      },

      filterCategory(){
        let  url =  'courses/course-list'

          if (this.activeCategory){
              url += '?category_id=' + this.activeCategory.id
          }
          this.loading = true
         axios
        .get(url)
        .then(response => {
            console.log(response.data)
            this.courses = response.data
            this.loading = false
        })

      }


      
      

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
