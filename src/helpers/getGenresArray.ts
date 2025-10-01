import {movieService} from "@/api/movie.service";

export const getGenresArrayByIds = async (genre_ids: string[] | number[]) => {
    const genreIds = Array.isArray(genre_ids) ? genre_ids : [genre_ids];

    return await Promise.all(genreIds.map((genreId) => movieService.getGenresById(Number(genreId))));
}