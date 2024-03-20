import { PageContext } from "@/lib/prepare-page-context"
import { useContext, useEffect, useState } from "react"
export const useMobileCheck = (width = "(min-width : 641px )") => {
  const pageContext = useContext(PageContext)
  const isMobInitial: any = pageContext?.isMobile
  const [isMobile, setIsMobile] = useState(isMobInitial)
  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileViewport = global.window.matchMedia("(max-width: 641px)").matches
      setIsMobile(isMobileViewport)
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])
  return isMobile
}
