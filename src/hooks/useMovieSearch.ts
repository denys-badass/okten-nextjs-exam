import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

export const useMovieSearch = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const router = useRouter();

    const searchHandler = () => {
        if (query) {
            router.push(`/movies/search?query=${query.trim()}`);
        } else {
            router.push('/movies');
        }
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    }

    return {
        query,
        setQuery,
        searchHandler,
        keyDownHandler,
    }
};