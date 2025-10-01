import {IGenre} from "@/models/IGenre";
import {cache} from "react";
import {IMovieResponse} from "@/models/IMovie";

function validateEnv() {
    const apiBaseUrl = process.env.API_BASE_URL;
    const token = process.env.API_AUTH_TOKEN;

    if (!apiBaseUrl) {
        throw new Error("API_BASE_URL is not defined in environment variables");
    }

    if (!token) {
        throw new Error("API_AUTH_TOKEN is not defined in environment variables");
    }

    return { apiBaseUrl, token };
}

const { apiBaseUrl, token } = validateEnv();
const genresUrl = apiBaseUrl + "/genre/movie/list";

const headers = {
    "accept": "application/json",
    "Authorization": `Bearer ${token}`
}

type ApiResponse<T> = {
    ok: boolean;
    data: T | null;
    error?: string;
};

const genresMap = new Map<number, IGenre>();

export const movieService = {
    getGenres: cache(async (): Promise<IGenre[]> => {
        try {
            const res = await fetch(genresUrl, {
                method: "GET",
                headers: headers,
                next: {revalidate: 86400}
            });
            if (!res.ok) {
                console.error(`Failed to fetch genres: ${res.status}`);
                return [];
            }

            const data = await res.json();
            return data.genres;
        } catch (e) {
            console.error(e instanceof Error ? e.message : "Unknown error");
            return [];
        }
    }),
    getGenresById: async (id: number): Promise<IGenre> => {
        if (genresMap.size === 0) {
            const genres = await movieService.getGenres();
            genres.forEach(genre => genresMap.set(genre.id, genre));
        }

        return genresMap.get(id) || {id: 0, name: "Unknown"} as IGenre;
    },
    getMovies: async (endpoint: string, params: string): Promise<ApiResponse<IMovieResponse>> => {
        try {
            const res = await fetch(`${apiBaseUrl}/${endpoint}?${params}`, {
                method: "GET",
                headers: headers,
            });
            if (!res.ok) {
                return { ok: false, data: null, error: `HTTP ${res.status}`}
            }
            const data = await res.json();
            return {
                ok: true,
                data: data,
            }
        }
        catch (e) {
            return { ok: false, data: null, error: e instanceof Error ? e.message : "Unknown error"}
        }
    }
}