import { stickers } from '../data/stickers'
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
            <div className="flex flex-col gap-4 mb-5">
                {[0, 5, 10, 15].map(start => (
                    <div key={start} className="flex gap-4">
                        {stickers.slice(start, start + 5).map(number => (
                            <button
                                disabled={areStickersLocked}
                                key={number}
                                className={`
                                    ${selectedStickers.includes(number) ? 'selected' : ''}
                                    ${areStickersLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-200'}
                                    text-center flex flex-1 aspect-square items-center justify-center rounded-full number bg-neutral-100
                                `}
                                onClick={() => {

                                    if (!areStickersLocked) {
                                        onToggleSticker(number)
                                    }
                                }}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </details>
    )
}