import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTrashCan,faUserPen,faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashCan,faUserPen,faPlus);

createApp(App)
.component('font-asewome-icon', FontAwesomeIcon)
.mount('#app')
