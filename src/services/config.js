import axios from 'axios';

// CONFIGURAÇÂO DO AXIOS 
const http = axios.create({
});

// adiciona o LINK BASE da API
http.defaults.baseURL = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf';

export default http;