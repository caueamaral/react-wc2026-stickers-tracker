export type Team = {
    name: string
    code: string
}

export type Group = {
    letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L'
    teams: Team[]
}

export const groups: Group[] = [
    {
        letter: 'A',
        teams: [
            {
                name: 'México',
                code: 'MEX'
            },
            {
                name: 'África do Sul',
                code: 'RSA'
            },
            {
                name: 'Coreia do Sul',
                code: 'KOR'
            },
            {
                name: 'República Checa',
                code: 'CZE'
            }
        ]
    },
    {
        letter: 'B',
        teams: [
            {
                name: 'Canadá',
                code: 'CAN'
            },
            {
                name: 'Bósnia e Herzegovina',
                code: 'BIH'
            },
            {
                name: 'Catar',
                code: 'QAT'
            },
            {
                name: 'Suíça',
                code: 'SUI'
            }
        ]
    },
    {
        letter: 'C',
        teams: [
            {
                name: 'Brasil',
                code: 'BRA'
            },
            {
                name: 'Marrocos',
                code: 'MAR'
            },
            {
                name: 'Haiti',
                code: 'HAI'
            },
            {
                name: 'Escócia',
                code: 'SCO'
            }
        ]
    },
    {
        letter: 'D',
        teams: [
            {
                name: 'Estados Unidos',
                code: 'USA'
            },
            {
                name: 'Paraguai',
                code: 'PAR'
            },
            {
                name: 'Austrália',
                code: 'AUS'
            },
            {
                name: 'Turquia',
                code: 'TUR'
            }
        ]
    },
    {
        letter: 'E',
        teams: [
            {
                name: 'Alemanha',
                code: 'GER'
            },
            {
                name: 'Curaçao',
                code: 'CUW'
            },
            {
                name: 'Costa do Marfim',
                code: 'CIV'
            },
            {
                name: 'Equador',
                code: 'ECU'
            }
        ]
    },
    {
        letter: 'F',
        teams: [
            {
                name: 'Países Baixos',
                code: 'NED'
            },
            {
                name: 'Japão',
                code: 'JPN'
            },
            {
                name: 'Suécia',
                code: 'SWE'
            },
            {
                name: 'Tunísia',
                code: 'TUN'
            }
        ]
    },
    {
        letter: 'G',
        teams: [
            {
                name: 'Bélgica',
                code: 'BEL'
            },
            {
                name: 'Egito',
                code: 'EGY'
            },
            {
                name: 'Irã',
                code: 'IRN'
            },
            {
                name: 'Nova Zelândia',
                code: 'NZL'
            }
        ]
    },
    {
        letter: 'H',
        teams: [
            {
                name: 'Espanha',
                code: 'ESP'
            },
            {
                name: 'Cabo Verde',
                code: 'CPV'
            },
            {
                name: 'Arábia Saudita',
                code: 'KSA'
            },
            {
                name: 'Uruguai',
                code: 'URU'
            }
        ]
    },
    {
        letter: 'I',
        teams: [
            {
                name: 'França',
                code: 'FRA'
            },
            {
                name: 'Senegal',
                code: 'SEN'
            },
            {
                name: 'Iraque',
                code: 'IRQ'
            },
            {
                name: 'Noruega',
                code: 'NOR'
            }
        ]
    },
    {
        letter: 'J',
        teams: [
            {
                name: 'Argentina',
                code: 'ARG'
            },
            {
                name: 'Argélia',
                code: 'ALG'
            },
            {
                name: 'Áustria',
                code: 'AUT'
            },
            {
                name: 'Jordânia',
                code: 'JOR'
            }
        ]
    },
    {
        letter: 'K',
        teams: [
            {
                name: 'Portugal',
                code: 'POR'
            },
            {
                name: 'RD Congo',
                code: 'COD'
            },
            {
                name: 'Uzbequistão',
                code: 'UZB'
            },
            {
                name: 'Colômbia',
                code: 'COL'
            }
        ]
    },
    {
        letter: 'L',
        teams: [
            {
                name: 'Inglaterra',
                code: 'ENG'
            },
            {
                name: 'Croácia',
                code: 'CRO'
            },
            {
                name: 'Gana',
                code: 'GHA'
            },
            {
                name: 'Panamá',
                code: 'PAN'
            }
        ]
    }
]
