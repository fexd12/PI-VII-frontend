import Login from '../views/Login.vue'
import Inicio from '../views/Inicio.vue'
import Pedidos from '../views/Pedidos.vue'
import Scanner from '../views/Scanner.vue'
import Contato from '../views/Contato.vue'
import Gerador from '../views/GeradorQrcode.vue'
import User from '../views/User.vue'
import Cores from '../views/Cores.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/inicio',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/pedidos',
        name: 'pedidos',
        component: Pedidos
    },
    {
        path: '/scanner',
        name: 'scanner',
        component: Scanner
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    },
    {
        path: '/gerador',
        name: 'gerador',
        component: Gerador
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/cores',
        name: 'cores',
        component: Cores
    },

]

export default routes
