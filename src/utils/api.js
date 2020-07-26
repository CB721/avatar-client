import axios from 'axios';
let url = "http://localhost:3000/api/"
// let url = "https://avatar-api-cb.herokuapp.com/api/"

export default {
    allCharacters: (element) => {
        url += "characters/all";
        console.log(url);
        if (element) return axios.get(`${url}?element=${element}`, { withCredentials: true })
        else return axios.get(url);
    },
    oneCharacter: (id) => {
        return axios.get(`${url}characters/one/?id=${id}`, { withCredentials: true });
    }
}