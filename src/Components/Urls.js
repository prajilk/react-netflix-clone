import { BASE_URL, API_KEY } from "./Constants";

export const trending = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
export const popular = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const hindi = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=hi`
export const action = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=28`
export const scifi = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=878`
export const onlyOnNetflix = `${BASE_URL}discover/tv?with_networks=213&api_key=${API_KEY}`
export const anime = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=16`
export const comedies = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=35`
export const thrillers = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=53`
export const adventures = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=12`
export const horror = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=27`
export const search = `${BASE_URL}search/multi?api_key=${API_KEY}&language=en-US&query=`
