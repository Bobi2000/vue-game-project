import axios from "axios";

export default class CategoryService {

    getCategory(id) {
        return axios.get(`https://localhost:44331/api/Categories/${id}`);
    }

    getAnimesByCategory(id) {
        return axios.get(`https://localhost:44331/api/anime/${id}/100`);
    }

    createCategory(title) {
        return axios.post(`https://localhost:44331/api/animeratings/`, { title });
    }

    loadCategories() {
        return axios.get(`https://localhost:44331/api/Categories`);
    }

    createAnimeCategory(title) {
        return axios.post(`https://localhost:44331/api/Categories`, { title });
    }
}