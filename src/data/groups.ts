import type { Team } from '../types/team'

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
                code: 'MEX',
                flag: '\u{1F1F2}\u{1F1FD}'
            },
            {
                name: 'África do Sul',
                code: 'RSA',
                flag: '\u{1F1FF}\u{1F1E6}'
            },
            {
                name: 'Coreia do Sul',
                code: 'KOR',
                flag: '\u{1F1F0}\u{1F1F7}'
            },
            {
                name: 'República Checa',
                code: 'CZE',
                flag: '\u{1F1E8}\u{1F1FF}'
            }
        ]
    },
    {
        letter: 'B',
        teams: [
            {
                name: 'Canadá',
                code: 'CAN',
                flag: '\u{1F1E8}\u{1F1E6}'
            },
            {
                name: 'Bósnia e Herzegovina',
                code: 'BIH',
                flag: '\u{1F1E7}\u{1F1E6}'
            },
            {
                name: 'Catar',
                code: 'QAT',
                flag: '\u{1F1F6}\u{1F1E6}'
            },
            {
                name: 'Suíça',
                code: 'SUI',
                flag: '\u{1F1E8}\u{1F1ED}'
            }
        ]
    },
    {
        letter: 'C',
        teams: [
            {
                name: 'Brasil',
                code: 'BRA',
                flag: '\u{1F1E7}\u{1F1F7}'
            },
            {
                name: 'Marrocos',
                code: 'MAR',
                flag: '\u{1F1F2}\u{1F1E6}'
            },
            {
                name: 'Haiti',
                code: 'HAI',
                flag: '\u{1F1ED}\u{1F1F9}'
            },
            {
                name: 'Escócia',
                code: 'SCO',
                flag: '\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}'
            }
        ]
    },
    {
        letter: 'D',
        teams: [
            {
                name: 'Estados Unidos',
                code: 'USA',
                flag: '\u{1F1FA}\u{1F1F8}'
            },
            {
                name: 'Paraguai',
                code: 'PAR',
                flag: '\u{1F1F5}\u{1F1FE}'
            },
            {
                name: 'Austrália',
                code: 'AUS',
                flag: '\u{1F1E6}\u{1F1FA}'
            },
            {
                name: 'Turquia',
                code: 'TUR',
                flag: '\u{1F1F9}\u{1F1F7}'
            }
        ]
    },
    {
        letter: 'E',
        teams: [
            {
                name: 'Alemanha',
                code: 'GER',
                flag: '\u{1F1E9}\u{1F1EA}'
            },
            {
                name: 'Curaçao',
                code: 'CUW',
                flag: '\u{1F1E8}\u{1F1FC}'
            },
            {
                name: 'Costa do Marfim',
                code: 'CIV',
                flag: '\u{1F1E8}\u{1F1EE}'
            },
            {
                name: 'Equador',
                code: 'ECU',
                flag: '\u{1F1EA}\u{1F1E8}'
            }
        ]
    },
    {
        letter: 'F',
        teams: [
            {
                name: 'Holanda',
                code: 'NED',
                flag: '\u{1F1F3}\u{1F1F1}'
            },
            {
                name: 'Japão',
                code: 'JPN',
                flag: '\u{1F1EF}\u{1F1F5}'
            },
            {
                name: 'Suécia',
                code: 'SWE',
                flag: '\u{1F1F8}\u{1F1EA}'
            },
            {
                name: 'Tunísia',
                code: 'TUN',
                flag: '\u{1F1F9}\u{1F1F3}'
            }
        ]
    },
    {
        letter: 'G',
        teams: [
            {
                name: 'Bélgica',
                code: 'BEL',
                flag: '\u{1F1E7}\u{1F1EA}'
            },
            {
                name: 'Egito',
                code: 'EGY',
                flag: '\u{1F1EA}\u{1F1EC}'
            },
            {
                name: 'Irã',
                code: 'IRN',
                flag: '\u{1F1EE}\u{1F1F7}'
            },
            {
                name: 'Nova Zelândia',
                code: 'NZL',
                flag: '\u{1F1F3}\u{1F1FF}'
            }
        ]
    },
    {
        letter: 'H',
        teams: [
            {
                name: 'Espanha',
                code: 'ESP',
                flag: '\u{1F1EA}\u{1F1F8}'
            },
            {
                name: 'Cabo Verde',
                code: 'CPV',
                flag: '\u{1F1E8}\u{1F1FB}'
            },
            {
                name: 'Arábia Saudita',
                code: 'KSA',
                flag: '\u{1F1F8}\u{1F1E6}'
            },
            {
                name: 'Uruguai',
                code: 'URU',
                flag: '\u{1F1FA}\u{1F1FE}'
            }
        ]
    },
    {
        letter: 'I',
        teams: [
            {
                name: 'França',
                code: 'FRA',
                flag: '\u{1F1EB}\u{1F1F7}'
            },
            {
                name: 'Senegal',
                code: 'SEN',
                flag: '\u{1F1F8}\u{1F1F3}'
            },
            {
                name: 'Iraque',
                code: 'IRQ',
                flag: '\u{1F1EE}\u{1F1F6}'
            },
            {
                name: 'Noruega',
                code: 'NOR',
                flag: '\u{1F1F3}\u{1F1F4}'
            }
        ]
    },
    {
        letter: 'J',
        teams: [
            {
                name: 'Argentina',
                code: 'ARG',
                flag: '\u{1F1E6}\u{1F1F7}'
            },
            {
                name: 'Argélia',
                code: 'ALG',
                flag: '\u{1F1E9}\u{1F1FF}'
            },
            {
                name: 'Áustria',
                code: 'AUT',
                flag: '\u{1F1E6}\u{1F1F9}'
            },
            {
                name: 'Jordânia',
                code: 'JOR',
                flag: '\u{1F1EF}\u{1F1F4}'
            }
        ]
    },
    {
        letter: 'K',
        teams: [
            {
                name: 'Portugal',
                code: 'POR',
                flag: '\u{1F1F5}\u{1F1F9}'
            },
            {
                name: 'RD Congo',
                code: 'COD',
                flag: '\u{1F1E8}\u{1F1E9}'
            },
            {
                name: 'Uzbequistão',
                code: 'UZB',
                flag: '\u{1F1FA}\u{1F1FF}'
            },
            {
                name: 'Colômbia',
                code: 'COL',
                flag: '\u{1F1E8}\u{1F1F4}'
            }
        ]
    },
    {
        letter: 'L',
        teams: [
            {
                name: 'Inglaterra',
                code: 'ENG',
                flag: '\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}'
            },
            {
                name: 'Croácia',
                code: 'CRO',
                flag: '\u{1F1ED}\u{1F1F7}'
            },
            {
                name: 'Gana',
                code: 'GHA',
                flag: '\u{1F1EC}\u{1F1ED}'
            },
            {
                name: 'Panamá',
                code: 'PAN',
                flag: '\u{1F1F5}\u{1F1E6}'
            }
        ]
    }
]
