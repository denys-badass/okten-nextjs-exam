'use client'

import {ChevronDown} from "lucide-react"
import {IGenre} from "@/models/IGenre";
import clsx from "clsx";
import {useGenresDropdown} from "@/hooks/useGenresDropdown";
import {GenreList} from "@/components/genres-dropdown/genre-list/GenreList";
import styles from "./GenresDropdown.module.css"
import {useCloseOnNavigation} from "@/hooks/useCloseOnNavigation";

type Props = {
    genres: IGenre[];
    isMobile?: boolean;
}

const GenresDropdown = ({genres, isMobile = false}: Props) => {
    const {isOpen, setIsOpen, dropdownRef} = useGenresDropdown();

    useCloseOnNavigation(isOpen, () => setIsOpen(false));

    if (isMobile) {
        return (
            <div className={styles.mobileWrapper}>
                <div className={styles.mobileTitle}>Genres</div>
                <GenreList genres={genres}/>
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
                        {[styles.open]: isOpen}
                    )}
                />
            </button>

            {isOpen && (
                <div className={styles.dropdownWrapper}>
                    <div className={styles.dropdownBlock}>
                        <GenreList genres={genres}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GenresDropdown;