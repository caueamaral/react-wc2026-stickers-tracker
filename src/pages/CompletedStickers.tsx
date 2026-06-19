import { useEffect, useState } from 'react'

import { fwcStickers, cocaColaStickers } from '../data/stickers'

import { Lock } from '../components/Lock'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

type SelectedStickers = Record<string, number[]>

type StickersProps = {
    areStickersLocked: boolean
    searchTeam: string
    toggleStickersLock: () => void
}

const SELECTED_STICKERS_KEY = 'selectedStickers'

export function CompletedStickers({
    areStickersLocked,
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

    const completedFWCStickers = fwcStickers.filter(number =>
        selectedStickers.FWC?.includes(number)
    )

    const completedCocaColaStickers = cocaColaStickers.filter(number =>
        selectedStickers.CocaCola?.includes(number)
    )

    useEffect(() => {
        localStorage.setItem(SELECTED_STICKERS_KEY, JSON.stringify(selectedStickers))
    }, [selectedStickers])

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            <div className="flex flex-wrap items-start justify-center gap-10">
                <FWCs
                    stickers={completedFWCStickers}
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
                <CocaCola
                    stickers={completedCocaColaStickers}
                    selectedStickers={selectedStickers.CocaCola ?? []}
                    onToggleSticker={number => onToggleSticker('CocaCola', number)}
                    areStickersLocked={areStickersLocked}
                />
            </div>
        </main>
    )
}