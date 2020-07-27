import axios from 'axios';
// let url = "http://localhost:3000/api/";
const url = "https://avatar-api-cb.herokuapp.com/api/";

export default {
    allCharacters: (element) => {
        if (element) return axios.get(`${url}characters/all?element=${element}`)
        else return axios.get(`${url}characters/all`);
    },
    oneCharacter: (id) => {
        return axios.get(`${url}characters/one/?id=${id}`);
    },
    allElements: () => {
        return axios.get(`${url}elements/all`);
    },
    allEpisodes: () => {
        const randomPage = Math.floor(Math.random() * 10) + 1;
        return axios.get(`${url}episodes/all/?page=${randomPage}`);
    },
    oneEpisode: (id) => {
        return axios.get(`${url}/one/?id=${id}`);
    },
    allSeasons: () => {
        return axios.get(`${url}seasons/all`);
    },
    quotes: () => {
        // return demo response to avoid exposing an api key
        return [{
            "body": "Boomerang! You do always come back!",
            "char_name": "Sokka",
            "episode_title": "Avatar Day",
            "episode_id": 25,
            "season_num": 2
        }]
    }
}