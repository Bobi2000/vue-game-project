import axios from "axios";

export default class UserService {
    loadRankingAnimes(id) {
        return axios.get(`https://localhost:44331/api/animeratings/${id}`);
    }

    login(email, password) {
        return axios.get(`https://localhost:44331/api/animeusers/${email}/${password}`);
    }

    register(username, email, password) {
        return axios.post(`https://localhost:44331/api/animeusers`, { username, email, password });
    }
}