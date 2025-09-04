import {heroui} from "@heroui/react";

module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        primary: {
                            50: '#e3fafc',
                            100: '#c5f6fa',
                            200: '#99e9f2',
                            300: '#66d9e8',
                            400: '#3bc9db',
                            500: '#22b8cf',
                            600: '#15aabf',
                            700: '#1098ad',
                            800: '#0c8599',
                            900: '#0b7285',
                            DEFAULT: "#22b8cf",
                        }
                    }
                },
                dark: {
                    colors: {
                        primary: {
                            50: '#e7f5ff',
                            100: '#d0ebff',
                            200: '#a5d8ff',
                            300: '#74c0fc',
                            400: '#4dabf7',
                            500: '#339af0',
                            600: '#228be6',
                            700: '#1c7ed6',
                            800: '#1971c2',
                            900: '#1864ab',
                            DEFAULT: "#1c7ed6",
                        }
                    }
                }
            }
        }),
    ],
};