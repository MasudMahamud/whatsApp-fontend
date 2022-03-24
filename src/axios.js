import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tranquil-fortress-32371.herokuapp.com'
})

export default instance;