import Image from "next/image";
import Link from "next/link";
import {IMovie} from "@/models/IMovie";
import {getYear} from "@/utils/getYear";
import {fiveStarRating} from "@/utils/fiveStarRating";
import {getPosterUrl} from "@/utils/getPosterUrl";
import {StarRating} from "@/components/star-rating/StarRating";
import {PosterPlaceholder} from "@/components/poster-placeholder/PosterPlaceholder";
import styles from "./MovieCard.module.css"

type Props = {
    movie: IMovie;
    priority?: boolean
}

const MovieCard = ({movie, priority = false}: Props) => {
    const {poster_path, title, release_date, vote_average, id} = movie;
    const year = getYear(release_date);
    const rating = fiveStarRating(vote_average);
    const posterUrl = getPosterUrl(poster_path, "w500");

    return (

        <article className={styles.group}>
            <Link href={{pathname: `/movies/${id}`, query: {...movie}}}>
                <div className={`${styles.container}`}>
                    <div className={styles.posterContainer}>
                        {posterUrl ? <Image
                            src={posterUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, (max-width: 1280px) 60vw, (max-width: 1536px) 40vw, 20vw"
                            className={styles.poster}
                            priority={priority}
                        /> : <PosterPlaceholder type="poster" title={title}/>}

                        <div className={styles.gradient}/>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.title}>{movie.title}</h3>
                            <p className={styles.year}>{year}</p>
                            <div className={styles.rating}>
                                <StarRating rating={rating}/>
                                <p>{rating}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.decorative}/>
                    <div className={styles.shine}/>
                </div>
            </Link>
        </article>

    );
}

export default MovieCard;