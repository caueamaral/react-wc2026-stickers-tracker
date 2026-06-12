import { useState, useEffect } from 'react'

import { groups } from '../data/groups'
import { Team } from './Team'

const SELECTED_STICKERS_KEY = 'selectedStickers'

type SelectedStickers = Record<string, number[]>

type GroupsProps = {
    searchTeam: string
}

export function Groups({ searchTeam }: GroupsProps) {
    const [selectedStickers, setSelectedStickers] = useState<SelectedStickers>(() => {
        const stored = localStorage.getItem(SELECTED_STICKERS_KEY)

        return stored ? JSON.parse(stored) : {}
    })

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

    useEffect(() => {
        localStorage.setItem(SELECTED_STICKERS_KEY, JSON.stringify(selectedStickers))
    }, [selectedStickers])

    const normalizedSearch = searchTeam.trim().toUpperCase()

    const filteredGroups = groups
        .map(group => ({
            ...group,
            teams: group.teams.filter(team =>
                normalizedSearch === '' ||
                normalizedSearch === team.code ||
                team.name.toUpperCase().includes(normalizedSearch)
            )
        }))
        .filter(group => group.teams.length > 0)

    return (
        filteredGroups.map(group => (
            <article key={group.letter} className="bg-white gap-10 p-5 rounded-md w-90">
                <header className="mb-4">
                    <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-5">
                        Group {group.letter}
                    </h2>
                </header>
                <div className="flex flex-col gap-1">
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