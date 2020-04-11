import axios from "axios";

export default class UserService {
    loadRankingAnimes(id) {
        return axios.get(`https://localhost:44331/api/animeratings/${id}`);
    }

}