import { useEffect, useState } from 'react'

import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import type { SelectedStickers } from '../types/selectedStickers'

import { Lock } from '../components/Lock'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

type StickersProps = {
    areStickersLocked: boolean
    searchTeam: string
    toggleStickersLock: () => void
}

const SELECTED_STICKERS_KEY = 'selectedStickers'

export function MissingStickers({
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

    function getMissingTeamStickers(teamCode: string) {
        return groupStickers.filter(number =>
            !selectedStickers[teamCode]?.includes(number)
        )
    }

    const missingFWCStickers = fwcStickers.filter(number =>
        !selectedStickers.FWC?.includes(number)
    )

    const missingGroups = groups
        .map(group => ({
            ...group,
            teams: group.teams.filter(team => {
                const missingTeamStickers = groupStickers.filter(number =>
                    !selectedStickers[team.code]?.includes(number)
                )

                return missingTeamStickers.length > 0
            })
        }))
        .filter(group => group.teams.length > 0)

    const missingCocaColaStickers = cocaColaStickers.filter(number =>
        !selectedStickers.CocaCola?.includes(number)
    )

    const fwcStickersCompleted =
        fwcStickers.length === (selectedStickers.FWC ?? []).length

    const cocaColaStickersCompleted =
        cocaColaStickers.length === (selectedStickers.CocaCola ?? []).length

    useEffect(() => {
        localStorage.setItem(SELECTED_STICKERS_KEY, JSON.stringify(selectedStickers))
    }, [selectedStickers])

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            {!fwcStickersCompleted && (
                <FWCs
                    stickers={missingFWCStickers}
                    selectedStickers={selectedStickers.FWC ?? []}
                    onToggleSticker={number => onToggleSticker('FWC', number)}
                    areStickersLocked={areStickersLocked}
                />
            )}
            <div className="flex flex-wrap items-start justify-center gap-10">
                <Groups
                    groups={missingGroups}
                    selectedStickers={selectedStickers}
                    onToggleSticker={onToggleSticker}
                    getTeamStickers={getMissingTeamStickers}
                    areStickersLocked={areStickersLocked}
                    searchTeam={searchTeam}
                />
                {!cocaColaStickersCompleted && (
                    <CocaCola
                        stickers={missingCocaColaStickers}
                        selectedStickers={selectedStickers.CocaCola ?? []}
                        onToggleSticker={number => onToggleSticker('CocaCola', number)}
                        areStickersLocked={areStickersLocked}
                    />
                )}
            </div>
        </main>
    )
}