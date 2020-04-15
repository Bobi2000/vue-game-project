import axios from "axios";

export default class AnimeService {
    setRating(rating, userId, animeId) {
        axios
            .post(`https://localhost:44331/api/AnimeRatings`, {
                rating,
                userId,
                animeId
            })
            .then(() => {
                location.reload();
            });
    }

    getAnime(id) {
        return axios.get(`https://localhost:44331/api/anime/${id}`);
    }

    getAnimeUserRating(id, userId) {
        axios
            .get(`https://localhost:44331/api/animeratings/${id}/${userId}`)
    }

    getAnimeRating(id) {
        let numberId = -1;
        axios
            .get(`https://localhost:44331/api/animeratings/${id}/${numberId}/${numberId}`)
    }

    loadSeasonalAnime() {
        return axios.get(`https://localhost:44331/api/anime/1/5`);
    }

    loadSummerAnime() {
        return axios.get(`https://localhost:44331/api/anime/2/5`)
    }

    topAnime() {
        return axios.get(`https://localhost:44331/api/animeratings/`);
    }

    createAnime(title, thumbnailURL, trailerURL, synopsis, categoryId, $router) {
        axios
            .post(`https://localhost:44331/api/anime`, {
                title,
                thumbnailURL,
                trailerURL,
                synopsis,
                categoryId
            })
            .then(() => {
                $router.push("/anime/" + categoryId);
            });
    }

}