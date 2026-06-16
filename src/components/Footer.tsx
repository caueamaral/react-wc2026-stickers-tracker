import type { Page } from '../types/page'

type FooterProps = {
    currentPage: Page
    onNavigate: (page: Page) => void
}

export function Footer({ currentPage, onNavigate }: FooterProps) {
    return (
        <footer className="bg-gray-100 h-20 flex items-stretch fixed bottom-0 left-0 w-full">
            <button
                onClick={() => onNavigate('stickers')}
                className={`
                    flex flex-col items-center justify-center gap-1 w-1/2 border-r border-gray-300 cursor-pointer
                    ${currentPage === 'stickers' ? 'text-gray-600' : 'text-gray-300'}
                `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="text-sm">Stickers</span>
            </button>
            <button
                onClick={() => onNavigate('statistics')}
                className={`
                    flex flex-col items-center justify-center gap-1 w-1/2 border-r border-gray-300 cursor-pointer
                    ${currentPage === 'statistics' ? 'text-gray-600' : 'text-gray-300'}
                `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <span className="text-sm">Statistics</span>
            </button>
        </footer>
    )
}