import { ThemeType } from '@/modules/theme/types/theme.type'
import { getSystemTheme } from '@/utils/get-system-theme'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ThemeStore {
    theme: ThemeType
    setTheme: (theme: ThemeStore['theme']) => void
}

export const useThemeStore = create<
    ThemeStore,
    [['zustand/devtools', ThemeStore], ['zustand/persist', ThemeStore], ['zustand/immer', ThemeStore]]
>(
    devtools(
        persist(
            immer(set => ({
                theme: getSystemTheme(),
                setTheme: theme =>
                    set(state => {
                        state.theme = theme
                    }),
            })),
            {
                name: 'theme',
            }
        )
    )
)
