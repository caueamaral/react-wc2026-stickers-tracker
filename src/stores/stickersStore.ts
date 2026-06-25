import { create } from 'zustand'

import type { SelectedStickers } from '../types/selectedStickers'

type StickersStore = {
    selectedStickers: SelectedStickers
    toggleSticker: (teamCode: string, number: number) => void
}

const SELECTED_STICKERS_KEY = 'selectedStickers'

function getStoredSelectedStickers(): SelectedStickers {
    const stored = localStorage.getItem(SELECTED_STICKERS_KEY)

    if (!stored) {
        return {}
    }

    try {
        return JSON.parse(stored)
    } catch {
        return {}
    }
}

export const useStickersStore = create<StickersStore>((set) => ({
    selectedStickers: getStoredSelectedStickers(),

    toggleSticker: (teamCode, number) => {
        set((state) => {
            const teamStickers = state.selectedStickers[teamCode] ?? []

            const selectedStickers = {
                ...state.selectedStickers,

                [teamCode]: teamStickers.includes(number)
                    ? teamStickers.filter(n => n !== number)
                    : [...teamStickers, number]
            }

            localStorage.setItem(
                SELECTED_STICKERS_KEY,
                JSON.stringify(selectedStickers)
            )

            return { selectedStickers }
        })
    }
}))
