import styles from "./icons.module.css"

export const ExploreIcon = () => {
    return (
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0v16a2 2 0 002 2h6a2 2 0 002-2V4"
            />
        </svg>
    );
};