import {SearchParams} from "next/dist/server/request/search-params";
import MoviesPageHeader from "@/components/movies-page-header/MoviesPageHeader";
import MoviesList from "@/components/movies-list/MoviesList";
import styles from "./page.module.css"

type Props = {
    searchParams: Promise<SearchParams>;
}

export default async function SearchPage({ searchParams }: Props) {
    const sp = await searchParams;
    const query = sp.query as string | null;
    const page = Number(sp.page) || 1;

    return (
        <div className={styles.container}>
            <MoviesPageHeader
                title={`Search results for "${query}"`}
                currentPage={page}

            />
            <div className={styles.moviesWrapper}>
                <MoviesList params={sp} endpoint='search/movie' isSearch/>
            </div>
        </div>

    )
}