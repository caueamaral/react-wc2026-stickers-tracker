import { create } from 'zustand'

import type { Page } from '../types/page'

type CurrentPageStore = {
    currentPage: Page
    setCurrentPage: (page: Page) => void
}

export const useCurrentPageStore = create<CurrentPageStore>(set => ({
    currentPage: 'stickers',
    setCurrentPage: (page) => set({ currentPage: page })
}))