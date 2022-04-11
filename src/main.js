import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import CKEditor from '@ckeditor/ckeditor5-vue';
import Stepper from 'bs-stepper'

axios.defaults.baseURL= 'https://akinwumi.pythonanywhere.com/'

//axios.defaults.baseURL= 'http://127.0.0.1:8000/'

createApp(App).use(store).use(router,axios,CKEditor,Stepper).mount('#app')
