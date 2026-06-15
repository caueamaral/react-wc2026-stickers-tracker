import { Groups } from './Groups'

type MainProps = {
    areStickersLocked: boolean
    searchTeam: string
}

export function Main({ areStickersLocked, searchTeam }: MainProps) {
    return (
        <main className="flex flex-wrap justify-center gap-10 px-10">
            <Groups
                areStickersLocked={areStickersLocked}
                searchTeam={searchTeam}
            />
        </main>
    )
}