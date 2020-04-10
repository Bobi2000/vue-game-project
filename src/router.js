import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import CreateAnime from './components/CreateAnime.vue';
import CreateCategory from './components/CreateCategory.vue';
import AnimeList from './components/AnimeList.vue';
import AnimeDetails from './components/AnimeDetails.vue';
import TopAnime from './components/TopAnime.vue';
import Categories from './components/Categories.vue';
import User from './components/User.vue';
import NotFound from './components/404.vue';

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
            path: '/create-anime/:id',
            component: CreateAnime
        },
        {
            path: '/create-category',
            component: CreateCategory,
        },
        {
            path: '/anime/:id',
            component: AnimeList
        },
        {
            path: '/anime-details/:id',
            component: AnimeDetails
        },
        {
            path: '/top-anime',
            component: TopAnime
        },
        {
            path: '/categories',
            component: Categories,
        }, 
        {
            path: '/user/:id',
            component: User
        }, 
        {
            path: '*',
            component: NotFound
        }
    ]
});

export default router;
