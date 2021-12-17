import axios from "axios";

const url = 'http://localhost:5000/movies/';

class MovieService {
    static get_movies(req) {
        return new Promise((resolve, reject) => {
            axios.get(url+"?"+req).then((res) => {
                const data = res.data;
                resolve(
                data.map(movie => ({...movie}))
                );
            }).catch((e) => {
                reject(e);
            })

        });
    }

}

export default MovieService;