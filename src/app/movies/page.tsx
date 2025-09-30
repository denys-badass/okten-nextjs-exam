import {SearchParams} from "next/dist/server/request/search-params";
import MoviesPageHeader from "@/components/movies-page-header/MoviesPageHeader";
import SortBar from "@/components/sort-bar/SortBar";
import MoviesList from "@/components/movies-list/MoviesList";
import styles from "./page.module.css"
import {movieService} from "@/api/movie.service";

type Props = {
    searchParams: Promise<SearchParams>;
}

export default async function MoviesPage({ searchParams }: Props) {
    const sp = await searchParams;
    const genreId = sp.with_genres as string | null;
    const page = Number(sp.page) || 1;
    const genre = await movieService.getGenresById(Number(genreId));

    const title = genreId ? `${genre.name}'s movies` : 'Movies';

    return (
            <div className={styles.container}>
                <MoviesPageHeader
                    title={title}
                    currentPage={page}
                />
                <SortBar />

                <div className={styles.moviesWrapper}>
                    <MoviesList params={sp} endpoint='discover/movie'/>
                </div>
            </div>

    )
}