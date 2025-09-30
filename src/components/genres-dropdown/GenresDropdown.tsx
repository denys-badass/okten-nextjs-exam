'use client'

import { ChevronDown } from 'lucide-react'
import {IGenre} from "@/models/IGenre";
import clsx from "clsx";
import {GenreLink} from "@/components/genre-link/GenreLink";
import {useGenresDropdown} from "@/hooks/useGenresDropdown";
import styles from "./GenresDropdown.module.css"

type Props = {
    genres: IGenre[];
    isMobile?: boolean;
}

const GenresDropdown = ({genres, isMobile = false,}: Props) => {
    const {isOpen, setIsOpen, dropdownRef} = useGenresDropdown();

    if (isMobile) {
        return (
            <div className={styles.mobileWrapper}>
                <div className={styles.mobileTitle}>Genres</div>
                <ul className={styles.genreList}>
                    {genres.map((genre) => (
                        <li key={genre.id} className={styles.genreItem}>
                            <GenreLink genre={genre}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className={styles.buttonWrapper} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.button}
                aria-expanded={isOpen}
                aria-haspopup="true">
                <span>Genres</span>
                <ChevronDown
                    className={clsx(
                        [styles.chevron],
                        {[styles.open] : isOpen}
                    )}
                />
            </button>

            {isOpen && (
                <div className={styles.dropdownWrapper}>
                    <div className={styles.dropdownBlock}>
                        <ul className={styles.genreList}>
                            {genres.map((genre) => (
                                <li key={genre.id} className={styles.genreItem}>
                                    <GenreLink genre={genre}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GenresDropdown