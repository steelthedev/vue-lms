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

axios.defaults.baseURL= 'https://akinwumi.pythonanywhere.com/'

createApp(App).use(store).use(router,axios,CKEditor).mount('#app')
