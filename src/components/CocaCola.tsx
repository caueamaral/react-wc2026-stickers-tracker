import { GroupHeader } from './GroupHeader'
import { StickerButton } from './StickerButton'

type CocaColaProps = {
    stickers: number[]
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
    areStickersLocked: boolean
}

export function CocaCola({
    stickers,
    selectedStickers,
    onToggleSticker,
    areStickersLocked
}: CocaColaProps) {
    return (
        <article className="bg-white gap-10 p-5 rounded-md w-90">
            <GroupHeader text="Coca Cola" />
            <div className="grid grid-cols-5 gap-4">
                {stickers.map(number => (
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
        </article>
    )
}