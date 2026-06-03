import { stickers } from '../data/stickers'
import { groups } from '../data/groups'

export function Groups() {
    return (
        <article className="flex flex-wrap justify-center gap-10 mx-auto">
            {
                groups.map(group => (
                    <section
                        key={group.name}
                        className="bg-white p-5 rounded-md w-100"
                    >
                        <div className="flex flex-col gap-3">
                            <header>
                                <h2 className="bg-gray-100 text-2xl font-medium text-center uppercase p-5">
                                    Group {group.name}
                                </h2>
                            </header>
                            <div className="flex flex-col gap-7">
                                {group.teams.map(team => (
                                    <div key={team} className="flex flex-col">
                                        <div className="p-2 text-center uppercase">
                                            {team}
                                        </div>
                                        <div className="bg-gray-100 flex">
                                            {stickers.slice(0, 10).map(number => (
                                                <span key={number} className="p-2 text-center flex-1 w-[10%]">
                                                    {number}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="bg-gray-100 flex">
                                            {stickers.slice(10, 20).map(number => (
                                                <span key={number} className="p-2 text-center flex-1 w-[10%]">
                                                    {number}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))
            }
        </article>
    )
}
