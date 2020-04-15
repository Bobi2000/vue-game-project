import VueRouter from 'vue-router';
import NotFound from './components/404.vue';
import AnimeDetails from './components/anime/AnimeDetails.vue';
import AnimeList from './components/anime/AnimeList.vue';
import CreateAnime from './components/anime/CreateAnime.vue';
import TopAnime from './components/anime/TopAnime.vue';
import Categories from './components/categories/Categories.vue'
import CreateCategory from './components/categories/CreateCategory.vue';
import Home from './components/Home.vue';
import Login from './components/user/authentication/Login.vue';
import Register from './components/user/authentication/Register.vue';
import User from './components/user/User.vue';

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
            component: AnimeList,
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
