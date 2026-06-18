import { groups } from '../data/groups'
import { GroupHeader } from './GroupHeader'
import { Team } from './Team'

type GroupsProps = {
    selectedStickers: Record<string, number[]>
    onToggleSticker: (temCode: string, number: number) => void
    areStickersLocked: boolean
    searchTeam: string
}

export function Groups({
    selectedStickers,
    onToggleSticker,
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