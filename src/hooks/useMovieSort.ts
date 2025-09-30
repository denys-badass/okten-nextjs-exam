import {useRouter, useSearchParams} from "next/navigation";

export const useMovieSort = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get('sort_by') || 'popularity.desc';

    const handleSortChange = (sortKey: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('sort_by', sortKey);
        params.delete('page');
        router.push(`/movies?${params.toString()}`);
    }

    return {
        currentSort,
        handleSortChange
    }
}