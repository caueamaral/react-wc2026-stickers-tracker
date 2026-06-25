import { useStickersStore } from '../stores/stickersStore'

import { groups } from '../data/groups'
import { cocaColaStickers, fwcStickers, groupStickers } from '../data/stickers'

export function Statistics() {
    const selectedStickers = useStickersStore(state => state.selectedStickers)

    const teams = groups.reduce(
        (total, group) => total + group.teams.length,
        0
    )

    const totalStickers =
        teams * groupStickers.length +
        fwcStickers.length +
        cocaColaStickers.length

    const completedFWCStickers = fwcStickers.filter(number =>
        selectedStickers.FWC?.includes(number)
    ).length

    const completedTeamStickers = groups.reduce((total, group) => {
        const groupCompletedStickers = group.teams.reduce((teamTotal, team) => {
            const selectedTeamStickers = selectedStickers[team.code] ?? []

            const completedTeamStickers = groupStickers.filter(number =>
                selectedTeamStickers.includes(number)
            ).length

            return teamTotal + completedTeamStickers
        }, 0)

        return total + groupCompletedStickers
    }, 0)

    const completedCocaColaStickers = cocaColaStickers.filter(number =>
        selectedStickers.CocaCola?.includes(number)
    ).length

    const completedStickers =
        completedFWCStickers +
        completedTeamStickers +
        completedCocaColaStickers

    const missingStickers = totalStickers - completedStickers

    const percentageCompleted = completedStickers / totalStickers * 100

    const formattedPercentage =
        Number.isInteger(percentageCompleted)
            ? percentageCompleted.toString()
            : percentageCompleted.toFixed(2).replace('.', ',')

    return (
        <main className="flex flex-col items-center justify-center gap-10 px-10 overflow-hidden">
            <article className="flex flex-col gap-5 w-90">
                <section className="bg-white p-4 text-lg rounded-md">
                    <div>
                        {totalStickers} stickers in total
                    </div>
                    <div>
                        <span className="text-green-600">
                            {completedStickers} stickers completed
                        </span>
                    </div>
                    <div>
                        <span className="text-red-600">
                            {missingStickers} missing stickers
                        </span>
                    </div>
                </section>
                <section className="bg-white p-4 text-2xl text-center font-medium rounded-md">
                    {formattedPercentage}% completed
                </section>
            </article>
        </main>
    )
}
