/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons' 
import { faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { faHouse} from "@fortawesome/free-solid-svg-icons"
import { faSuitcase} from "@fortawesome/free-solid-svg-icons"
import { faBookOpenReader} from "@fortawesome/free-solid-svg-icons"
import { faBook} from "@fortawesome/free-solid-svg-icons"
import { faUser} from "@fortawesome/free-solid-svg-icons"
import { faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import { faClock} from "@fortawesome/free-solid-svg-icons"
import { faShare} from "@fortawesome/free-solid-svg-icons"
import { faPlay} from "@fortawesome/free-solid-svg-icons"


/* add icons to the library */
library.add(faUserSecret, faCircleChevronRight, faCircleChevronLeft, faChevronLeft, faChevronRight, faFacebookF, faTwitter, faInstagram, faYoutube, faBars, faHouse, faSuitcase, faBookOpenReader, faBook, faUser, faChevronDown, faMagnifyingGlass, faCalendarDays, faClock, faShare, faPlay)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

