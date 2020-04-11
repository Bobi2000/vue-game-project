import axios from "axios";

export default class UserService {
    createCategory(title) {
        return axios.post(`https://localhost:44331/api/animeratings/`, { title });
    }
}