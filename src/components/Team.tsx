import { groupStickers } from '../data/stickers'
import { StickerButton } from './StickerButton'
import type { Team } from '../types/team'

type TeamProps = {
    areStickersLocked: boolean
    team: Team
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
}

export function Team({ areStickersLocked, team, selectedStickers, onToggleSticker }: TeamProps) {
    return (
        <details key={team.name} className="flex flex-col" open>
            <summary className="font-bold py-3 cursor-pointer">
                <span className="inline-flex items-center gap-1 align-middle">
                    <span>{team.code}</span>
                    -
                    <span>{team.name}</span>
                    <span className="text-3xl">{team.flag}</span>
                </span>
            </summary>
            <div className="grid grid-cols-5 gap-4 mb-5">
                {groupStickers.map(number => (
                    <StickerButton
                        key={number}
                        number={number}
                        areStickersLocked={areStickersLocked}
                        selectedStickers={selectedStickers}
                        onToggleSticker={onToggleSticker}
                    />
                ))}
            </div>
        </details>
    )
}