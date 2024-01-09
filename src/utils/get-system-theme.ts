import { BaseThemeType } from '@/modules/theme/types/theme.type'

type GetSystemTheme = () => BaseThemeType
export const getSystemTheme: GetSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
