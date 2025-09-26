import styles from "./MovieHubLogo.module.css";
import clsx from "clsx";

interface Props {
    className : string;
}

const MovieHubLogo = ( {className} :  Props) => (
    <svg
        className={clsx(
            {
                [styles.welcome] : className === 'welcome',
                [styles.header] : className === 'header',
            },
        )}
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="text-amber-400 dark:text-amber-300" stopColor="currentColor" />
                <stop offset="100%" className="text-red-500 dark:text-red-400" stopColor="currentColor" />
            </linearGradient>
        </defs>
        <text
            x="10"
            y="40"
            fontSize="32"
            fontWeight="bold"
            fill="url(#logoGradient)"
            fontFamily="system-ui, -apple-system, sans-serif"
        >
            MovieHub
        </text>
        <circle cx="180" cy="20" r="8" className="fill-amber-400 dark:fill-amber-300" />
        <circle cx="180" cy="40" r="6" className="fill-red-500 dark:fill-red-400" opacity="0.7" />
    </svg>
);

export default MovieHubLogo;