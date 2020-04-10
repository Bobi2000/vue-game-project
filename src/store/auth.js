import Vue from 'vue';

const authStore = new  Vue({
    data: {
        user: null
    },
    methods: {
        setUser(user) {
            this.user = user;
            localStorage.setItem("email", user.email);
            localStorage.setItem("username", user.username)
            localStorage.setItem("password", user.password);
            localStorage.setItem("isAdmin", user.isAdmin);
            localStorage.setItem("userId", user.id);
        },
        clearUser() {
            localStorage.clear();
            this.user = null;
        },
        checkIfIsLogged() {
            if(localStorage.getItem("email") != null) {
                return true;
            }
            return false;
        },
        getUsername() {
            return localStorage.getItem("username");
        },
        isAdmin() {
            let data = localStorage.getItem("isAdmin");
            if(data === 'true') {
                return true;
            } else {
                return false;
            }
        },
        getUserId() {
            return localStorage.getItem("userId");
        }
    }
});

export default authStore;