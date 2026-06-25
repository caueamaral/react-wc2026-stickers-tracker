import { create } from 'zustand'

type SearchTeamStore = {
    searchTeam: string
    setSearchTeam: (value: string) => void
}

export const useSearchTeamStore = create<SearchTeamStore>((set) => ({
    searchTeam: '',
    setSearchTeam: (value) => set({ searchTeam: value })
}))