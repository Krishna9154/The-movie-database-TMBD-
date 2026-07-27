import axios from "axios";


const apiKey = import.meta.env.VITE_TMDB_KEY


// const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

// /movie/now_playing


export async function search_Movies(query) {
    const res = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            query: query,
            api_key: apiKey,
        }
    })

    return (res.data.results);
}


// search_Movies()


export async function popular_Movies() {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}


export async function topRated_Movies() {
    const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
        params: {
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}

export async function upcoming_Movies() {
    const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}


export async function trendingDay_Movies() {
    const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}

export async function movieDetails(id) {
    
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: apiKey,
            }
        })
        return response.data;
        
}

// export async function movieTralior(id=1083381) {
    
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
//             params: {
//                 api_key: apiKey,
//             }
//         })
//         console.log(response.data);
//         return response.data;
        
// }

// movieTralior()