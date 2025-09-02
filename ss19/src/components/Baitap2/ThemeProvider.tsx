import React, { useState } from 'react'
import { ThemeProviderContext } from './ThemeContext';

type PropTypes = {
    children?: React.ReactNode;
}
export default function ThemeProvider({children}: PropTypes) {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
  return (
    <div>
        <ThemeProviderContext.Provider value={{theme, toggleTheme}}>
        <div className={theme === "light" ? "light-theme" : "dark-theme"}>
            {children}
        </div>
        </ThemeProviderContext.Provider>
    </div>
  )
}