import {SearchParams} from "next/dist/server/request/search-params";
import MoviesPageHeader from "@/components/movies-page-header/MoviesPageHeader";
import SortBar from "@/components/sort-bar/SortBar";
import MoviesList from "@/components/movies-list/MoviesList";
import {movieService} from "@/api/movie.service";
import {Suspense} from "react";
import {MoviesSkeleton} from "@/components/movies-list/movies-loading/MoviesSkeleton";
import styles from "./page.module.css"

type Props = {
    searchParams: Promise<SearchParams>;
}

export default async function MoviesPage({ searchParams }: Props) {
    const sp = await searchParams;
    const genreId = sp.with_genres as string | null;
    const page = Number(sp.page) || 1;
    const genre = await movieService.getGenresById(Number(genreId));

    const title = genreId ? `${genre.name}'s movies` : "Movies";

    return (
            <div className={styles.container}>
                <MoviesPageHeader
                    title={title}
                    currentPage={page}
                />
                <SortBar />

                <div className={styles.moviesWrapper}>
                    <Suspense fallback={<MoviesSkeleton />}>
                        <MoviesList params={sp} endpoint="discover/movie"/>
                    </Suspense>
                </div>
            </div>

    );
}