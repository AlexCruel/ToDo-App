import Entrance from './components/Entrance'
import Main from './components/Main'

export const routes = [{
        path: '/firstblood',
        component: Entrance
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '*',
        component: Entrance
    }
]