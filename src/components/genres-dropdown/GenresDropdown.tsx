'use client'

import { ChevronDown } from 'lucide-react'
import {IGenre} from "@/models/IGenre";
import styles from "./GenresDropdown.module.css"
import clsx from "clsx";
import {GenreLink} from "@/components/genre-link/GenreLink";
import {useGenresDropdown} from "@/hooks/useGenresDropdown";

interface GenresDropdownProps {
    genres: IGenre[];
    isMobile?: boolean;
}

const GenresDropdown = ({genres, isMobile = false,}: GenresDropdownProps) => {
    const {isOpen, setIsOpen, dropdownRef} = useGenresDropdown();

    // if (isMobile) {
    //     return (
    //         <div className="space-y-2">
    //             <div className="font-medium text-slate-900 dark:text-slate-100 mb-3">Genres</div>
    //             <div className="grid grid-cols-2 gap-2">
    //                 {genres.map((genre) => (
    //                     <button
    //                         key={genre.id}
    //                         className="text-left px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 text-sm"
    //                     >
    //                         {genre.name}
    //                     </button>
    //                 ))}
    //             </div>
    //         </div>
    //     )
    // }

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
                        <div className={styles.genreList}>
                            {genres.map((genre) => (
                                <GenreLink genre={genre}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GenresDropdown