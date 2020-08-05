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
        return axios.get(`${url}episodes/one/?id=${id}`);
    },
    allSeasons: () => {
        return axios.get(`${url}seasons/all`);
    },
    oneSeason: (id) => {
        return axios.get(`${url}seasons/one/?id=${id}`);
    },
    quotes: () => {
        const dummyData = [
            {
                "body": "Sorry buddy, you should probably wait out back. I know, you got fancier feet than anybody. And six of 'em!",
                "char_name": "Aang",
                "episode_title": "The Headband",
                "episode_id": 42,
                "season_num": 3
            },
            {
                "body": "Boomerang! You do always come back!",
                "char_name": "Sokka",
                "episode_title": "Avatar Day",
                "episode_id": 25,
                "season_num": 2
            },
            {
                "body": "I’ve seen enough of Ba Sing Sei. And I can’t even see!",
                "char_name": "Toph Beifong",
                "episode_title": "The Earth King",
                "episode_id": 38,
                "season_num": 2
            },
            {
                "body": "Very well, but first, I must finish my roast duck.",
                "char_name": "Iroh",
                "episode_title": "The Boy in the Iceberg",
                "episode_id": 1,
                "season_num": 1
            }
        ]
        // return demo response to avoid exposing an api key
        return [dummyData[Math.floor(Math.random() * dummyData.length)]];
    },
    signUp: (data) => {
        return axios.post(`${url}users/create`, data);
    },
    docs: () => {
        return axios.get(`${url}docs/all`);
    },
    createUser: (data) => {
        return axios.post(`${url}users/create`, data);
    }
}