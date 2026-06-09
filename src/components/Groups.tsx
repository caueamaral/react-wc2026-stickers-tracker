import { useState } from 'react'

import { groups } from '../data/groups'
import { Team } from './Team'

type SelectedStickers = Record<string, number[]>

export function Groups() {
    const [selectedStickers, setSelectedStickers] = useState<SelectedStickers>({})

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

    return (
        groups.map(group => (
            <article key={group.letter} className="bg-white gap-10 p-5 rounded-md w-100">
                <header>
                    <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-5">
                        Group {group.letter}
                    </h2>
                </header>
                <div className="flex flex-col gap-10">
                    {group.teams.map(team => (
                        <Team
                            key={team.code}
                            team={team}
                            onToggleSticker={(number) => onToggleSticker(team.code, number)}
                            selectedStickers={selectedStickers[team.code] ?? []}
                        />
                    ))}
                </div>
            </article>
        ))
    )
}