import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './Logo.module.scss'

type LogoSize = 'm' | 'xl'

interface LogoProps {
    className?: string
    size?: LogoSize
}

export const Logo = memo((props: LogoProps) => {
    const { className, size = 'm' } = props

    return (
        <div className={classNames(cls.Logo, {}, [className, cls[size]])}>
            <div className={cls['logo-wrapper']}>
                <div className={cls['logo-item']}></div>
                <div className={cls['logo-item']}></div>
            </div>
            <Text title="TrackTech" size={size} />
        </div>
    )
})
