import {IGenre} from "@/models/IGenre";
import {GenreLink} from "@/components/genre-link/GenreLink";
import styles from "./GenreList.module.css"

type Props = {
    genres: IGenre[];
}

export const GenreList = ({genres} : Props) => {
    if (!genres || genres.length === 0) {
        return <span>Genres unavailable</span>
    }

    return (
        <ul className={styles.genreList}>
            {genres.map((genre) => (
                <li key={genre.id} className={styles.genreItem}>
                    <GenreLink genre={genre}/>
                </li>
            ))}
        </ul>
    );
}