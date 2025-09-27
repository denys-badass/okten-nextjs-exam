'use client'

import {Search} from "lucide-react";
import {useMovieSearch} from "@/hooks/useMovieSearch";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
    const {query, setQuery, searchHandler, keyDownHandler} = useMovieSearch();

    return (
        <form className={`relative`}>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={keyDownHandler}
                className={styles.searchBar}
            />
            <Search className={styles.searchIcon}  onClick={searchHandler}/>
        </form>
    );
};