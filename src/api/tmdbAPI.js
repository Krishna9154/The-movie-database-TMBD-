import axios from "axios";


const apiKey = import.meta.env.VITE_TMDB_KEY


// const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
 
// /movie/now_playing


export async function search_Movies(){
    const res = await axios.get('https://api.themoviedb.org/3/search/movie',{
        params:{
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    console.log(res.data.results);
}

// search_Movies()


export async function popular_Movies(){
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular',{
        params:{
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}


export async function topRated_Movies(){
    const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated',{
        params:{
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return (res.data.results);
}

export async function upcoming_Movies(){
    const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming',{
        params:{
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return(res.data.results);
}


export async function trendingDay_Movies(){
    const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day',{
        params:{
            query: "Jack Reacher",
            api_key: apiKey,
        }
    })
    return(res.data.results);
}