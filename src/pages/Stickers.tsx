import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import { useStickers } from '../contexts/StickersContext'

import { Lock } from '../components/Lock'
import { Search } from '../components/Search'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

import type { Dispatch, SetStateAction } from 'react'

type StickersProps = {
    areStickersLocked: boolean
    setSearchTeam: Dispatch<SetStateAction<string>>
    searchTeam: string
    toggleStickersLock: () => void
}

export function Stickers({
    areStickersLocked,
    setSearchTeam,
    searchTeam,
    toggleStickersLock
}: StickersProps) {
    const { selectedStickers, onToggleSticker } = useStickers()

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            <Search
                searchTeam={searchTeam}
                setSearchTeam={setSearchTeam}
            />
            <div className="flex flex-wrap items-start justify-center gap-10">
                <FWCs
                    stickers={fwcStickers}
                    selectedStickers={selectedStickers.FWC ?? []}
                    onToggleSticker={number => onToggleSticker('FWC', number)}
                    areStickersLocked={areStickersLocked}
                />
                <Groups
                    groups={groups}
                    selectedStickers={selectedStickers}
                    onToggleSticker={onToggleSticker}
                    getTeamStickers={() => groupStickers}
                    areStickersLocked={areStickersLocked}
                    searchTeam={searchTeam}
                />
                <CocaCola
                    stickers={cocaColaStickers}
                    selectedStickers={selectedStickers.CocaCola ?? []}
                    onToggleSticker={number => onToggleSticker('CocaCola', number)}
                    areStickersLocked={areStickersLocked}
                />
            </div>
        </main>
    )
}