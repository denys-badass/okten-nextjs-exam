import {SearchParams} from "next/dist/server/request/search-params";
import MovieCard from "@/components/movie-card/MovieCard";
import {movieService} from "@/api/movie.service";
import {getRawParams} from "@/utils/getRawParams";
import styles from "./MoviesList.module.css";
import {Paginator} from "@/components/movies-list/paginator/Paginator";

type Props = {
    params: SearchParams;
    endpoint: string;
    isSearch?: boolean;
}

const MoviesList = async ({
                              params,
                              endpoint = 'discover',
                              isSearch = false,
                          }: Props) => {
    const searchParams = getRawParams(params)
    const {page, results, total_pages} = await movieService.getMovies(endpoint, searchParams);
    const totalPages = total_pages > 500 ? 500 : total_pages;


    if (!results || results.length === 0) {
        return (
            <div className={styles.notFoundContainer}>
                <div
                    className={styles.notFoundIconWrapper}>
                    <div className={styles.NotFoundIcon}>🎬</div>
                </div>
                <h3 className={styles.notFoundHeading}>
                    {isSearch ? 'No Movies Found' : 'No Movies Available'}
                </h3>
                <p className={styles.notFoundDescription}>
                    {isSearch
                        ? 'Try adjusting your search terms or browse all movies instead.'
                        : 'Check back later for new movie additions.'
                    }
                </p>
            </div>
        )
    }

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

export default MoviesList