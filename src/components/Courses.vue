<template>

                            <div
                            
                             class="col-md-4 col-lg-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-img">
                                            <figure class="">
                                                <img :src="course.get_image"  alt="course-img">
                                            </figure>
                                        </div>
                                        <div class="card-words m-1 ">
                                            <h3>
                                                {{course.title}}
                                            </h3>
                                            <p class="mt-3" v-html="course.short_description">
                                            </p>
                                        </div>
                                        <div class="card-links">
                                            <router-link :to="{name:'Course', params:{slug:course.slug}}" class=" btn btn-outline-white v-btn mt-3" type="button">View Course</router-link>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>




                  
</template>


<script>
export default {
    name: 'Courses',
    props: {
        course: Object
    }
}
</script>
<style scoped>

.card-img img{
    width: 100%;
}
.card{
    padding: 30px 0;
    height: 100%;
    margin: 0 auto ;
}

.card-body{
    padding: 20px;
    
}
.card-btn {
    padding: 20px;
    border-radius:2px; 
    border: none;
    background: var(--main-color);
    color: #fff;
    font-size: 1rem;
}

.v-btn {
    padding: 20px;
    border-radius:2px; 
    border: none;
    background: var(--main-color);
    color: #fff;
    font-size: 1rem;
}

</style>