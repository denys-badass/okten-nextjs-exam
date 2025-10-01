import {SearchParams} from "next/dist/server/request/search-params";
import MovieCard from "@/components/movie-card/MovieCard";
import {movieService} from "@/api/movie.service";
import {getRawParams} from "@/utils/getRawParams";
import {Paginator} from "@/components/movies-list/paginator/Paginator";
import styles from "./MoviesList.module.css";

type Props = {
    params: SearchParams;
    endpoint: string;
    isSearch?: boolean;
}

const MoviesList = async ({
                              params,
                              endpoint = "discover",
                              isSearch = false,
                          }: Props) => {
    const searchParams = getRawParams(params)
    const {ok, data, error} = await movieService.getMovies(endpoint, searchParams);

    if (!ok) {
        return <div className={styles.notFoundContainer}>Something went wrong: {error}</div>
    }

    if (!data || data.results.length === 0) {
        return (
            <div className={styles.notFoundContainer}>
                <div
                    className={styles.notFoundIconWrapper}>
                    <div className={styles.NotFoundIcon}>🎬</div>
                </div>
                <h3 className={styles.notFoundHeading}>
                    {isSearch ? "No Movies Found" : "No Movies Available"}
                </h3>
                <p className={styles.notFoundDescription}>
                    {isSearch
                        ? "Try adjusting your search terms or browse all movies instead."
                        : "Check back later for new movie additions."
                    }
                </p>
            </div>
        )
    }

    const {results, page, total_pages} = data;
    const totalPages = total_pages > 500 ? 500 : total_pages;

    return (
        <div className={styles.moviesListContainer}>
            <div className={styles.masonryGrid}>
                {results.map((movie, index) => (
                    <div key={movie.id} className={styles.masonryItem}>
                        <MovieCard
                            movie={movie}
                            priority={index < 8}
                        />
                    </div>
                ))}
            </div>
            <Paginator currentPage={page} totalPages={totalPages}/>
        </div>

    )
}

export default MoviesList;