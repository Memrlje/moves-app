import axios from "axios";

const url = 'http://localhost:5000/shows/';

class ShowService {
    static get_shows(req) {
        return new Promise((resolve, reject) => {
            axios.get(url+"?"+req).then((res) => {
                const data = res.data;
                resolve(
                data.map(show => ({...show}))
                );
            }).catch((e) => {
                reject(e);
            })

        });
    }

}

export default ShowService;