import { create } from 'zustand'
import { useStickersLockStore } from './stickersLockStore'

import type { Page } from '../types/page'

type CurrentPageStore = {
    currentPage: Page
    changePage: (page: Page) => void
}

export const useCurrentPageStore = create<CurrentPageStore>(set => ({
    currentPage: 'stickers',
    changePage: (page) => {
        useStickersLockStore.getState().lockStickers()
        set({ currentPage: page })
    }
}))