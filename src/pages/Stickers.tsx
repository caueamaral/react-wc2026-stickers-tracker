import { Lock } from '../components/Lock'
import { Search } from '../components/Search'
import { Groups } from '../components/Groups'

import type { Dispatch, SetStateAction } from 'react'

type StickersProps = {
    areStickersLocked: boolean
    setSearchTeam: Dispatch<SetStateAction<string>>
    searchTeam: string
    toggleStickersLock: () => void
}

export function Stickers({
    areStickersLocked,
    setSearchTeam,
    searchTeam,
    toggleStickersLock
}: StickersProps) {
    return (
        <main className="flex flex-wrap justify-center gap-10 px-10">
            <Lock
                areStickersLocked={areStickersLocked}
                onToggle={toggleStickersLock}
            />
            <Search
                searchTeam={searchTeam}
                setSearchTeam={setSearchTeam}
            />
            <Groups
                areStickersLocked={areStickersLocked}
                searchTeam={searchTeam}
            />
        </main>
    )
}