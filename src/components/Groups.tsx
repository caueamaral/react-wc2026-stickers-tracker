import type { Group } from '../data/groups'

import { groupStickers } from '../data/stickers'

import { GroupHeader } from './GroupHeader'
import { Team } from './Team'

type GroupsProps = {
    groups: Group[]
    selectedStickers: Record<string, number[]>
    onToggleSticker: (teamCode: string, number: number) => void
    getTeamStickers: (teamCode: string) => number[]
    areStickersLocked: boolean
    searchTeam: string
}

export function Groups({
    groups,
    selectedStickers,
    onToggleSticker,
    getTeamStickers,
    areStickersLocked,
    searchTeam
}: GroupsProps) {
    const normalizedSearch = searchTeam.trim().toUpperCase()

    const filteredGroups = groups
        .map(group => ({
            ...group,
            teams: group.teams.filter(team =>
                normalizedSearch === '' ||
                (
                    normalizedSearch.length >= 3 &&
                    team.name.toUpperCase().includes(normalizedSearch)
                )
            )
        }))
        .filter(group => group.teams.length > 0)

    return (
        filteredGroups.map(group => (
            <article key={group.letter} className="bg-white gap-10 p-5 rounded-md w-90">
                <GroupHeader text={`Group ${group.letter}`} />
                <div className="flex flex-col gap-1">
                    {group.teams.map(team => (
                        <Team
                            stickers={getTeamStickers(team.code)}
                            key={team.code}
                            onToggleSticker={(number) => onToggleSticker(team.code, number)}
                            areStickersLocked={areStickersLocked}
                            team={team}
                            selectedStickers={selectedStickers[team.code] ?? []}
                        />
                    ))}
                </div>
            </article>
        ))
    )
}