import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import AddBooks from './components/AddBooks.vue'
import UpdateBooks from './components/UpdateBooks.vue'



import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes=[
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Add',
        path: '/add',
        component: Add
    },
    {
        name: 'Update',
        path: '/update/:id',
        component: Update
    },
    {
        name: 'AddBooks',
        path: '/addbooks',
        component: AddBooks
    },
    {
        name: 'UpdateBooks',
        path: '/updatebooks/:id',
        component: UpdateBooks
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

