import { IGenre } from "@/models/IGenre";
import Link from "next/link";
import styles from "./GenreLink.module.css";

type Props = {
    genre: IGenre;
}

export const GenreLink = ({genre}: Props) => {
    return (
        <Link href={ {pathname: '/movies', query: {with_genres: genre.id}} } className={styles.link}>
            { genre.name }
        </Link>
    );
};