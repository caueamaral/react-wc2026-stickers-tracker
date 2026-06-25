import { useStickersLockStore } from '../stores/stickersLockStore'

type StickerButtonProps = {
    number: number
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
    label?: string
}

export function StickerButton({
    number,
    selectedStickers,
    onToggleSticker,
    label
}: StickerButtonProps) {
    const areStickersLocked = useStickersLockStore(state => state.areStickersLocked)

    return (
        <button
            disabled={areStickersLocked}
            className={`
                ${
                    selectedStickers.includes(number)
                    ? 'selected'
                    : ''
                }
                ${areStickersLocked
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer hover:bg-neutral-200'
                }
                aspect-square rounded-full number bg-neutral-100
            `}
            onClick={() => onToggleSticker(number)}
        >
            {label ?? number}
        </button>
    )
}