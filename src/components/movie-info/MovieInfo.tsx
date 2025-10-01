import {StarRating} from "@/components/star-rating/StarRating";
import {IMovie} from "@/models/IMovie";
import {getPosterUrl} from "@/utils/getPosterUrl";
import {getYear} from "@/utils/getYear";
import {fiveStarRating} from "@/utils/fiveStarRating";
import {Backdrop} from "@/components/movie-info/backdrop/Backdrop";
import {Poster} from "@/components/movie-info/poster/Poster";
import {Eye} from "lucide-react";
import {GenreBadgesList} from "@/components/movie-info/genre-badges-list/GenreBadgesList";
import {getGenresArrayByIds} from "@/helpers/getGenresArray";
import styles from "./MovieInfo.module.css";

type Props = {
    movie: IMovie;
}

export const MovieInfo = async ({movie}: Props) => {
    const {backdrop_path, title, original_title, release_date, vote_count, vote_average, genre_ids, poster_path, overview} = movie;
    const backdropUrl = getPosterUrl(backdrop_path, 'original');
    const year = getYear(release_date);
    const posterUrl = getPosterUrl(poster_path, 'original');
    const rating = fiveStarRating(vote_average);
    const genres = await getGenresArrayByIds(genre_ids);

    return (
        <>
            <Backdrop url={backdropUrl} title={title}/>
            <div className={styles.relativeWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.leftContainer}>
                            <div className={styles.titleContainer}>
                                <h1 className={styles.title}>{title}</h1>
                                {original_title && original_title !== title && (
                                    <p className={styles.originalTitle}>{original_title}</p>
                                )}
                            </div>

                            <div className={styles.information}>
                                <div className={styles.yearContainer}>
                                    <span className={styles.year}>{year}</span>
                                </div>
                                <div className={styles.rating}>
                                    <StarRating rating={rating}/>
                                    <p>{rating}</p>
                                    <div className={styles.vote}>
                                        ( {vote_count}
                                        <Eye className={styles.voteIcon} />)
                                    </div>
                                </div>
                            </div>

                            <GenreBadgesList genres={genres}/>

                            <div className={styles.overviewContainer}>
                                <h2 className={styles.overviewTitle}>
                                    Overview
                                </h2>
                                <p className={styles.overview}>
                                    {overview}
                                </p>
                            </div>
                        </div>
                        <Poster url={posterUrl} title={title}/>
                    </div>
                </div>
            </div>
        </>
    );
};