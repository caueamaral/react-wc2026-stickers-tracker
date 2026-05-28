export function Groups() {
    const stickers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <article className="flex flex-col gap-5">
            {
                ['A', 'B', 'C'].map(index => (
                    <section
                        key={index}
                        className="bg-white py-4 px-5 rounded-md"
                    >
                        <div className="border flex items-stretch">
                            <header className="border flex items-center">
                                <h2 className="text-2xl font-medium text-center uppercase p-5">
                                    Group
                                    <br />
                                    {index}
                                </h2>
                            </header>
                            <div className="flex-1">
                                <div className="flex">
                                    <span className="border p-2 min-w-40">México</span>
                                    {stickers.map(number => (
                                        <span className="border p-2 flex-1 text-center">{number}</span>
                                    ))}
                                </div>
                                <div className="flex">
                                    <span className="border p-2 min-w-40">África do Sul</span>
                                    {stickers.map(number => (
                                        <span className="border p-2 flex-1 text-center">{number}</span>
                                    ))}
                                </div>
                                <div className="flex">
                                    <span className="border p-2 min-w-40">Coréia do Sul</span>
                                    {stickers.map(number => (
                                        <span className="border p-2 flex-1 text-center">{number}</span>
                                    ))}
                                </div>
                                <div className="flex">
                                    <span className="border p-2 min-w-40">República Checa</span>
                                    {stickers.map(number => (
                                        <span className="border p-2 flex-1 text-center">{number}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </article>
    )
}