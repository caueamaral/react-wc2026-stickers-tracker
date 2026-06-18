type StickerButtonProps = {
    number: number
    areStickersLocked: boolean
    selectedStickers: number[]
    onToggleSticker: (number: number) => void
    label?: string
}

export function StickerButton({
    number,
    areStickersLocked,
    selectedStickers,
    onToggleSticker,
    label
}: StickerButtonProps) {
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
                text-center flex flex-1 aspect-square items-center justify-center rounded-full number bg-neutral-100
            `}
            onClick={() => onToggleSticker(number)}
        >
            {label ?? number}
        </button>
    )
}