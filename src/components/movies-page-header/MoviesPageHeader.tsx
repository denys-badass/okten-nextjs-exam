import styles from "./MoviesPageHeader.module.css"

type Props = {
    title: string;
    currentPage: number;
}

const MoviesPageHeader = ({title, currentPage}: Props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>
                    {title}
                </h1>
            </div>

            {currentPage && (
                <div className={styles.pager}>
                    <div className={styles.lineWrapper}>
                        <div className={styles.leftLine}></div>
                    </div>
                    <div
                        className={styles.pageIndicatorContainer}>
                        <span className={styles.pageIndicator}>Page {currentPage}</span>
                    </div>
                    <div className={styles.lineWrapper}>
                        <div className={styles.rightLine}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MoviesPageHeader;