export default function Icon() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b"/>
                    <stop offset="50%" stopColor="#ef4444"/>
                    <stop offset="100%" stopColor="#ec4899"/>
                </linearGradient>
                <linearGradient id="filmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24"/>
                    <stop offset="100%" stopColor="#f87171"/>
                </linearGradient>
            </defs>

            <circle cx="32" cy="32" r="32" fill="url(#bgGradient)"/>
            <rect x="16" y="14" width="32" height="36" rx="3" fill="url(#filmGradient)" opacity="0.3"/>

            <rect x="18" y="18" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="18" y="26" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="18" y="34" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="18" y="42" width="3" height="3" rx="1" fill="white" opacity="0.9"/>

            <rect x="43" y="18" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="43" y="26" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="43" y="34" width="3" height="3" rx="1" fill="white" opacity="0.9"/>
            <rect x="43" y="42" width="3" height="3" rx="1" fill="white" opacity="0.9"/>

            <circle cx="32" cy="32" r="12" fill="white" opacity="0.95"/>
            <path d="M28 24 L28 40 L42 32 Z" fill="url(#bgGradient)"/>

            <path d="M 32 0 A 32 32 0 0 1 52 12" stroke="white" strokeWidth="2" opacity="0.3" fill="none"/>
        </svg>
    )
}