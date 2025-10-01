import styles from "./PosterPlaceholder.module.css";

type Props = {
    type: "poster" | "backdrop";
    title: string;
}

export const PosterPlaceholder = ({type, title}: Props) => {
    const isPoster = type === "poster";
    return (
        <svg
            viewBox={isPoster ? "0 0 300 450" : "0 0 780 439"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.poster}
            aria-label={title}
        >
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                <linearGradient id="filmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>

                <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
            </defs>

            <rect
                width="100%"
                height="100%"
                fill="url(#bgGradient)"
            />

            <g opacity="0.05">
                {isPoster ? (
                    <>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <circle
                                key={i}
                                cx={50 + (i % 3) * 100}
                                cy={75 + Math.floor(i / 3) * 100}
                                r="40"
                                fill="white"
                            />
                        ))}
                    </>
                ) : (
                    <>
                        {Array.from({ length: 20 }).map((_, i) => (
                            <circle
                                key={i}
                                cx={78 + (i % 5) * 156}
                                cy={73 + Math.floor(i / 5) * 87}
                                r="35"
                                fill="white"
                            />
                        ))}
                    </>
                )}
            </g>

            <g transform={isPoster ? "translate(150, 225)" : "translate(390, 219.5)"}>
                <rect
                    x="-60"
                    y="-80"
                    width="120"
                    height="160"
                    rx="8"
                    fill="url(#filmGradient)"
                    opacity="0.2"
                />

                {Array.from({ length: 4 }).map((_, i) => (
                    <g key={i}>
                        <rect
                            x="-55"
                            y={-65 + i * 45}
                            width="10"
                            height="8"
                            rx="2"
                            fill="url(#filmGradient)"
                        />
                        <rect
                            x="45"
                            y={-65 + i * 45}
                            width="10"
                            height="8"
                            rx="2"
                            fill="url(#filmGradient)"
                        />
                    </g>
                ))}

                <circle
                    cx="0"
                    cy="0"
                    r="35"
                    fill="url(#filmGradient)"
                    opacity="0.9"
                />
                <path
                    d="M-10,-15 L-10,15 L15,0 Z"
                    fill="white"
                    transform="translate(5, 0)"
                />
            </g>

            <g
                transform={isPoster ? "translate(150, 100)" : "translate(390, 120)"}
                opacity="0.15"
            >
                <rect x="-25" y="-15" width="50" height="30" rx="4" fill="#f59e0b" />
                <circle cx="30" cy="0" r="12" fill="#f59e0b" />
                <circle cx="30" cy="0" r="8" fill="#1e293b" />
                <rect x="-35" y="-8" width="8" height="16" fill="#f59e0b" />
            </g>

            <text
                x="50%"
                y={isPoster ? "75%" : "70%"}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize={isPoster ? "18" : "28"}
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
            >
                {title}
            </text>

            <text
                x="50%"
                y={isPoster ? "82%" : "77%"}
                textAnchor="middle"
                fill="#64748b"
                fontSize={isPoster ? "14" : "20"}
                fontFamily="system-ui, -apple-system, sans-serif"
            >
                MovieHub
            </text>

            <rect
                width="100%"
                height="100%"
                fill="url(#shineGradient)"
            />

            <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                opacity="0.5"
            />
        </svg>
    );
}