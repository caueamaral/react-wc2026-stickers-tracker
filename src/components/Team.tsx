import { stickers } from '../data/stickers'
import type { Team } from '../types/team'

type TeamProps = {
    team: Team
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
}

export function Team({ team, selectedStickers, onToggleSticker }: TeamProps) {
    return (
        <details key={team.name} className="flex flex-col" open>
            <summary className="font-bold py-3">
                {team.code} - {team.name} {team.flag}
            </summary>
            <div className="flex flex-col gap-5">
                {[0, 5, 10, 15].map(start => (
                    <div key={start} className="flex gap-5">
                        {stickers.slice(start, start + 5).map(number => (
                            <span
                                key={number}
                                onClick={() => onToggleSticker(number)}
                                className={`${selectedStickers.includes(number) ? 'selected' : ''} bg-neutral-100 text-center flex flex-1 aspect-square items-center justify-center cursor-pointer rounded-full number`}
                            >
                                {number}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </details>
    )
}