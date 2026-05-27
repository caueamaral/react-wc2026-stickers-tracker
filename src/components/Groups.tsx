export function Groups() {
    return (
        <article className="flex flex-col gap-5">
            {
                ['A', 'B', 'C'].map(index => (
                    <section
                        key={index}
                        className="bg-white py-4 px-5 rounded-lg"
                    >
                        <header>
                            <h2 className="text-2xl font-medium">Group {index}</h2>
                        </header>
                        <div>
                            <div>
                                México
                            </div>
                            <div>
                                África do Sul
                            </div>
                            <div>
                                Coréia do Sul
                            </div>
                            <div>
                                República Tcheca
                            </div>
                        </div>
                    </section>
                ))
            }
        </article>
    )
}