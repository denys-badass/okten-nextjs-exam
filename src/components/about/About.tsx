import {ExploreIcon} from "@/components/about/icons/ExploreIcon";
import {SearchIcon} from "@/components/about/icons/SearchIcon";
import {DiscoverIcon} from "@/components/about/icons/DiscoverIcon";
import styles from "./About.module.css";

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={`${styles.iconBlock} ${styles.amberBlock}`}>
                    <ExploreIcon />
                </div>
                <h3 className={styles.heading}>Explore</h3>
                <p className={styles.description}>Browse thousands of movies by genre</p>
            </div>

            <div className={styles.section}>
                <div className={`${styles.iconBlock} ${styles.blueBlock}`}>
                    <SearchIcon />
                </div>
                <h3 className={styles.heading}>Search</h3>
                <p className={styles.description}>Find movies by title or keyword</p>
            </div>

            <div className={styles.section}>
                <div className={`${styles.iconBlock} ${styles.greenBlock}`}>
                    <DiscoverIcon />
                </div>
                <h3 className={styles.heading}>Discover</h3>
                <p className={styles.description}>Get detailed movie information</p>
            </div>
        </div>
    );
};