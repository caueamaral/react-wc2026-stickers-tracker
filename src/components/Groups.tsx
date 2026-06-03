export function Groups() {
    const stickers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const groups = [
        {
            name: 'A',
            teams: ['México', 'África do Sul', 'Coreia do Sul', 'República Checa']
        },
        {
            name: 'B',
            teams: ['Canadá', 'Bósnia e Herzegovina', 'Catar', 'Suíça']
        },
        {
            name: 'C',
            teams: ['Brasil', 'Marrocos', 'Haiti', 'Escócia']
        },
        {
            name: 'D',
            teams: ['Estados Unidos', 'Paraguai', 'Austrália', 'Turquia']
        },
        {
            name: 'E',
            teams: ['Alemanha', 'Curaçao', 'Costa do Marfim', 'Equador']
        },
        {
            name: 'F',
            teams: ['Países Baixos', 'Japão', 'Suécia', 'Tunísia']
        },
        {
            name: 'G',
            teams: ['Bélgica', 'Egito', 'Irã', 'Nova Zelândia']
        },
        {
            name: 'H',
            teams: ['Espanha', 'Cabo Verde', 'Arábia Saudita', 'Uruguai']
        },
        {
            name: 'I',
            teams: ['França', 'Senegal', 'Iraque', 'Noruega']
        },
        {
            name: 'J',
            teams: ['Argentina', 'Argélia', 'Áustria', 'Jordânia']
        },
        {
            name: 'K',
            teams: ['Portugal', 'RD Congo', 'Uzbequistão', 'Colômbia']
        },
        {
            name: 'L',
            teams: ['Inglaterra', 'Croácia', 'Gana', 'Panamá']
        }
    ]

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
