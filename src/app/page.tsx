import MovieHubLogo from "@/components/movie-hub-logo/MovieHubLogo";

export default function HomePage() {
    return (
        <>
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`
                    }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                <div className="text-center space-y-12">

                    <div className="space-y-6">
                        <MovieHubLogo className="h-16 w-auto mx-auto sm:h-20" />
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Welcome to{' '}
                                <span className="bg-gradient-to-r from-amber-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  MovieHub
                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Discover thousands of movies, explore genres, and find your next favorite film
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
                            Log In
                        </button>

                        <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-amber-400 dark:hover:border-amber-400 text-slate-700 dark:text-slate-200 font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600">
                            Continue as Guest
                        </button>
                    </div>

                    <div className="pt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl mx-auto flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0v16a2 2 0 002 2h6a2 2 0 002-2V4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Explore</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Browse thousands of movies by genre</p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl mx-auto flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Search</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Find movies by title or keyword</p>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mx-auto flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">Discover</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Get detailed movie information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}