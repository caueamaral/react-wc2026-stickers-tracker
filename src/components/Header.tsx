import type { Dispatch, SetStateAction } from 'react'

type HeaderProps = {
    searchTeam: string
    setSearchTeam: Dispatch<SetStateAction<string>>
}

export function Header({ searchTeam, setSearchTeam }: HeaderProps ) {
    return (
        <header className="flex flex-col items-center mb-5 px-10">
            <h1 className="text-white font-medium text-center text-3xl mb-8">
                <abbr title="Fédération Internationale de Football Association" className="no-underline">FIFA</abbr> World Cup 2026
                <br />
                Stickers Tracker
            </h1>
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