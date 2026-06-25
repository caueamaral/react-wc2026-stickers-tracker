import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import { useStickersStore } from '../stores/stickersStore'

import { Lock } from '../components/Lock'
import { Search } from '../components/Search'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

type StickersProps = {
    areStickersLocked: boolean
    toggleStickersLock: () => void
}

export function Stickers({
    areStickersLocked,
    toggleStickersLock
}: StickersProps) {
    const selectedStickers = useStickersStore(state => state.selectedStickers)
    const toggleSticker = useStickersStore(state => state.toggleSticker)

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            <Search />
            <div className="flex flex-wrap items-start justify-center gap-10">
                <FWCs
                    stickers={fwcStickers}
                    selectedStickers={selectedStickers.FWC ?? []}
                    onToggleSticker={number => toggleSticker('FWC', number)}
                    areStickersLocked={areStickersLocked}
                />
                <Groups
                    groups={groups}
                    selectedStickers={selectedStickers}
                    onToggleSticker={toggleSticker}
                    getTeamStickers={() => groupStickers}
                    areStickersLocked={areStickersLocked}
                />
                <CocaCola
                    stickers={cocaColaStickers}
                    selectedStickers={selectedStickers.CocaCola ?? []}
                    onToggleSticker={number => toggleSticker('CocaCola', number)}
                    areStickersLocked={areStickersLocked}
                />
            </div>
        </main>
    )
}
