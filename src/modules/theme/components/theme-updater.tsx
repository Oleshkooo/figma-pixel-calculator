import { themeDarkClassName } from '@/modules/theme/constants/theme.constant'
import { useThemeStore } from '@/modules/theme/store/theme.store'
import { ThemeEnum } from '@/modules/theme/types/theme.type'
import { getSystemTheme } from '@/utils/get-system-theme'
import { memo, useEffect } from 'react'

type ThemeUpdaterProps = unknown
export const ThemeUpdater: React.FC<ThemeUpdaterProps> = memo(() => {
    const theme = useThemeStore(state => state.theme)

    useEffect(() => {
        const mutatedTheme = theme === ThemeEnum.SYSTEM ? getSystemTheme() : theme
        if (document.body.classList.contains(ThemeEnum.DARK)) {
            document.body.classList.remove(themeDarkClassName)
        }
        if (mutatedTheme === ThemeEnum.DARK) {
            document.body.classList.add(themeDarkClassName)
        }
    }, [theme])

    return null
})
ThemeUpdater.displayName = ThemeUpdater.name
