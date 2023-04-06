import axios from 'axios';
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// if line 2 is default const instance then line 6 will be removed because we can have only one default export