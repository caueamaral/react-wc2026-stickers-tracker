import { create } from 'zustand'

type StickersLockStore = {
    areStickersLocked: boolean
    toggleStickersLock: () => void
}

export const useStickersLockStore = create<StickersLockStore>((set) => ({
    areStickersLocked: true,
    toggleStickersLock: () => set(state => ({
        areStickersLocked: !state.areStickersLocked
    }))
}))