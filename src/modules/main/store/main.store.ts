import { Unit } from '@/modules/main/constants/main.constants'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface MainStore {
    xUnit: Unit
    yUnit: Unit
}

export const useMainStore = create<
    MainStore,
    [['zustand/devtools', MainStore], ['zustand/persist', MainStore], ['zustand/immer', MainStore]]
>(
    devtools(
        persist(
            immer(set => ({
                xUnit: 'cm',
                yUnit: 'cm',
            })),
            {
                name: 'main',
            }
        )
    )
)
