import { ReactNode, createContext } from 'react'

export type GlobalContext = {}

export const GlobalContext = createContext<GlobalContext | null>(null)

export default function GlobalContextProvider({ children }: { children: ReactNode }) {
  const values = {}

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
}
