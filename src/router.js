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
import authStore from './store/auth.js';

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
            component: Login,
            beforeEnter: (to, from, next) => {
                if (authStore.checkIfIsLogged()) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        {
            path: '/register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if (authStore.checkIfIsLogged()) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        {
            path: '/create-anime/:id',
            component: CreateAnime,
            beforeEnter: (to, from, next) => {
                if (!authStore.checkIfIsLogged()) {
                    next(false);
                }
                else if (!authStore.isAdmin()) {
                    next(false);
                } else {
                    next();
                }
            }
        },
        {
            path: '/create-category',
            component: CreateCategory,
            beforeEnter: (to, from, next) => {
                if (!authStore.checkIfIsLogged()) {
                    next(false);
                }
                else if (!authStore.isAdmin()) {
                    next(false);
                } else {
                    next();
                }
            }
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
