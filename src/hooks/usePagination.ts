import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const usePagination = () => {
    const sp = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(sp);
        params.set("page", page.toString());
        router.push(`${pathname}?${params.toString()}`);
    }

    return {
        handlePageChange
    }
}