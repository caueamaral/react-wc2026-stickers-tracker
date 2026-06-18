import { groups } from '../data/groups'
import { cocaColaStickers, fwcStickers, groupStickers } from '../data/stickers'

type SelectedStickers = Record<string, number[]>

export function Statistics() {
    const teams = groups.reduce(
        (total, group) => total + group.teams.length,
        0
    )

    const totalStickers =
        teams * groupStickers.length +
        fwcStickers.length +
        cocaColaStickers.length
    
    const stored = localStorage.getItem('selectedStickers')
    let selectedStickers: SelectedStickers = {}

    if (stored) {
        try {
            selectedStickers = JSON.parse(stored)
        }
        catch {
            selectedStickers = {}
        }
    }

    const completedStickers = Object.values(selectedStickers).reduce(
        (total, stickers) => total + stickers.length,
        0
    )

    const missingStickers = totalStickers - completedStickers

    const percentageCompleted = (completedStickers / totalStickers * 100).toFixed(2).replace('.', ',')

    return (
        <main className="flex flex-col items-center justify-center gap-5 px-10">
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
                    {percentageCompleted}% completed
                </section>
            </article>
        </main>
    )
}