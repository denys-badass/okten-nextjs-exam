import {GenreLink} from "@/components/genre-link/GenreLink";
import {IGenre} from "@/models/IGenre";
import styles from "./GenreBadgeList.module.css"

type Props = {
    genres: IGenre[];
}

export const GenreBadgesList = ({genres} : Props) => {
    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <div key={genre.id} className={styles.badge}>
                    <GenreLink genre={genre}/>
                </div>
            ))}
        </div>
    );
};