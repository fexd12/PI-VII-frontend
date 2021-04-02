import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Rastreio from '../views/Rastreio.vue'
import Scanner from '../views/Scanner.vue'
import Contato from '../views/Contato.vue'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        name:'Dashboard',
        component: Dashboard,
        children:[
            {
                path:'/rastreio',
                alias:'',
                name:'rastreio',
                component:Rastreio
            },
            {
                path:'/scanner',
                alias:'',
                name:'scanner',
                component:Scanner
            },
            {
                path:'/contato',
                alias:'',
                name:'contato',
                component:Contato
            }
        ],
        redirect:'/login'
    },
]

export default routes
