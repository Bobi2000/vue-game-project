import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import CreateAnime from './components/CreateAnime.vue';
import CreateCategory from './components/CreateCategory.vue';
import AnimeList from './components/AnimeList.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login 
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/create-anime',
        component: CreateAnime,
    },
    {
        path: '/create-category',
        component: CreateCategory
    },
    {
        path: '/anime/:id',
        component: AnimeList
    }
]
});

export default router;
