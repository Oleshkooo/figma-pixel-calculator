import { MainCalculator } from '@/modules/main/components/main-calculator'
import { ThemeSelector } from '@/modules/theme/components/theme-selector'
import { ThemeUpdater } from '@/modules/theme/components/theme-updater'
import { memo } from 'react'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    return (
        <>
            <ThemeSelector variant="outline" className="absolute top-5 right-5" />
            <MainCalculator />
            <ThemeUpdater />
        </>
    )
})
App.displayName = 'App'
