import Link from "next/link";
import Image from "next/image";
import {PosterPlaceholder} from "@/components/poster-placeholder/PosterPlaceholder";
import styles from "./Poster.module.css";

type Props = {
    url: string;
    title: string;
}

export const Poster = ({url, title}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { url ?
                    <Link href={url} target="_blank">
                        <div className={styles.imageContainer}>
                            <Image src={url} alt={title} fill className={styles.image} />
                            <div className={styles.hoverWrapper}>
                                <div className={styles.container}>
                                    <svg className={styles.hoverIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                    <p className={styles.hoverText}>View Full Size</p>
                                </div>
                            </div>
                        </div>
                    </Link> : <PosterPlaceholder type="poster" title={title}/>
                }
            </div>
        </div>
    );
};