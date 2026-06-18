import { fwcStickers } from '../data/stickers'

type FWCsProps = {
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
    areStickersLocked: boolean
}

export function FWCs({
    selectedStickers,
    onToggleSticker,
    areStickersLocked
}: FWCsProps) {
    return (
        <article className="bg-white gap-10 p-5 rounded-md w-90">
            <header className="mb-4">
                <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-3">
                    FWC
                </h2>
            </header>
            <div className="flex flex-col gap-4">
                {[0, 5, 10, 15].map(start => (
                    <div key={start} className="flex gap-4">
                        {fwcStickers.slice(start, start + 5).map(number => (
                            <button
                                key={number}
                                disabled={areStickersLocked}
                                className={`
                                    ${selectedStickers.includes(number)
                                        ? 'selected'
                                        : ''
                                    }
                                    ${areStickersLocked
                                        ? 'cursor-not-allowed'
                                        : 'cursor-pointer hover:bg-neutral-200'
                                    }
                                    text-center flex flex-1 aspect-square items-center justify-center rounded-full number bg-neutral-100
                                `}
                                onClick={() => onToggleSticker(number)}
                            >
                                {number === 0 ? '00' : number}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </article>
    )
}