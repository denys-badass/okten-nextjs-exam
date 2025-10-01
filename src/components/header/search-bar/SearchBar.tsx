'use client'

import {Search} from "lucide-react";
import {useMovieSearch} from "@/hooks/useMovieSearch";
import {Input} from "@heroui/input";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
    const {query, setQuery, searchHandler, keyDownHandler} = useMovieSearch();

    return (

            <Input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={keyDownHandler}
                classNames={{
                    input: [styles.searchBar],
                    inputWrapper: [styles.searchBarWrapper]
                }}
                endContent={<Search className={styles.searchIcon}  onClick={searchHandler}/>}
            />

    );
};