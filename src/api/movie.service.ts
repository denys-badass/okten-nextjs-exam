import {IGenre} from "@/models/IGenre";
import {cache} from "react";
import {IMovieResponse} from "@/models/IMovie";

const apiBaseUrl = process.env.API_BASE_URL!;
const genresUrl = apiBaseUrl + '/genre/movie/list';
const token = process.env.API_AUTH_TOKEN!;

const headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`
}

const genresMap = new Map<number, IGenre>();

export const movieService = {
    getGenres: cache(async (): Promise<IGenre[]> => {
        return await fetch(genresUrl, {
            method: 'GET',
            headers: headers,
            next: {revalidate: 86400}
        }).then(res => res.json()).then(data => data.genres);
    }),
    getGenresById: async (id: number): Promise<IGenre> => {
        if (genresMap.size === 0) {
            const genres = await movieService.getGenres();
            genres.forEach(genre => genresMap.set(genre.id, genre));
        }

        return genresMap.get(id) || {id: 0, name: 'Unknown'} as IGenre;
    },
    getMovies: async (endpoint: string, params: string): Promise<IMovieResponse> => {
        return await fetch(`${apiBaseUrl}/${endpoint}?${params}`, {
            method: 'GET',
            headers: headers,
        }).then(res => res.json());
    }
}