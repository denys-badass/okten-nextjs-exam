import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";

interface User {
    name: string
    avatar?: string
}

interface Genre {
    id: number
    name: string
}

interface HeaderProps {
    user?: User | null
    genres?: Genre[]
}

async function fetchGenres(): Promise<Genre[]> {
    return [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' }
    ]
}

const Header = async ({ user = null }: HeaderProps) => {
    // Server-side API виклик для жанрів
    const genres = await fetchGenres()

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <MovieHubLogo className="h-8 w-auto" />
                    </div>

                    {/* Desktop Navigation - Server Component */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="/movies"
                            className="text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200"
                        >
                            Movies
                        </a>
                        {/*<GenresDropdown genres={genres} />*/}
                    </nav>

                    {/* Desktop Search - Server Component passes to Client */}
                    <div className="hidden md:block flex-1 max-w-lg mx-8">
                        {/*<SearchForm />*/}
                    </div>

                    {/* Desktop User Info & Theme Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/*<UserInfo user={user} />*/}
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button + Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        {/*<MobileMenu user={user} genres={genres} />*/}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header