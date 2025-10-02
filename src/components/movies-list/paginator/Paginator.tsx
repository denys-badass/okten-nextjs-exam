'use client'

import {Pagination} from "@heroui/pagination";
import {usePagination} from "@/hooks/usePagination";
import styles from "./Paginator.module.css";

type Props = {
    currentPage: number;
    totalPages: number;
}

export const Paginator = ({currentPage, totalPages}: Props) => {
    const {handlePageChange} = usePagination();

    return (
        <Pagination
            color="warning"
            showControls
            showShadow
            radius="md"
            size="sm"
            isCompact
            page={currentPage}
            total={totalPages}
            classNames={{
                wrapper: [styles.wrapper],
            }}
            onChange={(page) => handlePageChange(page)}
        />
    );
};