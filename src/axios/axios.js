import axios from 'axios';
const apiKEY = '613bf31ec2msh4ed6a45557593bfp1229a9jsn46464364d020'
export const instance = axios.create({
    method: 'GET',
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': apiKEY,
   }
});



// instance.interceptors.request.use( (config) => { 
//     config.headers['X-RapidApi-Key'] = apiKEY;
//     return config;
// })

// export { instance }