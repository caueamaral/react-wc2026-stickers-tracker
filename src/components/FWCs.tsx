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
            <div className="flex">
                {
                    fwcStickers.map(number => (
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
                    ))
                }
            </div>
        </article>
    )
}