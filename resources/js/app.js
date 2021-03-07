import Vue from 'vue'
import router from './router/routes'
//import store from './store'
import helpers from './helpers'
import i18n from './i18n/i18n'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    faEnvelope,
    faPhoneAlt,
    faHeart,
    faCaretDown,
    faShoppingBag,
    faSearch,
    faLaptop,
    faCamera,
    faTabletAlt,
    faTshirt,
    faBriefcase,
    faGem,
    faFootballBall,
    faUtensils, faChevronRight, faBars, faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'

Vue.use(helpers)
library.add(faUser, faChevronRight, faBars, faChevronDown, faEnvelope, faPhoneAlt, faHeart, faCaretDown, faShoppingBag, faSearch, faLaptop, faCamera, faTabletAlt, faTshirt, faBriefcase, faGem, faFootballBall, faUtensils)
Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-text', FontAwesomeLayersText)
Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router,
    i18n
    //store
});
