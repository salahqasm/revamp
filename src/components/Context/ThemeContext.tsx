import React, { ReactNode, useContext, useState } from 'react'
type props = {
  theme: boolean,
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
} | undefined
const ThemeContext = React.createContext<props>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(false);

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}
