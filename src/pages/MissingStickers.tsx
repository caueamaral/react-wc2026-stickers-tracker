import { fwcStickers, groupStickers, cocaColaStickers } from '../data/stickers'
import { groups } from '../data/groups'

import { useStickersStore } from '../stores/stickersStore'

import { Lock } from '../components/Lock'
import { FWCs } from '../components/FWCs'
import { CocaCola } from '../components/CocaCola'
import { Groups } from '../components/Groups'

type StickersProps = {
    areStickersLocked: boolean
    searchTeam: string
    toggleStickersLock: () => void
}

export function MissingStickers({
    areStickersLocked,
    searchTeam,
    toggleStickersLock
}: StickersProps) {
    const selectedStickers = useStickersStore(state => state.selectedStickers)
    const onToggleSticker = useStickersStore(state => state.onToggleSticker)

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
