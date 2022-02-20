<template>
    <section class="form">
        <div class="contrainer mt-5 pt-3">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8">
                    <h3>Add Courses</h3>
                    <form @submit.prevent enctype="multipart/form-data">

                        <div class="form-group mt-3">
                            <label for="title">Title</label>
                            <input type="text" v-model="title" class="form-control">
                        </div>

                        
                        <div class="form-group mt-3">
                            <label for="title">Category</label>
                            <select class="form-control" v-model="choose_category" >
                                <option v-for=" category in categories " :key="category.id" :value="category.title" > {{category.title}}</option>
                            </select>
                            
                        </div>


                        <div class="form-group mt-3">
                            <label for="title">Short Description</label>
                            <input type="text" v-model="short_description" class="form-control">
                        </div>

                        <div class="form-group mt-3">
                            <label for="title">Long Description</label>
                            
                             <ckeditor >

                             </ckeditor>
                           
                        </div>

                        <div class="form-group mt-3">
                            <label for="title">Image</label>
                            <input type="file"  class="form-control">
                        </div>
                  

                    </form>
                </div>
            </div>
        </div>

    </section>    
</template>
<script>
import axios from 'axios'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name:'AddcourseItem',
    data(){
        return{
            title:'',
            editorData:'<p>NNOP</p>',
            short_description:'',
            choose_category:'Category',
            categories:[],
            image:null,
            editor: ClassicEditor,
            editorConfig: {
                    // The configuration of the rich-text editor.
                }
        }
    },

    mounted(){
        this.getCategories()
    },

    methods:{
        async getCategories(){
        await axios
        .get('courses/category')
        .then(response => {
            console.log(response.data)
            this.categories = response.data
        })
      },

    }
}
</script>
<style scoped>

</style>