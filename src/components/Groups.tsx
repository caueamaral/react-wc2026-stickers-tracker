import { stickers } from '../data/stickers'
import { groups } from '../data/groups'

export function Groups() {
    return (
        <article className="flex flex-col items-center gap-10">
            {
                groups.map(group => (
                    <section
                        key={group.name}
                        className="bg-white p-5 rounded-md w-100"
                    >
                        <div className="flex flex-col gap-3">
                            <header>
                                <h2 className="bg-neutral-600 text-white text-2xl font-medium text-center uppercase p-5">
                                    Group {group.name}
                                </h2>
                            </header>
                            <div className="flex flex-col gap-10">
                                {group.teams.map(team => (
                                    <div key={team}>
                                        <div className="font-bold py-3">
                                            {team}
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <div className="flex gap-5">
                                                {stickers.slice(0, 5).map(number => (
                                                    <span key={number} className="bg-neutral-100 px-2 py-4 text-center flex-1 w-[10%] cursor-pointer rounded-full number selected">
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
