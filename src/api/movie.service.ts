import {IGenre} from "@/models/IGenre";
import {cache} from "react";

const genresUrl = process.env.API_BASE_URL! + '/genre/movie/list';
const token = process.env.API_AUTH_TOKEN!;

const headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`
}

export const movieService = {
    getGenres: cache(async (): Promise<IGenre[]> => {
        return await fetch(genresUrl, {
            method: 'GET',
            headers: headers,
            next: {revalidate: 86400}
        }).then(res => res.json()).then(data => data.genres);
    })
}