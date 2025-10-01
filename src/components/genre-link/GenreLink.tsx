import { IGenre } from "@/models/IGenre";
import Link from "next/link";

type Props = {
    genre: IGenre;
}

export const GenreLink = ({genre}: Props) => {
    return (
        <Link href={ {pathname: "/movies", query: {with_genres: genre.id}} } >
            { genre.name }
        </Link>
    );
};