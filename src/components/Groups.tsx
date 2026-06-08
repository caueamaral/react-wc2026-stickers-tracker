import { groups } from '../data/groups'
import { Team } from './Team'

export function Groups() {
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
                        <Team key={team.code} team={team} />
                    ))}
                </div>
            </article>
        ))
    )
}