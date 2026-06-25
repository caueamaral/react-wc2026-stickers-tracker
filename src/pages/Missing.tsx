import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import { useStickersStore } from '../stores/stickersStore'

import { Lock } from '../components/Lock'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

export function Missing() {
    const selectedStickers = useStickersStore(state => state.selectedStickers)
    const toggleSticker = useStickersStore(state => state.toggleSticker)

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

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10 overflow-hidden">
            <Lock />
            {!fwcStickersCompleted && (
                <FWCs
                    stickers={missingFWCStickers}
                    selectedStickers={selectedStickers.FWC ?? []}
                    onToggleSticker={number => toggleSticker('FWC', number)}
                />
            )}
            <div className="flex flex-wrap items-start justify-center gap-10">
                <Groups
                    groups={missingGroups}
                    selectedStickers={selectedStickers}
                    onToggleSticker={toggleSticker}
                    getTeamStickers={getMissingTeamStickers}
                />
                {!cocaColaStickersCompleted && (
                    <CocaCola
                        stickers={missingCocaColaStickers}
                        selectedStickers={selectedStickers.CocaCola ?? []}
                        onToggleSticker={number => toggleSticker('CocaCola', number)}
                    />
                )}
            </div>
        </main>
    )
}
