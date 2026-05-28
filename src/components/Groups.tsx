export function Groups() {
    const stickers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const groups = [
        {
            name: 'A',
            teams: ['México', 'África do Sul', 'Coréia do Sul', 'República Checa']
        },
        {
            name: 'B',
            teams: ['Canadá', 'Bósnia', 'Catar', 'Suiça']
        },
    ]

    return (
        <article className="flex flex-col gap-5">
            {
                groups.map((group, index) => (
                    <section
                        key={index}
                        className="bg-white py-4 px-5 rounded-md"
                    >
                        <div className="border border-gray-300 flex items-stretch">
                            <header className="border border-gray-300 flex items-center">
                                <h2 className="text-2xl font-medium text-center uppercase p-5">
                                    Group
                                    <br />
                                    {group.name}
                                </h2>
                            </header>
                            <div className="flex-1">
                                {group.teams.map((team, index) => (
                                    <div key={index} className="flex">
                                        <span className="border border-gray-300 p-2 min-w-40">{team}</span>
                                        {stickers.map((number, index) => (
                                            <span key={index} className="border border-gray-300 p-2 flex-1 text-center">
                                                {number}
                                            </span>
                                        ))}
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