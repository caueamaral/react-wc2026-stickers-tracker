import { Groups } from './Groups'

type MainProps = {
    searchTeam: string
}

export function Main({ searchTeam }: MainProps) {
    return (
        <main className="flex flex-wrap justify-center gap-10 px-10">
            <Groups searchTeam={searchTeam} />
        </main>
    )
}