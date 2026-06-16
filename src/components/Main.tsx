import { Stickers } from '../pages/Stickers'
import { Statistics } from '../pages/Statistics'

import type { Page } from '../types/page'

type MainProps = {
    currentPage: Page
    areStickersLocked: boolean
    searchTeam: string
}

export function Main({
    currentPage,
    areStickersLocked,
    searchTeam
}: MainProps) {
    return (
        <main className="flex flex-wrap justify-center gap-10 px-10">
            {currentPage === 'stickers' && (
                <Stickers
                    areStickersLocked={areStickersLocked}
                    searchTeam={searchTeam}
                />
            )}

            {currentPage === 'statistics' && (
                <Statistics />
            )}
        </main>
    )
}