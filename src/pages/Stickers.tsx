import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import { useStickersStore } from '../stores/stickersStore'

import { Lock } from '../components/Lock'
import { Search } from '../components/Search'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

export function Stickers() {
    const selectedStickers = useStickersStore(state => state.selectedStickers)
    const toggleSticker = useStickersStore(state => state.toggleSticker)

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10">
            <Lock />
            <Search />
            <div className="flex flex-wrap items-start justify-center gap-10">
                <FWCs
                    stickers={fwcStickers}
                    selectedStickers={selectedStickers.FWC ?? []}
                    onToggleSticker={number => toggleSticker('FWC', number)}
                />
                <Groups
                    groups={groups}
                    selectedStickers={selectedStickers}
                    onToggleSticker={toggleSticker}
                    getTeamStickers={() => groupStickers}
                />
                <CocaCola
                    stickers={cocaColaStickers}
                    selectedStickers={selectedStickers.CocaCola ?? []}
                    onToggleSticker={number => toggleSticker('CocaCola', number)}
                />
            </div>
        </main>
    )
}
