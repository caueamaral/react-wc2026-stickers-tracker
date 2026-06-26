import { create } from 'zustand'

type StickersLockStore = {
    areStickersLocked: boolean
    toggleStickersLock: () => void
    lockStickers: () => void
}

export const useStickersLockStore = create<StickersLockStore>(set => ({
    areStickersLocked: true,
    toggleStickersLock: () => set(state => ({
        areStickersLocked: !state.areStickersLocked
    })),
    lockStickers: () => set({
        areStickersLocked: true
    })
}))