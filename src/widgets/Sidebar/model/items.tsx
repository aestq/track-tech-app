import { type ReactElement, type SVGProps } from 'react'
import { type RoutePaths } from 'shared/config/routeConfig/RoutePaths'

export interface Item {
  text: string
  path: RoutePaths
  icon: (props: SVGProps<SVGElement>) => ReactElement
}
