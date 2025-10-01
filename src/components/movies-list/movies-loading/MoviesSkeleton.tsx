import {Card} from "@heroui/card";
import {Skeleton} from "@heroui/skeleton";
import styles from "./MoviesSkeleton.module.css";

export const MoviesSkeleton = () => {
    return (
        <div className={styles.moviesListContainer}>
            <div className={styles.masonryGrid}>
                {Array.from({length: 20}).map((_, index) => (
                    <div key={index} className={styles.masonryItem}>
                        <Card className={styles.card} radius="lg">
                            <Skeleton className={styles.skeleton}>
                                <div className={`${styles.poster}`} />
                            </Skeleton>
                            <div className={styles.description}>
                                <Skeleton className={styles.titleSkeleton}>
                                    <div />
                                </Skeleton>
                                <Skeleton className={styles.yearSkeleton}>
                                    <div />
                                </Skeleton>
                                <Skeleton className={styles.starSkeleton}>
                                    <div />
                                </Skeleton>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};