'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface Genre {
    id: number
    name: string
}

interface GenresDropdownProps {
    genres: Genre[] // Дані з Server Component
    isMobile?: boolean
}

const GenresDropdown = ({
                            genres,
                            isMobile = false,
                        }: GenresDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    if (isMobile) {
        // Мобільна версія - просто список
        return (
            <div className="space-y-2">
                <div className="font-medium text-slate-900 dark:text-slate-100 mb-3">Genres</div>
                <div className="grid grid-cols-2 gap-2">
                    {genres.map((genre) => (
                        <button
                            key={genre.id}
                            className="text-left px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200 text-sm"
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    // Desktop версія - dropdown
    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-200"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>Genres</span>
                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50 py-2">
                    <div className="max-h-120 overflow-y-auto py-2">
                        <div className="grid grid-cols-2 gap-1 px-2">
                            {genres.map((genre) => (
                                <button
                                    key={genre.id}
                                    className="text-left px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-300 rounded-lg transition-colors duration-200 text-sm font-medium"
                                >
                                    {genre.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GenresDropdown