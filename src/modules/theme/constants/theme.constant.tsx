import { defaultIconProps } from '@/config/icons.config'
import { ThemeType } from '@/modules/theme/types/theme.type'
import { Moon, Sparkles, Sun } from 'lucide-react'
import React from 'react'

export const themeDarkClassName = 'dark'

export const ThemesIcons: Record<ThemeType, React.FC> = {
    light: (props: React.ComponentProps<typeof Sun>) => <Sun {...defaultIconProps} {...props} />,
    dark: (props: React.ComponentProps<typeof Moon>) => <Moon {...defaultIconProps} {...props} />,
    system: (props: React.ComponentProps<typeof Sparkles>) => <Sparkles {...defaultIconProps} {...props} />,
}
