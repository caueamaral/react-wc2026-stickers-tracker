import { useState } from 'react'

import { stickers } from '../data/stickers'
import type { Team } from '../types/team'

type TeamProps = {
    team: Team
}

export function Team({ team }: TeamProps) {
    const [selectedStickers, setSelectedStickers] = useState<number[]>([])

    function selectStickerHandler(number: number) {
        setSelectedStickers(current =>
            current.includes(number)
                ? current.filter(n => n !== number)
                : [...current, number]
        )
    }

    return (
        <section key={team.name} className="flex flex-col">
            <div className="font-bold py-3">
                {team.code} - {team.name} {team.flag}
            </div>
            <div className="flex flex-col gap-5">
                {[0, 5, 10, 15].map(start => (
                    <div key={start} className="flex gap-5">
                        {stickers.slice(start, start + 5).map(number => (
                            <span
                                key={number}
                                onClick={() => selectStickerHandler(number)}
                                className={`${selectedStickers.includes(number) ? 'selected' : ''} bg-neutral-100 px-2 py-4 text-center flex-1 w-[10%] cursor-pointer rounded-full number`}
                            >
                                {number}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}