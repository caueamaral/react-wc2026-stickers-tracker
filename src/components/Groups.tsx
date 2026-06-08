import { stickers } from '../data/stickers'
import { groups } from '../data/groups'

export function Groups() {
    return (
        groups.map(group => (
            <article key={group.letter} className="bg-white gap-10 p-5 rounded-md w-100">
                <header>
                    <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-5">
                        Group {group.letter}
                    </h2>
                </header>
                <section className="flex flex-col gap-10">
                    {group.teams.map(team => (
                        <section key={team.name} className="flex flex-col">
                            <div className="font-bold py-3">
                                {team.code} - {team.name} {team.flag}
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    {stickers.slice(0, 5).map(number => (
                                        <span key={number} className="bg-neutral-100 px-2 py-4 text-center flex-1 w-[10%] cursor-pointer rounded-full number">
                                            {number}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-5">
                                    {stickers.slice(5, 10).map(number => (
                                        <span key={number} className="bg-gray-100 px-2 py-4  text-center flex-1 w-[10%] cursor-pointer rounded-full number">
                                            {number}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-5">
                                    {stickers.slice(10, 15).map(number => (
                                        <span key={number} className="bg-gray-100 px-2 py-4 text-center flex-1 w-[10%] cursor-pointer rounded-full number">
                                            {number}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-5">
                                    {stickers.slice(15, 20).map(number => (
                                        <span key={number} className="bg-gray-100 px-2 py-4 text-center flex-1 w-[10%] cursor-pointer rounded-full number">
                                            {number}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </section>
            </article>
        ))
    )
}
