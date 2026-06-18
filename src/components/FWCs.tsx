import { fwcStickers } from '../data/stickers'
import { GroupHeader } from './GroupHeader'
import { StickerButton } from './StickerButton'

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
            <GroupHeader text="FWC" />
            <div className="flex flex-col gap-4">
                {[0, 5, 10, 15].map(start => (
                    <div key={start} className="flex gap-4">
                        {fwcStickers.slice(start, start + 5).map(number => (
                            <StickerButton
                                key={number}
                                number={number}
                                areStickersLocked={areStickersLocked}
                                selectedStickers={selectedStickers}
                                onToggleSticker={onToggleSticker}
                                label={number === 0 ? '00' : number.toString()}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </article>
    )
}