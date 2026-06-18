import type { Dispatch, SetStateAction } from 'react'

type SearchProps = {
    searchTeam: string
    setSearchTeam: Dispatch<SetStateAction<string>>
}

export function Search({ searchTeam, setSearchTeam }: SearchProps) {
    return (
        <header className="flex flex-col items-center px-10">
            <form className="flex w-90 max-w-full">
                <input
                    type="text"
                    placeholder="Search team"
                    className="bg-neutral-100 block py-3 px-4 w-full rounded-l-md outline-none"
                    value={searchTeam}
                    onChange={(event) => setSearchTeam(event.target.value)}
                />
                <button
                    type="button"
                    data-label="Search"
                    className="bg-neutral-300 px-3 cursor-pointer rounded-r-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </header>
    )
}