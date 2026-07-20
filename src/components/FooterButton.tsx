import { useCurrentPageStore } from '../stores/currentPageStore'

import type { ReactNode } from 'react'
import type { Page } from '../types/page'

type FooterButtonProps = {
    page: Page
    text: string
    icon: ReactNode
}

export function FooterButton({ page, text, icon }: FooterButtonProps) {
    const currentPage = useCurrentPageStore(state => state.currentPage)
    const changePage = useCurrentPageStore(state => state.changePage)

    return (
        <button
            onClick={() => changePage(page)}
            className={`
                flex flex-col flex-1 items-center justify-center gap-1 border-r border-gray-300 cursor-pointer
                ${currentPage === page ? 'text-gray-700' : 'text-gray-300'}
            `}
        >
            {icon}
            <span className="text-sm">{text}</span>
        </button>
    )
}