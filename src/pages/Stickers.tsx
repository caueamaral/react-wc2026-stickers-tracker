import { useEffect, useState } from 'react'

import { Lock } from '../components/Lock'
import { Search } from '../components/Search'
import { FWCs } from '../components/FWCs'
import { Groups } from '../components/Groups'

import type { Dispatch, SetStateAction } from 'react'

type SelectedStickers = Record<string, number[]>

type StickersProps = {
    areStickersLocked: boolean
    setSearchTeam: Dispatch<SetStateAction<string>>
    searchTeam: string
    toggleStickersLock: () => void
}

const SELECTED_STICKERS_KEY = 'selectedStickers'

export function Stickers({
    areStickersLocked,
    setSearchTeam,
    searchTeam,
    toggleStickersLock
}: StickersProps) {
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

    useEffect(() => {
        localStorage.setItem(SELECTED_STICKERS_KEY, JSON.stringify(selectedStickers))
    }, [selectedStickers])

    return (
        <main className="flex flex-wrap justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            <Search
                searchTeam={searchTeam}
                setSearchTeam={setSearchTeam}
            />
            <FWCs
                selectedStickers={selectedStickers.FWC ?? []}
                onToggleSticker={number => onToggleSticker('FWC', number)}
                areStickersLocked={areStickersLocked}
            />
            <Groups
                selectedStickers={selectedStickers}
                onToggleSticker={onToggleSticker}
                areStickersLocked={areStickersLocked}
                searchTeam={searchTeam}
            />
        </main>
    )
}