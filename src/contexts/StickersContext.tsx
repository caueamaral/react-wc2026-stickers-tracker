import { createContext, useContext, useEffect, useState } from 'react'

import type { ReactNode } from 'react'
import type { SelectedStickers } from '../types/selectedStickers'

type StickersProviderProps = {
    children: ReactNode
}

type StickersContextValue = {
    selectedStickers: SelectedStickers
    onToggleSticker: (teamCode: string, number: number) => void
}

export const StickersContext = createContext<StickersContextValue | null>(null)

const SELECTED_STICKERS_KEY = 'selectedStickers'

export function StickersProvider({ children }: StickersProviderProps) {
    const [selectedStickers, setSelectedStickers] = useState<SelectedStickers>(() => {
        const stored = localStorage.getItem(SELECTED_STICKERS_KEY)

        if (!stored) {
            return {}
        }

        try {
            return JSON.parse(stored)
        } catch {
            return {}
        }
    })

    useEffect(() => {
        localStorage.setItem(SELECTED_STICKERS_KEY, JSON.stringify(selectedStickers))
    }, [selectedStickers])

    function onToggleSticker(teamCode: string, number: number) {
        setSelectedStickers(current => {
            const teamStickers = current[teamCode] ?? []

            return {
                ...current,

                [teamCode]: teamStickers.includes(number)
                    ? teamStickers.filter(n => n !== number)
                    : [...teamStickers, number]
            }
        })
    }

    return (
        <StickersContext.Provider value={{
            selectedStickers,
            onToggleSticker
        }}>
            {children}
        </StickersContext.Provider>
    )
}

export function useStickers() {
    const context = useContext(StickersContext)

    if (!context) {
        throw new Error('useStickers must be used inside StickersProvider')
    }

    return context
}