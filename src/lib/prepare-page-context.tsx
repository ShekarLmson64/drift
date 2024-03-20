import { createContext } from "react"

export interface PageContextProps {
  isMobile?: boolean
}
export const PageContext = createContext<PageContextProps | undefined>(
  undefined
)
