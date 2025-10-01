'use client'

import {Select, SelectItem} from "@heroui/select";
import {useMovieSort} from "@/hooks/useMovieSort";
import styles from "./SortBar.module.css"

const sortOptions = [
    {key: "popularity.desc", label: "Popularity ↓"},
    {key: "popularity.asc", label: "Popularity ↑"},
    {key: "title.desc", label: "Title ↓"},
    {key: "title.asc", label: "Title ↑"},
    {key: "primary_release_date.desc", label: "Release Date ↓"},
    {key: "primary_release_date.asc", label: "Release Date ↑"},
    {key: "vote_average.desc", label: "Rating ↓"},
    {key: "vote_average.asc", label: "Rating ↑"},
    {key: "vote_count.desc", label: "Reviews ↓"},
    {key: "vote_count.asc", label: "Reviews ↑"},
]

const SortBar = () => {
    const {currentSort, handleSortChange} = useMovieSort();

    return (
        <Select
            label="Sort By: "
            selectedKeys={[currentSort]}
            size="md"
            onChange={(e) => handleSortChange(e.target.value)}
            classNames={{
                base: [styles.base],
                mainWrapper: [styles.mainWrapper],
                label: [styles.label],
                value: [styles.value],
                innerWrapper: [styles.innerWrapper],
                trigger: [styles.trigger],
                listbox: [styles.listbox],
                popoverContent: [styles.content],
            }}
        >
            {sortOptions.map((option) => (
                <SelectItem key={option.key} className="py-2">
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    );
}

export default SortBar;