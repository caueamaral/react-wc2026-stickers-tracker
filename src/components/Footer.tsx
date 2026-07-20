import { FooterButton } from './FooterButton'

import { StickersIcon } from '../icons/StickersIcon'
import { MissingIcon } from '../icons/MissingIcon'
import { StatisticsIcon } from '../icons/StatisticsIcon'

export function Footer() {
    return (
        <footer className="bg-gray-100 h-20 flex items-stretch fixed bottom-0 left-0 w-full">
            <FooterButton
                page="stickers"
                text="Stickers"
                icon={<StickersIcon />}
            />
            <FooterButton
                page="missing"
                text="Missing"
                icon={<MissingIcon />}
            />
            <FooterButton
                page="statistics"
                text="Statistics"
                icon={<StatisticsIcon />}
            />
        </footer>
    )
}
