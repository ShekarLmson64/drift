import { useState, useEffect } from "react"

export const useLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleStorageChange = () => {
        const token = global?.window?.localStorage?.getItem("accessToken")
        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    useEffect(() => {
        // Add event listener for localStorage changes
        global.window.addEventListener('storage', handleStorageChange);
        // Cleanup
        return () => {
            global.window.removeEventListener('storage', handleStorageChange);
        };
    }, [])

    return isLoggedIn
}
