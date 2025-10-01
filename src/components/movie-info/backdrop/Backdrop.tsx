import Image from "next/image";
import {PosterPlaceholder} from "@/components/poster-placeholder/PosterPlaceholder";
import styles from "./Backdrop.module.css";

type Props = {
    url: string;
    title: string;
}

export const Backdrop = ({url, title}: Props) => {
    return (
        <div className={styles.container}>
            {url ? <Image src={url} alt={title} fill className="object-cover" priority/> : <PosterPlaceholder type='backdrop' title={title}/>}
            <div className={styles.topOverlay}/>
            <div className={styles.rightOverlay} />
        </div>
    );
};