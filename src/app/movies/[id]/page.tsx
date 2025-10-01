import {SearchParams} from "next/dist/server/request/search-params";
import {IMovie} from "@/models/IMovie";
import {BackButton} from "@/components/back-button/BackButton";
import {MovieInfo} from "@/components/movie-info/MovieInfo";
import styles from "./page.module.css"

type Props = {
    searchParams: Promise<SearchParams>
};

export default async function MoviePage({searchParams} : Props) {
    const sp = await searchParams;
    const movie = JSON.parse(JSON.stringify(sp)) as IMovie;

    return (
        <div className={styles.container}>
            <BackButton />
            <MovieInfo movie={movie}/>
        </div>
    );
}