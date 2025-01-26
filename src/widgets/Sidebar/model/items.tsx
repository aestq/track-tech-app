import { type LucideProps } from 'lucide-react'
import { type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { type RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export interface Item {
    text: string
    path: RoutePaths
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
}
